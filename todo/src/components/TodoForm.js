import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      task:''
    }
  }
  handleChanges = event =>{
    // console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };
  submitItem = e => {
    this.setState({task: ''});
    this.props.newTask(e, this.state.task)
  }

  render(){
  return (
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
  );
  }
};

export default TodoForm;