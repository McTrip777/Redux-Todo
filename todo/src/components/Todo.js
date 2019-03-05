import React from 'react';
import { connect } from 'react-redux';

function Todo(props) {
  return (
    <p>
     {props.items.task}
    </p>
  );
};

const mapStateToProps = state => {
    return {
        task: state.task
    }
}

export default connect(mapStateToProps)(Todo);