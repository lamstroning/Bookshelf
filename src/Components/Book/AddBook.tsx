import {ChangeEvent, useState} from 'react';

import Input from '../Common/Input';
import InputFile from '../Common/InputFile';
import {getKeys, saveBookList} from '../../Services/books';
import Rating from "../Common/Rating";
import Translate from "../../utils/translate";

const filterKeys: string[] = ['id', 'photo', 'rating']
const mandatoryKeys: string[] = ['name', 'description', 'auth', 'publisher', 'isbn', 'year']

export default function AddBook() {
    const [validate, setValidate] = useState(true);
    const [success, setSuccess] = useState(false);
    const [book, setBook] = useState({
        name: '',
        description: '',
        auth: '',
        publisher: '',
        isbn: '',
        year: '',
        photo: '',
        reviews: '',
        notes: '',
        pageCount: '',
        rating: 0
    });

    const booksValue = getKeys(book, filterKeys);

    function validateForm() {
        if (
            book.name &&
            book.auth
        ) {
            saveBookList(book);
            setSuccess(true);
        }
        else
            setValidate(false);
    }

    function getBase64(fileList: FileList | null) {
        if (!fileList)
            return;
        const file = fileList[0];
        const blob = new Blob([file]);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(blob);
        fileReader.onload = () => setBook({...book, photo: fileReader.result as string});
    }

    return (
        <form className='page__wrapper form'>
            <div className='container'>
                <div className='row row_stretch'>
                    <div
                        className='col col_4 form__file'
                        style={{backgroundImage: `url(${book.photo})`}}
                    >
                        <InputFile
                            accept='.jpg, .jpeg, .png'
                            onChange={(event: ChangeEvent<HTMLInputElement>) => getBase64(event.target.files)}
                            value={book.photo}
                        />
                    </div>
                    <div className='col col_wide'>
                        {booksValue.map(bookValue =>
                            <>
                                <div className='form__input' key={bookValue.key}>
                                    <Input
                                        label={Translate(bookValue.key)}
                                        value={bookValue.value}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                            setBook({...book, [bookValue.key]: event.target.value});
                                            console.log(validate);
                                        }}
                                        error={mandatoryKeys.includes(bookValue.key) && !validate && !bookValue.value}
                                    />
                                </div>
                            </>
                        )}

                        <div className='form__input'>
                            <Rating
                                currentRating={book.rating}
                                onChange={(rating: number) => setBook({...book, rating})}/>
                        </div>
                        <div className='form__input'>
                            <div className='display display_inline-block'>
                                <button
                                    className='button button_primary'
                                    type='button'
                                    onClick={() => validateForm()}
                                >
                                    Сохранить
                                </button>
                            </div>
                            {success &&
                                <div className='display display_inline-block'>
                                    <div className='text text_size-small success margin margin_x-1'>
                                        сохранено
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}