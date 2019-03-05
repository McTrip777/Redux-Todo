import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';


const TodoMap = props =>{
    return(
    <div>
        {props.items.map((item) => (
        <Todo key={item.id} items={item} />
        ))}
    </div>
)};

const mapStateToProps = state => {
    return {
        task: state.task,
        id: state.id,
        completed: state.completed,
    }
}

export default connect(mapStateToProps)(TodoMap);