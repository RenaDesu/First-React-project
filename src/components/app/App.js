import './App.css';
import Header from '../header/Header'
import Navigation from '../navigation/Navigation';
import Profile from '../profile/Profile';
import Footer from '../footer/Footer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
