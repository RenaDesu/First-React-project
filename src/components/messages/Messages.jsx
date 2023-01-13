import './Messages.css';

const Messages = () => {
    return (
        <main className='main-messages'>
            <section className='messages'>
                <ul className='messages__list'>
                    <li className='messages__list-item'>
                        <p className='messages__chat'>Кекс</p>
                    </li>
                    <li className='messages__list-item'>
                        <p className='messages__chat'>Маффин</p>
                    </li>
                    <li className='messages__list-item'>
                        <p className='messages__chat'>Булочка</p>
                    </li>
                    <li className='messages__list-item'>
                        <p className='messages__chat'>Буханочка</p>
                    </li>
                    <li className='messages__list-item'>
                        <p className='messages__chat'>Батончик</p>
                    </li>
                </ul>
            </section>
            <section className='chat'>
                <ul className='chat__list'>
                    <li className='chat__message'>
                        <p className='chat__message-text'>Мяу мяу</p>
                    </li>
                    <li className='chat__message'>
                        <p className='chat__message-text'>Мяу мяу мяу</p>
                    </li>
                    <li className='chat__message'>
                        <p className='chat__message-text'>Мяу мяу мяу мяу</p>
                    </li>
                    <li className='chat__message'>
                        <p className='chat__message-text'>Мяу мяу мррр</p>
                    </li>
                    <li className='chat__message'>
                        <p className='chat__message-text'>Мяу!</p>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Messages;