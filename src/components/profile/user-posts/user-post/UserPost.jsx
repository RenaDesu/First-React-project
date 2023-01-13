import './UserPost.css';

const UserPost = (props) => {
    return (
        <li className='user-post__item'>
            <p className='user-post__post'>
                <span className='user-post__icon'></span>
                {props.message}
                <span className='user-post__like-icon'></span><span className='user-post__likes-count'> {props.likesCount} </span>
            </p>

        </li>
    );
}

export default UserPost;