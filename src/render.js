import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './index.css';
import { addPost } from './state/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} />
  </React.StrictMode>
);
}