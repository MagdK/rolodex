import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Magda.
          </p>
          <button>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
