import {Book} from '../../Services/books';

export default function BookCard({book}: {book: Book}) {
    return (
        <div className='book-card'>
            {book.name}
            <div className='book-card__rating'>
            </div>
        </div>
    );
}