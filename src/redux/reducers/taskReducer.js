import { ADD_TASK, EDIT_TASK, FILTER_TASKS } from "../actions/taskActionTypes";

const initialState = {
  tasks: [
    {
      id: 1,
      description: "Learn redux",
      isDone: false,
    },
    {
      id: 2,
      description: "build a to do app",
      isDone: true,
    },
  ],
  filteredTasks:[
    {
      id: 1,
      description: "Learn redux",
      isDone: false,
    },
    {
      id: 2,
      description: "build a to do app",
      isDone: true,
    },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const updatedTasks = [...state.tasks, action.payload];
      return {
        ...state,
        tasks: updatedTasks,
        filteredTasks: updatedTasks,
      };

    case EDIT_TASK:
      const editedTask =  state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.updatedTask }
          : task
      )
      return {
        ...state,
        tasks: editedTask,
        filteredTasks:editedTask,
      };

    case FILTER_TASKS:
      if (action.payload === null) {
        return { ...state, filteredTasks: state.tasks };
      }
      const filtered = state.tasks.filter(
        (task) => task.isDone === action.payload
      );
      return { ...state, filteredTasks: filtered };

    default:
      return state;
  }
};

export default taskReducer;
