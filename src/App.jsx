import React, { useState } from 'react';

import Header from './components/Header/Header.jsx';
import Post from './components/Post/Post.jsx';
import Notes from './components/Notes/Notes.jsx';

import { ContextProvider } from './Context/Context.js';

import './App.sass';

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <Post />
      <Notes />
    </ContextProvider>
  );
};

export default App;
