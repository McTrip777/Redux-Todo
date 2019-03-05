import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

let initialState = {
    title:"Task List:",
   items: [{
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Mow Lawn',
    id: 1528817084359,
    completed: false
  }
  ]
};

const Reducer = (state = initialState, action) => {
        return state;
};

const store = createStore(Reducer);


ReactDOM.render( 
<Provider store={store}>
    <App />
</Provider>, 
 document.getElementById('root'));
