import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoMap from './components/TodoMap';
import { connect } from 'react-redux';


class App extends Component {
  
  newTask = (ev,task) => {
    ev.preventDefault();
    // console.log(tasking.target);
    const newItem = {
      task: task,
      completed: false
      };
    this.setState({
      items: [...this.state.items, newItem],
    });
  };

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
const mapStateToProps = state => {
  return {
    items:[{task: state.task,
      id: state.id,
      completed: state.completed,}]
  }
}

export default connect(mapStateToProps)(App);
