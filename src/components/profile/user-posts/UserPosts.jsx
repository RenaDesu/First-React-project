import React from 'react';
import UserPost from './user-post/UserPost';
import './UserPosts.css';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';

const UserPosts = (props) => {

    let postsElements = props.posts.map(post => <UserPost message={post.message} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = onPostChangeActionCreator(text);
        props.dispatch(action);
    }

    return (
        <>
            <div className='user-posts__textfield-wrapper'>
                <h2 className='user-posts__title'>Мои посты</h2>
                <form className='user-posts__form'>
                    <textarea className='user-posts__comment-field' onChange={onPostChange} ref={newPostElement} name="news-field" id="news-field" value={props.newPostText} placeholder='Какие новости?'></textarea>
                    <button className='user-posts__button' onClick={addPost} type='button' >Отправить</button>
                </form>
            </div>
            <div className='user-posts__posts-wrapper'>
                <ul className='user-posts__list user-post'>
                    {postsElements}
                </ul>
            </div>
        </>
    );
}

export default UserPosts;