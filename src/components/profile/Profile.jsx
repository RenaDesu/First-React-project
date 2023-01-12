import './Profile.css';

const Profile = () => {
    return (
        <main className='main-content'>
            <div className='banner'>
            </div>
            <div className='user-profile'>
                <img className='user-profile__image' src='#' alt='Фото пользователя.' />
                <div className='user-profile__info-wrapper'>
                    <h2 className='user-profile__name'>Максимилиан Волошин</h2>
                    <dl className='user-profile__description-list'>
                        <dt className='user-profile__description-key'>Дата рождения:</dt>
                        <dd className='user-profile__description-value'>15 января</dd>
                        <dt className='user-profile__description-key'>Город:</dt>
                        <dd className='user-profile__description-value'>Москва</dd>
                        <dt className='user-profile__description-key'>Веб-сайт</dt>
                        <dd className='user-profile__description-value'>https://github.com/RenaDesu</dd>
                    </dl>
                </div>
            </div>
            <div className='user-news'>
                <h2 className='user-news__title'>Мои посты</h2>
                <form className='user-news__form'>
                    <textarea className='user-news__comment-field' name="news" id="news" placeholder='Какие новости?'></textarea>
                    <button className='user-news__button'>Отправить</button>
                </form>
            </div>
            <div className='user-posts'>
                <ul className='user-posts__list'>
                    <li className='user-posts__item'>
                        <p className='user-posts__post'> <span className='user-posts__icon'></span> О том, как я провел этот день.</p>
                    </li>
                    <li className='user-posts__item'>
                        <p className='user-posts__post'> <span className='user-posts__icon'></span> Сон -  это прекрасно.</p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Profile;