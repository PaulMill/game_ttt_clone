import React, { useState }from 'react';
import './App.css';
import { GameArea, PageHeader } from './Layout';

function App() {
  const [showHistory, setShowHistory] = useState(false);
  return (
    <div className="app">
      <PageHeader showHistory={showHistory} setShowHistory={setShowHistory}/>
      <GameArea showHistory={showHistory} />
    </div>
  );
}

export default App;
