import './UserNews.css';

const UserNews = () => {
    return (
        <div className='user-news'>
            <h2 className='user-news__title'>Мои посты</h2>
            <form className='user-news__form'>
                <textarea className='user-news__comment-field' name="news" id="news" placeholder='Какие новости?'></textarea>
                <button className='user-news__button'>Отправить</button>
            </form>
        </div>
    );
}

export default UserNews;