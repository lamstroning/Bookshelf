import BookCard from './BookCard';
import {books} from '../../Services/books';

export default function BookList() {
    return (
        <div className='page__wrapper'>
            <div className='container'>
                <div className='row row_wrap'>
                    {books.map(book =>
                        <div key={book.name} className='col col_3'>
                            <BookCard book={book}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}