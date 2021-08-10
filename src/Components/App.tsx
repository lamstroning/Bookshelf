import React from 'react';
import '../styles/components/_app.scss';
import Filter from './Common/Filter';
import Header from './Common/Header';
import BookList from './Book/BookList';

function App() {
  return (
    <div className='page'>
        <Header/>
        <Filter/>
        <div className='page__body'>
            <BookList/>
        </div>
    </div>
  );
}

export default App;
