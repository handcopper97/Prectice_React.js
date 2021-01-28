import React from 'react';

function Food({id, name, picture}){
  return ( 
    <div>
      <h3>I like {name} </h3>
      <p>{picture}</p>
      <img src = {picture} alt={"sample"+id} title={"sample "+id} width="300" height="auto" />
      
    </div>
  );
}

const likefood = [
  {
    id : 1,
    name : "kimchi",
    image : 
    "http://www.bibigo.com/img/kr/img_food_kimchi1_1.jpg"
  },
  {
    id : 2,
    name : "Gimdark",
    image : "https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/201711/e71d5495-ae27-496a-8f6e-7d20ddc07866.jpg"
  },
  {
    id : 3,
    name : "Korean bond soup",
    image : "http://honeytem.co.kr/web/product/big/201902/54c64709535157419c2ae74083b1a1eb.jpg"
  },
  {
    id : 4,
    name : "Susi",
    image : "https://media.istockphoto.com/photos/salmon-sushi-nigiri-isolated-on-white-background-picture-id1291843511"
  }
]
function App() {
    return (
      <div>
        {likefood.map(dish => (
          <Food key ={dish.id} id={dish.id} name ={dish.name} picture ={dish.image} />
          ))}
      </div>
      );
    
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
