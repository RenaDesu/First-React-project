import './Profile.css';
import UserNews from './user-news/UserNews';
import UserProfile from './user-profile/UserProfile';
import UserPosts from './user-posts/UserPosts';

const Profile = () => {
    return (
        <main className='main-content'>
            <div className='banner'>
            </div>
            <UserProfile />
            <UserNews />
            <UserPosts />
        </main>
    );
}

export default Profile;