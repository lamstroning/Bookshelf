import Menu from './Menu'
import logo from '../../assets/icons/logo.svg';

export default function Header() {
    return (
        <div className='container'>
            <header className='header row row_between'>
                <div className='container'>
                    <div className='logo row'>
                        <img
                            className='logo__img'
                            src={logo}
                            alt='logo'
                        />
                        <div className='logo__name'>
                            Bookshelf
                        </div>
                    </div>
                </div>
                <Menu/>
            </header>
        </div>
    );
}
