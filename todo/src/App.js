import React, { Component } from 'react';
import './App.css';

let items = [{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
},
{
  task: 'Mow Lawn',
  id: 1528817084359,
  completed: false
}
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: items,
    }
  };


  render() {
    return (
      <div className="App">
        <h1>Todo List:</h1>
      </div>
    );
  }
}

export default App;
