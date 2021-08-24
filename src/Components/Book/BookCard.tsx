import {Book, defaultPhoto} from '../../Services/books';
import Rating from '../Common/Rating';

export default function BookCard({book}: {book: Book}) {
    return (
        <div className='book-card'>
            <span
                className='book-card__photo'
                style={{backgroundImage: `url(${book.photo || defaultPhoto})`}}
            >

            </span>
            <div className=''>
                {book.name}
            </div>
            <div className=''>{book.description}</div>
            <div className=''>{book.auth}</div>
            <div className=''>{book.publisher}</div>
            <div className=''>{book.isbn}</div>
            <div className=''>{book.reviews}</div>
            <div className=''>{book.notes}</div>
            <div className=''>{book.year}</div>
            <div className=''>{book.pageCount}</div>
            <span className='book-card__info'>
                <Rating currentRating={book.rating}/>
                <a
                    href={`/detail/${book.id}`}
                    className='button button_center button_primary'
                >
                    Подробнее
                </a>
            </span>
        </div>
    );
}