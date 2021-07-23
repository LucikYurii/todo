import {ADD_TASK_TO_LIST, DELETE_TASK_FROM_LIST, UPDATE_TASK_TO_LIST} from '../constants';
const initialState = {
   todoList: [],
  };

const todos = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TASK_TO_LIST:

      return {
        ...state,
        todoList: [ ...state.todoList, action.payload],
      };
    case DELETE_TASK_FROM_LIST:
      const newTodos = state.todoList.filter((todo, index) => todo.index !== action.payload);
      return {
      ...state,
        todoList:newTodos
      };
      case UPDATE_TASK_TO_LIST:
      console.log("upd",action.payload);
        const newTodo = state.todoList.map(todo => todo.index === action.payload.index ? { task: action.payload.task } : todo)
            return {
              ...state,
              todoList:newTodo
            };

    default:
      return state;
  }

};

export default todos;
