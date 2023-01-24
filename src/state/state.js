const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: { 
        profilePage: {
            posts: [
                {id: 1, message: 'О том, как я провел этот день.', likesCount: '5'},
                {id: 2, message: 'Сон - это прекрасно.', likesCount: '10'},
            ],
            newPostText: ''
        },
        messagesPage: {
            messages: [
                { id: 1, name: 'Кекс' },
                { id: 2, name: 'Маффин' },
                { id: 3, name: 'Булочка' },
                { id: 4, name: 'Буханочка' },
                { id: 5, name: 'Батончик' }
            ],
            chat: [
                { id: 1, text: 'Мяу мяу' },
                { id: 2, text: 'Мяу мяу мяу' },
                { id: 3, text: 'Мяу мяу мяу мяу' },
                { id: 4, text: 'Мяу мяу мррр' },
                { id: 5, text: 'Мяу!' }
            ],
            newMessageText: ''
       }
    },  
    _callSubscriber () {},

    getState () {
    return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5, 
                message: this._state.profilePage.newPostText,
                likesCount: '0'
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 6, text: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.chat.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        } 
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default store;

