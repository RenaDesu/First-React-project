import './Profile.css';
import UserProfile from './user-profile/UserProfile';
import UserPosts from './user-posts/UserPosts';

const Profile = (props) => {
    return (
        <main className='main-content'>
            <div className='banner'>
            </div>
            <UserProfile />
            <UserPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} />
        </main>
    );
}

export default Profile;