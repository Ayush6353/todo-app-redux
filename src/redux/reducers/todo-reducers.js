import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types";

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: //add todo action
      return [...state, action.payload];

    case DELETE_TODO: //delete todo action
      const newstate = state.filter((todo) => todo.id !== action.payload);
      return newstate;

    case UPDATE_TODO: //update todo action
      const UpadateState = state.map((todo) => {
        if (todo.id == action.payload.todoId) {
          todo.Email = action.payload.todo.Email;
          todo.Password = action.payload.todo.Password;
        }
        return todo;
      });
      return UpadateState;

    default:
      return state;
  }

  // if(action.type === ADD_TODO){
  //     //add todo action
  // }
  // else if(action.type === DELETE_TODO){
  //     //delete todo action
  // }
  // else if (action.type === UPDATE_TODO){
  //     //update todo action
  // }else{
  //     // return initialstate
  // }
};
