import {ADD_TASK_TO_LIST, DELETE_TASK_FROM_LIST, UPDATE_TASK_TO_LIST} from '../constants';
export const addTaskToList = (taskObj) => ({
   type: ADD_TASK_TO_LIST,
   payload: taskObj,
});

export const deleteTaskFromList = (taskIndex) => ({
   type: DELETE_TASK_FROM_LIST,
   payload: taskIndex,
});

export const updateTaskToList = (taskObj) => ({
   type: UPDATE_TASK_TO_LIST,
   payload: taskObj,
});
