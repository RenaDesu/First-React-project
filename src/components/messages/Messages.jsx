import React from 'react';
import ChatMessage from './chat-message/ChatMessage';
import MessagesListItem from './messages-list-item/MessagesListItem';
import './Messages.css';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../state/state';

const Messages = (props) => {

    let messagesListElements = props.messages
        .map(element => <MessagesListItem name={element.name} id={element.id} />);

    let chatMessageElements = props.chat
        .map(element => <ChatMessage text={element.text} />);

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextCreator(text);
        props.dispatch(action);
    }

    return (
        <main className='main-messages'>
            <section className='messages'>
                <h2 className='messages__title'>Сообщения</h2>
                <ul className='messages__list messages-list'>
                    {messagesListElements}
                </ul>
            </section>
            <section className='chat'>
                <h2 className='visually-hidden'>Чат</h2>
                <ul className='chat__list chat-list'>
                    {chatMessageElements}
                </ul>
                <form className='chat__form'>
                    <textarea className='chat__message-field' onChange={onNewMessageChange} ref={newMessageElement} name="message-field" id="message-field" value={props.newMessageText} placeholder='Введите сообщение'></textarea>
                    <button className='chat__button' onClick={onSendMessageClick} type='button' >Отправить сообщение</button>
                </form>
            </section>
        </main>
    );
}

export default Messages;