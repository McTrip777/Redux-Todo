import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoMap from './components/TodoMap';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Todo List:</h1>
        <TodoForm newTask={this.newTask} />
        <TodoMap />
      </div>
    );
  }
}

export default App;
