import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios'

axios
  .get('https://localhost:44382/api/websites')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })

const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
}

export default App;
