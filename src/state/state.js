let renderEntireTree = () => {

}

let state = { 
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
        ]
   }
}

export const addPost = () => {
    let newPost = {
        id: 5, 
        message: state.profilePage.newPostText,
        likesCount: '0'
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;

