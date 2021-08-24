import {useLocation} from 'react-router-dom';
import {getBookById} from '../../Services/books';

export default function DetailBook() {
    const location = useLocation();
    const book = getBookById(+location.pathname.split('/')[2])

    return (
        <div>
            {book.name}
        </div>
    )
}