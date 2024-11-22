import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions/taskActions";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();
  

  const handleSave = () => {
    if (newDescription.trim()) {
      dispatch(editTask(task.id, { description: newDescription }));
      setIsEditing(false);
    }
  };

  const toggleStatus = () => {
    dispatch(editTask(task.id, { isDone: !task.isDone }));
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        {isEditing ? (
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
        ) : (
          <h5 className="card-title">{task.description}</h5>
        )}
        <p className="card-text">Status: {task.isDone ? "Done" : "Not Done"}</p>
        <button className="btn btn-primary me-2" onClick={toggleStatus}>
          Mark as {task.isDone ? "Not Done" : "Done"}
        </button>
        {isEditing ? (
          <button className="btn btn-success" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button
            className="btn btn-warning"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
