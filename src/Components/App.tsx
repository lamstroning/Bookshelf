import '../styles/components/_app.scss';

import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import Filter from './Common/Filter';
import Header from './Common/Header';
import BookList from './Book/BookList';
import NotFound from './Common/NotFound';
import AddBook from './Book/AddBook';
import DetailBook from "./Book/DetailBook";

function App() {
  return (
    <div className='page'>
        <Header/>
        <Filter/>
        <div className='page__body'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <BookList/>
                    </Route>
                    <Route path='/add'>
                        <AddBook/>
                    </Route>
                    <Route exact path='/detail/:id'>
                        <DetailBook/>
                    </Route>
                    <Route path='*'>
                        <Redirect to='/404'/>
                        <NotFound/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
