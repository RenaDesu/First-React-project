import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import UserPosts from './UserPosts';

const UserPostsContainer = (props) => {
  
    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    }

    return (<UserPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />);
}

export default UserPostsContainer;