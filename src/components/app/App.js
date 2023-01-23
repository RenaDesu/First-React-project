import './App.css';
import Header from '../header/Header'
import Navigation from '../navigation/Navigation';
import Profile from '../profile/Profile';
import Footer from '../footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Messages from '../messages/Messages';
import News from '../news/News';
import Music from '../music/Music';
import Settings from '../settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <Routes>
          <Route path='/profile' element={<Profile posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch} />} />
          <Route path='/messages' element={<Messages messages={props.state.messagesPage.messages} chat={props.state.messagesPage.chat} />} />
          <Route path='/news' element={<News/>} />
          <Route path='/music' element={<Music/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
