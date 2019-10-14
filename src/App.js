import React from 'react';
import './App.css';
import Header from './components/AppHeader/AppHeader'
import QuestionsContainer from './components/Questions/QuestionsContainer'

const App = () => {
  return (
    <div>
      <Header />
      <QuestionsContainer />
    </div>
  );
}

export default App;
