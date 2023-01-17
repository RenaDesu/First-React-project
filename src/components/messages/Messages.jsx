import ChatMessage from './chat-message/ChatMessage';
import MessagesListItem from './messages-list-item/MessagesListItem';
import './Messages.css';

const Messages = (props) => {

    let messagesListElements = props.messages
        .map(element => <MessagesListItem name={element.name} id={element.id} />);

    let chatMessageElements = props.chat
        .map(element => <ChatMessage text={element.text} />);
    
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
            </section>
        </main>
    );
}

export default Messages;