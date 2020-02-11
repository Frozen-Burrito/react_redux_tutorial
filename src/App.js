import React from 'react';
// import './App.css';

import Profile from './Profile';
import SignUp from './SignUp';

class App extends React.Component {

  state = {
    users: [
      { id: 1, name: 'John', age: 30},
      { id: 2, name: 'Sam', age: 36},
      { id: 3, name: 'Nate', age: 40},
      { id: 4, name: 'Lina', age: 17}
    ]
  }

  addUser = (user) => {
    // console.log(user);
    user.id = Math.random();

    let newUsers = [...this.state.users, user];
    this.setState({
      users: newUsers
    })
  }

  deleteUser = (id) => {
    let users = this.state.users.filter(user => {
      return user.id !== id;
    }) 

    this.setState({
      users: users
    })
  }

  componentDidMount() {
    console.log('Component mounted');  
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is a react app</h1>
          <p>React is used for Single Page Applications</p>
          <Profile deleteUser={this.deleteUser} users={this.state.users}/>
          <SignUp addUser={this.addUser}/>
        </header>
      </div>
    )
  }
}

export default App;
