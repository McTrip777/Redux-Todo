let InitialState = {
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

export default function Reducer(state = InitialState, action){
    switch (action.type){
    default:
        return state;
}};