// src/App.jsx
import './App.css';
import Bookshelf from './components/BookShelf';
import { useState } from 'react';


const App = () => {
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};

export default App;
