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

export const books: Book[] = [
    {
        id: 0,
        name: 'book',
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
    },
    {
        id: 0,
        name: 'book',
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
    },
    {
        id: 0,
        name: 'book',
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
    },
    {
        id: 0,
        name: 'book',
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
    },
    {
        id: 0,
        name: 'book',
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
    }
];

export function getBookList(): Book[] {
    return JSON.parse(window.localStorage.getItem('book-list') || '[]');
}

export function deleteBook(id: number) {
    const bookList: Book[] = getBookList();

    bookList.filter((book) => book.id !== id);
    window.localStorage.setItem('book-list', JSON.stringify(bookList));
}

export function saveBookList(book: Book) {
    const bookList: Book[] = getBookList();
    book.id = new Date().getTime();
    bookList.push(book);
    window.localStorage.setItem('book-list', JSON.stringify(bookList));
}
