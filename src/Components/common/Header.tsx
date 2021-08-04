import Menu from './Menu'
import logo from '../../assets/images/icons/logo.svg';

export default function Header() {
    return (
        <header className='header row row_between'>
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
            <Menu/>
        </header>
    );
}
