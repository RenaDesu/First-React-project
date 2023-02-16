import './Profile.css';
import UserProfile from './user-profile/UserProfile';
// import UserPosts from './user-posts/UserPosts';
import UserPostsContainer from './user-posts/UserPostsContainer';

const Profile = (props) => {

    return (
        <main className='main-content'>
            <div className='banner'>
            </div>
            <UserProfile />
            <UserPostsContainer />
        </main>
    );
}

export default Profile;