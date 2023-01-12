import './UserProfile.css';

const UserProfile = () => {
    return (
        <div className='user-profile'>
            <img className='user-profile__image' src='#' alt='Фото пользователя.' />
            <div className='user-profile__info-wrapper'>
                <h2 className='user-profile__name'>Максимилиан Волошин</h2>
                <dl className='user-profile__description-list'>
                    <dt className='user-profile__description-key'>Дата рождения:</dt>
                    <dd className='user-profile__description-value'>15 января</dd>
                    <dt className='user-profile__description-key'>Город:</dt>
                    <dd className='user-profile__description-value'>Москва</dd>
                    <dt className='user-profile__description-key'>Веб-сайт:</dt>
                    <dd className='user-profile__description-value'><a href='https://github.com/RenaDesu'>https://github.com/RenaDesu</a></dd>
                </dl>
            </div>
        </div>
    );
}

export default UserProfile;