import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


// import Bubble from './components/Bubble';

class App extends Component {
  render() {
    console.log(chatMessages);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">

          <ChatLog chats={chatMessages}/>

        </main>
      </div>
    );
  }
}

export default App;
