import './ChatMessage.css';

const ChatMessage = (props) => {
    return (
        <li className='chat-list__message'>
            <p className='chat-list__message-text'>{props.text}</p>
        </li>
    )
}

export default ChatMessage;