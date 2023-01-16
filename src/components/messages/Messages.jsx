import ChatMessage from './chat-message/ChatMessage';
import MessagesListItem from './messages-list-item/MessagesListItem';
import './Messages.css';

let messagesListData = [
    {id: 1, name: 'Кекс'},
    {id: 2, name: 'Маффин'},
    {id: 3, name: 'Булочка'},
    {id: 4, name: 'Буханочка'},
    {id: 5, name: 'Батончик'}
]

let chatMessageData = [
    {id: 1, text: 'Мяу мяу'},
    {id: 2, text: 'Мяу мяу мяу'},
    {id: 3, text: 'Мяу мяу мяу мяу'},
    {id: 4, text: 'Мяу мяу мррр'},
    {id: 5, text: 'Мяу!'}
]

let messagesListElements = messagesListData
.map( element => <MessagesListItem name={element.name} id={element.id} /> );

let chatMessageElements = chatMessageData
.map( element => <ChatMessage text={element.text} /> );

const Messages = () => {
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