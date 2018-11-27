import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';


import Bubble from './components/Bubble';

class App extends Component {
  render() {
    console.log(chatMessages);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">

          <Bubble sender="Vladimir" body="why are you arguing with me" timeStamp="2018-05-29T22:49:06+00:00"/>

        </main>
      </div>
    );
  }
}

export default App;
