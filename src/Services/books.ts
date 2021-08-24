import emptyPhoto from '../assets/empty-photo.jpg'

export interface Book {
    id?: number;
    name: string;
    description: string;
    auth: string;
    publisher: string;
    isbn: string;
    year: string;
    photo: string;
    reviews: string;
    notes: string;
    pageCount: string;
    rating: number;
}

export const defaultPhoto = emptyPhoto;

export function getBookList(): Book[] {
    return JSON.parse(window.localStorage.getItem('book-list') || '[]');
}

export function getBookById(bookId: number): Book {
    return getBookList().find(({id}) => id === bookId) as Book;
}

export function deleteBook(id: number | undefined) {
    const bookList: Book[] = getBookList();
    const newBookList = bookList.filter((book) => book.id !== id);
    window.localStorage.setItem('book-list', JSON.stringify(newBookList));
}

export function saveBookList(book: Book) {
    const bookList: Book[] = getBookList();
    book.id = new Date().getTime();
    bookList.push(book);
    window.localStorage.setItem('book-list', JSON.stringify(bookList));
}
