import { NavLink } from "react-router-dom";
import './MessagesListItem.css';

const MessagesListItem = (props) => {

    let path = '/messages/' + props.id;
    return (
        <li className='messages-list__item messages-list__item--current'>
            <p className='messages-list__chat'><NavLink to={path}>{props.name}</NavLink></p>
        </li>
    )
}

export default MessagesListItem;