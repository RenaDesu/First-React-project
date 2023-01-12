import UserPost from './user-post/UserPost';
import './UserPosts.css';

const UserPosts = () => {
    return (
        <div className='user-posts'>
            <ul className='user-posts__list user-post'>
                <UserPost />
                <UserPost />
            </ul>
        </div>
    );
}

export default UserPosts;