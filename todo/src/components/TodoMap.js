import React from 'react';
// import Todo from './Todo';
import { connect } from 'react-redux';


const TodoMap = props =>{
    return(
    <div>
        {props.items.map((item, index) => {
            return <p key={index}>{item.task}</p>
        })}
    </div>
)};

const mapStateToProps = state => {
    return {
        items:[{
        task: state.task,
        id: state.id,
        completed: state.completed,
    }]
    }
}

export default connect(mapStateToProps)(TodoMap);