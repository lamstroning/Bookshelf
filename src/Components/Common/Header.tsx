import Menu from './Menu'
import logo from '../../assets/icons/logo.svg';

export default function Header() {
    return (
        <div className='container'>
            <header className='header row row_between'>
                <div className='container'>
                    <a
                        href='/'
                        className='logo row'
                    >
                        <img
                            className='logo__img'
                            src={logo}
                            alt='logo'
                        />
                        <div className='logo__name'>
                            Bookshelf
                        </div>
                    </a>
                </div>
                <Menu/>
            </header>
        </div>
    );
}
