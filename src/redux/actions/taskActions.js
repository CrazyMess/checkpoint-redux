import { ADD_TASK, EDIT_TASK, FILTER_TASKS } from "./taskActionTypes";


export const addTask = (task) =>({
    type: ADD_TASK,
    payload: task,
});

export const editTask = (id, updatedTask)=>({
    type: EDIT_TASK,
    payload: {id, updatedTask},
});

export const filterTasks = (isDone) =>({
    type: FILTER_TASKS,
    payload: isDone,
})