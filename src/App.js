import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader'
import QuestionsContainer from './components/Questions/QuestionsContainer'

const App = () => {
  return (
    <div className="app-wrapper">
      <AppHeader />
      <QuestionsContainer />
    </div>
  );
}

export default App;
