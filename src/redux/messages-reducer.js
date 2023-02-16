const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SEND_MESSAGE: 
            let newMessage = {
                    id: 6, text: state.newMessageText
            };
            return {
                    ...state,
                    chat: [...state.chat, newMessage],
                    newMessageText: ''
                };
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newMessage
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default messagesReducer;