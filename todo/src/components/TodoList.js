import React from 'react'
import { connect } from 'react-redux';

class TodoList extends React.Component {
    state = {
        task:'',
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
        <ul>
            {this.props.items.map(item => (
            <li key={item.id}>{item.task}</li>
            ))}
        </ul>
    </div>
  )
}};

const mapStateToProps = state => ({
    title: state.title,
    items: state.items,
});

export default connect(mapStateToProps)(TodoList)
