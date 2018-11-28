import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatCollection from './components/ChatCollection';

class App extends Component {
  render() {
    console.log(chatMessages);



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat Between Robots </h1>
        </header>
        <main className="App-main">
          < ChatCollection data={chatMessages} />
        </main>
      </div>
    );
  }
}

export default App;
