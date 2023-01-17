import React from 'react';
import UserPost from './user-post/UserPost';
import './UserPosts.css';

const UserPosts = (props) => {
    
let postsElements = props.posts.map( post => <UserPost message={post.message} likesCount={post.likesCount} /> );

let newPostElement = React.createRef();

let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
}

    return (
        <>
        <div className='user-posts__textfield-wrapper'>
            <h2 className='user-posts__title'>Мои посты</h2>
            <form className='user-posts__form'>
                <textarea className='user-posts__comment-field' ref={newPostElement} name="news" id="news" placeholder='Какие новости?'></textarea>
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