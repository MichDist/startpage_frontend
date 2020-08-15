import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';


// Test
axios
  .get('https://localhost:44382/api/websites')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })

const websites = [
  {
    id: 1,
    websiteName: 'Web.de',
    url: 'www.web.de',
    favorite: true
  },
  {
    id: 2,
    websiteName: 'Google',
    url: 'www.google.de',
    favorite: false
  },
  {
    id: 3,
    websiteName: 'Startpage',
    url: 'www.Startpage.de',
    favorite: true
  }
]



const App = () => {


  return (
    <div>
      <li>
        {websites.map(website => <li>{website.websiteName}</li>)}
      </li>
    </div>
  );
}


/*
const Button = ( {handleClick, Text}) => {
  return (
    <button onClick={handleClick}>
      {Text}
    </button>
  )
}


const Display = ( {counter}) => {
  return (
    <div>{counter}</div>
  )
}


const [counter, setCounter ] = useState(0);

const increaseByOne = () => {
  setCounter(counter + 1);
}
const decreaseByOne = () => {
  setCounter(counter - 1);
}
const setToZero = () => {
  setCounter(0);
}

      <Display counter={counter} />
      <Button handleClick={increaseByOne}
      Text='plus' />
      <Button handleClick={decreaseByOne}
      Text='minus' />
      <Button handleClick={setToZero}
      Text='reset' />

*/
export default App;
