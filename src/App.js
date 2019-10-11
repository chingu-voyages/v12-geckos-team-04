import React from 'react';
import './App.css';
import DiaryList from './components/diary-list/diary-list.component';
// import Form from './components/form-diary/form.component';

function App() {
  return (
    <div>
      <h1 className="app-title">Self-Learning App</h1>
      <DiaryList />
    </div>
  );
}

export default App;
