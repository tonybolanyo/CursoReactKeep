import React from 'react';
import logo from './static/img/logo.svg';
import './App.css';

import Data from './data.json';

import Card from './components/card/Card';
import Counter from './components/counter/Counter';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="row">
      {Data.data.map(item => (
        <Card
          key={item.name}
          name={item.name}
          photo={item.photo}
          description={item.description}
        />
      ))}
    </div>
    <div className="row">
      <Counter />
    </div>
  </div>
);

export default App;
