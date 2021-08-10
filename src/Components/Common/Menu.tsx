export default function Menu() {
    return (
        <div className='row'>
            <div className='col'>
                <a href='/' className='link link_white'>
                    На главную
                </a>
            </div>
            <div className='col'>
                <a href='/add' className='button'>
                <span className='button__label'>
                    Добавить книгу
                </span>
                    <i className='button__icon button__icon_right icon icon_plus'/>
                </a>
            </div>
        </div>
    );
}
