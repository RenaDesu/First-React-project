import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='main-nav'>
            <ul className='main-nav__list'>
                <li className='main-nav__list-item main-nav__list-item--current'>
                    <a href='/profile'>Профиль</a>
                </li>
                <li className='main-nav__list-item'>
                    <a href='/messages'>Сообщения</a>
                </li>
                <li className='main-nav__list-item'>
                    <a href='/news'>Новости</a>
                </li>
                <li className='main-nav__list-item'>
                    <a href='/music'>Музыка</a>
                </li>
            </ul>
            <ul className='main-nav__settings'>
                <li className='main-nav__settings-item'>
                    <a href='/settings'>Настройки</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;