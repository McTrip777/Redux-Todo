// import { NEW_TASK } from '../Actions/Action';


// let initialState = {
//     title:"Task List:",
//    items: [{
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   },
//   {
//     task: 'Mow Lawn',
//     id: 1528817084359,
//     completed: false
//   }
//   ]
// };

// export default (state = initialState, action) => {
//     switch (action.type){
//         case NEW_TASK:
//             const newItem = {
//                 task: action.task,
//                 id:Date.now(),
//                 completed: false,
//                 };
//         return {
//             ...state,
//             items: [...state.items, newItem]
//         };
//     default:
//         return state;
// }};

// newTask = (ev,task) => {
//     ev.preventDefault();
//     // console.log(tasking.target);
//     
//     this.setState({
//       items: [...this.state.items, newItem],
//     });
//   };


