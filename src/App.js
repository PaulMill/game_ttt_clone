import React from 'react';
import './App.css';
import { GameArea, PageHeader } from './Layout';

function App() {
  return (
    <div className="app">
      <PageHeader />
      <GameArea />
    </div>
  );
}

export default App;
