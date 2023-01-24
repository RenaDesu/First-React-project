import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer'

let reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
});

let store = configureStore({reducer: reducer});

export default store;