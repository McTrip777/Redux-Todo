import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoMap from './components/TodoMap';
import { connect } from 'react-redux';


const App = () => {
    return (
      <div className="App">
        <h1>Todo List:</h1>
        <TodoForm />
        <TodoMap />
      </div>
    );
  }
const mapStateToProps = state => {
  return {
    items:[{task: state.task,
      id: state.id,
      completed: state.completed,}]
  }
}

export default connect(mapStateToProps)(App);
