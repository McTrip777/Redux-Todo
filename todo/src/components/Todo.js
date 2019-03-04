import React from 'react';

function Todo(props) {
  return (
    <p>
     {props.items.task}
    </p>
  );
};
export default Todo;