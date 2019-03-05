import React from 'react'
import { connect } from 'react-redux';

import { addTask } from '../Actions/Action';



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

render () {
  return (
    <div>
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
      <button type="submit">Add Task</button>
    </form>
        <div>
            {this.props.items.map(item => (
            <h4 key={item.id}>{item.task}</h4>
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
    { addTask })(TodoList)
