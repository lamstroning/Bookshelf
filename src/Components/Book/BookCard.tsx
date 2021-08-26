import {Book, defaultPhoto, getKeys} from '../../Services/books';
// import Rating from '../Common/Rating';
import Translate from "../../utils/translate";
import Rating from "../Common/Rating";

const filterValue = ['id', 'photo', 'year', 'notes', 'pageCount', 'reviews', 'description', 'rating', 'publisher']

export default function BookCard({book}: {book: Book}) {
    const booksValue = getKeys(book, filterValue);

    return (
        <div className='book-card'>
            <div className='book-card__section'>
                <div
                    className='book-card__photo'
                    style={{backgroundImage: `url(${book.photo || defaultPhoto})`}}
                />
            </div>
            <div className='book-card__section row row_between row_clearOffset row_column'>
                <div className='col col_12'>
                    {booksValue.map(booksValue =>
                        <>
                            <div className='book-card__label'>
                                {Translate(booksValue.key)}:
                            </div>
                            <div
                                className='book-card__value text text_overflow'
                                title={`${booksValue.value}`}
                            >
                                {booksValue.value}
                            </div>
                        </>
                    )}
                </div>
                <div className='col'>
                    <Rating currentRating={book.rating}/>
                </div>
            </div>
        </div>
    );
}