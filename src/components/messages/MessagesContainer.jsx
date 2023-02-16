import { connect } from 'react-redux';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/messages-reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextCreator(text);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;