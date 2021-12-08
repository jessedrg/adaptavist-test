import React from 'react';
import './App.css';
import Input from './components/Input';
import adaptavist from './img/adaptavist.svg';
function App() {
  return (
    <div className="App align-baseline">
      <img src={adaptavist} alt="adaptavist logo" style={{ width: '250px' }} />
      <Input />
    </div>
  );
}

export default App;
