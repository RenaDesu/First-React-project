import UserPost from './user-post/UserPost';
import './UserPosts.css';

const UserPosts = () => {
    return (
        <div className='user-posts'>
            <ul className='user-posts__list user-post'>
                <UserPost message='О том, как я провел этот день.' likesCount='5' />
                <UserPost message='Сон - это прекрасно.' likesCount='10' />
            </ul>
        </div>
    );
}

export default UserPosts;