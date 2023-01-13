import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='main-nav'>
            <ul className='main-nav__list'>
                <li className='main-nav__list-item'>
                    <NavLink className='main-nav__link' to='/profile'>Профиль</NavLink>
                </li>
                <li className='main-nav__list-item'>
                    <NavLink className='main-nav__link' to='/messages'>Сообщения</NavLink>
                </li>
                <li className='main-nav__list-item'>
                    <NavLink className='main-nav__link' to='/news'>Новости</NavLink>
                </li>
                <li className='main-nav__list-item'>
                    <NavLink className='main-nav__link' to='/music'>Музыка</NavLink>
                </li>
            </ul>
            <ul className='main-nav__settings'>
                <li className='main-nav__settings-item'>
                    <NavLink className='main-nav__settings-link' to='/settings'>Настройки</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;