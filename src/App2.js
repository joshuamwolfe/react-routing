import React, { useState } from 'react';
import './App.css';

import Home from './Home';
import Eat from './Eat';
import Drink from './Drink';

function App() {
  const [page, setPage] = useState ('home');

  const showPage = () => {
    if(page === 'home') return <Home/>
    if(page === 'eat') return <Eat/>
    if(page === 'drink') return <Drink/>
  }

  return (
    <main className='App'>
      <nav>
        <a onclick={() => setPage('home')}>Home</a>
        <a onclick={() => setPage('eat')}>Eat</a>
        <a onclick={() => setPage('drink')}>Drink</a>
      </nav>
      {showPage()}
    </main>
  );
}

export default App;
