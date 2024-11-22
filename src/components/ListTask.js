import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTasks } from "../redux/actions/taskActions";
import Task  from "./Task";

const ListTask = () => {
  const filteredTasks = useSelector((state) => state.filteredTasks)
  const dispatch = useDispatch();
  
  

  const handleFilter = (status) => {

    if (status === "all") {
      dispatch(filterTasks(null));
    } else {
      const isDone = status === "done";
      dispatch(filterTasks(isDone));
    }
  };

  return (
    <div>
      <div>
        <button className="btn btn-sm" onClick={() => handleFilter("all")}>
          All
        </button>
        <button className="btn btn-sm" onClick={() => handleFilter("done")}>
          Done
        </button>
        <button className="btn btn-sm" onClick={() => handleFilter("notDone")}>
          Not Done
        </button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
