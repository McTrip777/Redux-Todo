import React from 'react'
import { connect } from 'react-redux';

import { addTask, toggleTask, deleteTask } from '../Actions/Action';



class TodoList extends React.Component {
    state = {
        task:'',
    }
    
  handleChanges = event =>{
    this.setState({ task: event.target.value });
  };

  submitItem = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: '' });
  }
  
  toggleTask = id => {
    this.props.toggleTask(id);
  };

  deleteTask = completed => {
    this.props.deleteTask(completed);  
  };

render () {
  return (
    <div className='content'>
      <h1>{this.props.title}</h1>
      <form className='form' onSubmit={this.submitItem}>
       <input
        className='input'
        type="text"
        value={this.state.task}
        name="task"
        onChange={this.handleChanges}
        placeholder="insert task"
      />
      <button className='add' type="submit">Add Task</button>
    </form>
        <div>
            {this.props.items.map(item => (
           <div>
              <h4 key={item.id} onClick={() => this.toggleTask(item.id)}
                className={`item${item.completed ? ' completed' : ''}`}>
                {item.task}
              </h4>
              <button onClick={() => this.deleteTask(item.id)} className='delete'>x</button>
           </div> 
            ))}
        </div>
    </div>
  )
}};

const mapStateToProps = state => ({
    title: state.title,
    items: state.items,
});

export default connect(mapStateToProps,
    { addTask, toggleTask, deleteTask })(TodoList)
