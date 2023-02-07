import React from 'react';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/messages-reducer';
import Messages from './Messages';

const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (text) => {
        let action = updateNewMessageTextCreator(text);
        props.store.dispatch(action);
    }

    return (<Messages updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={state} />);
}

export default MessagesContainer;