import React from 'react';
import './App.css';

import Profile from './Profile';

class App extends React.Component {

  state = {
    users: [
      { id: 1, name: 'John', age: 30},
      { id: 2, name: 'Sam', age: 36},
      { id: 3, name: 'Nate', age: 40}
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is a react app</h1>
          <p>React is used for Single Page Applications</p>
          <Profile users={this.state.users}/>
        </header>
      </div>
    )
  }
}

export default App;
