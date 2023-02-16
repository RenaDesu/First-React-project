import { connect } from 'react-redux';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import UserPosts from './UserPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = onPostChangeActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
           dispatch(addPostActionCreator());
        }
    }
}

const UserPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserPosts);

export default UserPostsContainer;