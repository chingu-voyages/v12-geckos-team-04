import React from 'react';
import './App.css';
import QuestionsContainer from './components/Questions/QuestionsContainer/QuestionsContainer'

function App() {
  return (
    <div>
      <h1 className="app-title">Self-Learning App</h1>
      <QuestionsContainer />
    </div>
  );
}

export default App;
