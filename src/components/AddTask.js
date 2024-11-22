import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { addTask } from "../redux/actions/taskActions";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [description, setDescription] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      const newTask = {
        id: Date.now(),
        description,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setDescription("");
      navigate("/")
    }
  }

  return (
    <div>
      <form  onSubmit={handleSubmit} className="card p-4">

        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Task Description
          </label>
          <input
            className="form-control"
            placeholder="Add new task"
            id="taskDescription"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
