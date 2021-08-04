import React from 'react';
import '../styles/components/_app.scss';
import Filter from './Common/Filter';
import Header from './Common/Header';

function App() {
  return (
    <div className='App'>
        <Header/>
        <Filter/>
    </div>
  );
}

export default App;
