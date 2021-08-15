import {Book, defaultPhoto} from '../../Services/books';
import Rating from "../Common/Rating";

export default function BookCard({book}: {book: Book}) {
    return (
        <div
            className='book-card'
            style={{backgroundImage: `url(${book.photo || defaultPhoto})`}}
        >
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
            <Rating currentRating={book.rating}/>
        </div>
    );
}