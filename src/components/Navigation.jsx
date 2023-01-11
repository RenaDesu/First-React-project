
const Navigation = () => {
    return (
        <nav className='main-nav'>
            <ul className='main-nav__list'>
                <li className='main-nav__list-item'>
                    <a href='#с'>Профиль</a>
                </li>
                <li className='main-nav__list-item'>
                    <a href='#с'>Сообщения</a>
                </li>
                <li className='main-nav__list-item'>
                    <a href='#с'>Новости</a>
                </li>
                <li className='main-nav__list-item'>
                    <a href='#с'>Музыка</a>
                </li>
            </ul>
            <ul className='main-nav__settings'>
                <li className='main-nav__settings-item'>
                    <a href='#с'>Настройки</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;