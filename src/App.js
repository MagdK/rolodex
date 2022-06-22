import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Magd', lastName: 'Kovacs'},
      company: 'FurLicker B.V.'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.firstName} {this.state.name.lastName}, I am employed at {this.state.company}
          </p>
          <button 
            onClick={() => {
              this.setState(() => { 
                return {
                  name: { firstName: 'Effi', lastName: 'Kovacs' },
                };
              }, 
              () => {
                console.log(this.state);
              });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
