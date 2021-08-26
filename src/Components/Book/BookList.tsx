import BookCard from './BookCard';
import {getBookList} from '../../Services/books';

export default function BookList() {
    const books = getBookList();
    return (
        <div className='page__wrapper'>
            <div className='container'>
                <div className='row row_wrap'>
                    {!books.length &&
                        <div className='text text_italic text_grey text_center col col_wide'>
                            Список пуст
                        </div>
                    }
                    {books.map(book =>
                        <div key={book.id} className='col col_4'>
                            <BookCard book={book}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}