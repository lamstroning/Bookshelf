import logo from '../../assets/images/icons/logo.svg';
import React from 'react';

export default function Header() {
    return (
        <header className='header'>
            <div className='logo row container'>
                <img
                    className='logo__img'
                    src={logo}
                    alt='logo'
                />
                <div className='logo__name'>
                    Bookshelf
                </div>
            </div>
        </header>
    );
}
