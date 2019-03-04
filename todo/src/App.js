import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoMap from './components/TodoMap';


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


  newTask = (ev,task) => {
    ev.preventDefault();
    // console.log(tasking.target);
    const newItem = {
      task: task,
      id: Date.now(),
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
        <TodoForm newTask={this.newTask}
            task={this.state.items.task}/>
        <TodoMap items = {this.state.items} />
      </div>
    );
  }
}

export default App;
