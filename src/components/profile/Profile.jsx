import './Profile.css';
import UserProfile from './user-profile/UserProfile';
import UserPosts from './user-posts/UserPosts';

const Profile = (props) => {
    return (
        <main className='main-content'>
            <div className='banner'>
            </div>
            <UserProfile />
            <UserPosts posts={props.posts} dispatch={props.dispatch} newPostText={props.newPostText} />
        </main>
    );
}

export default Profile;