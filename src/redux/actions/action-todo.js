import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-types";


// ADD TODO
export const add_todo = (todo) =>({ 
    type: ADD_TODO, 
    payload: todo,
})

// DELETE TODO
export const delete_todo = (id) =>({
    type : DELETE_TODO,
    payload : id,
})

//UPDATE TODO
export const update_todo = (todo,id) =>({
    type : UPDATE_TODO,
    payload : {todo:todo,todoId:id},
});