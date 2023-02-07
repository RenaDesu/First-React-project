import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
});

const store = configureStore({reducer: rootReducer});

export default store;