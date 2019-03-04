import React from 'react';
import Todo from './Todo';

const TodoMap = props =>{
    return(
    <div>
        {props.items.map((item) => (
        <Todo key={item.id} items={item} />
        ))}
    </div>
)};

export default TodoMap;