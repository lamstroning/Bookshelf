import logo from '../../assets/images/icons/logo.svg';
import React from 'react';

export default function Header() {
    return (
        <header className='header'>
            <div className='header__logo'>
                <div className='logo'>
                    <img
                        className="logo"
                        src={logo}
                        alt="logo"
                    />
                </div>
                Bookshelf
            </div>
        </header>
    );
}
