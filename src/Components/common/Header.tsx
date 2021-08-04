import logo from '../../assets/images/icons/logo.svg';
import React from 'react';

export default function Header() {
    return (
        <header>
            <div className='logo'>
                <img
                    className="logo"
                    src={logo}
                    alt="logo"
                />
            </div>
        </header>
    );
}
