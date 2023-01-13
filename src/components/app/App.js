import './App.css';
import Header from '../header/Header'
import Navigation from '../navigation/Navigation';
import Profile from '../profile/Profile';
import Footer from '../footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Messages from '../messages/Messages';
import News from '../news/News';
import Music from '../musc/Music';
import Settings from '../settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <Routes>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/messages' element={<Messages/>} />
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
