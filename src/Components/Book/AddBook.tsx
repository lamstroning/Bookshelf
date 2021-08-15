import {ChangeEvent, useState} from 'react';

import Input from '../Common/Input';
import InputFile from '../Common/InputFile';
import {saveBookList} from '../../Services/books';
import Rating from "../Common/Rating";

export default function AddBook() {
    const [validate, setValidate] = useState(true);
    const [success, setSuccess] = useState(false);
    const currentYear = new Date().getFullYear();
    const [book, setBook] = useState({
        name: '',
        description: '',
        auth: '',
        publisher: '',
        isbn: '',
        photo: '',
        reviews: '',
        notes: '',
        year: '',
        pageCount: '',
        rating: 0
    });

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

    return (
        <form className='page__wrapper form'>
            <div className='container'>
                <div className='row row_stretch'>
                    <div className='col col_4 form__file'>
                        <InputFile value={book.photo}/>
                    </div>
                    <div className='col col_wide'>
                        <div className='form__input'>
                            <Input
                                label='Название'
                                value={book.name}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setBook({...book, name: event.target.value});
                                }}
                                error={!validate && !book.name}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Описание'
                                value={book.description}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setBook({...book, description: event.target.value});
                                }}
                                error={!validate && !book.description}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Автор'
                                value={book.auth}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setBook({...book, auth: event.target.value});
                                }}
                                error={!validate && !book.auth}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Издательство'
                                value={book.publisher}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setBook({...book, publisher: event.target.value});
                                }}
                                error={!validate && !book.publisher}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Код ISBN'
                                type='number'
                                value={book.isbn}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setBook({...book, isbn: event.target.value});
                                }}
                                error={!validate && !book.isbn}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Год издания'
                                type='number'
                                value={book.year}
                                max={currentYear}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setBook({...book, year: event.target.value});
                                }}
                                error={!validate && !book.year}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Количество страниц'
                                type='number'
                                value={book.pageCount}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setBook({...book, pageCount: event.target.value});
                                }}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Отзывы тех, кто прочитал'
                                value={book.reviews}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setBook({...book, reviews: event.target.value});
                                }}
                            />
                        </div>
                        <div className='form__input'>
                            <Input
                                label='Личные заметки по книге'
                                value={book.notes}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setBook({...book, notes: event.target.value});
                                }}
                            />
                        </div>
                        <div className='form__input'>
                            <Rating
                                currentRating={book.rating}
                                onChange={(rating: number) => setBook({...book, rating})}/>
                        </div>
                        <div className='form__input row container'>
                            <button
                                className='button button_primary'
                                type='button'
                                onClick={() => validateForm()}
                            >
                                Сохранить
                            </button>
                            {success &&
                                <div className='success'>
                                    сохранено
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}