import UserPost from './user-post/UserPost';
import './UserPosts.css';

const UserPosts = () => {

    let postsData = [
        {id: 1, message: 'О том, как я провел этот день.', likesCount: '5'},
        {id: 2, message: 'Сон - это прекрасно.', likesCount: '10'},
    ]
    
let postsElements = postsData.map( post => <UserPost message={post.message} likesCount={post.likesCount} /> );

    return (
        <div className='user-posts'>
            <ul className='user-posts__list user-post'>
                {postsElements}
            </ul>
        </div>
    );
}

export default UserPosts;