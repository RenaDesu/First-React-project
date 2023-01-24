import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    } 
}

export default store;

