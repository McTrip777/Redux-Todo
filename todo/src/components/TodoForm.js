import React from 'react';

class TodoForm extends React.Component {
    state = {
      task:''
    }

//   handleChanges = event =>{
//     // console.log(event.target.value)
//     this.setState({ task: event.target.value });
//   };
//   submitItem = e => {
//     e.preventDefault();
//     this.props.addTask(this.state.task);
//     this.setState({task: ''});
//   }

//   render(){
//   return (
//     <form className='form' onSubmit={this.submitItem}>
//       <input
//         className='input'
//         type="text"
//         value={this.state.task}
//         name="task"
//         onChange={this.handleChanges}
//         placeholder="insert task"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
//   }
};

export default TodoForm;