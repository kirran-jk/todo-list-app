import React, { useState } from "react";
import './addToList.css';

function AddToList(props) {

  const [task, setTask] = useState("");

  function handleChange(task) {
    setTask(task.target.value);
  }

  function handleSubmit(input) {
    input.preventDefault();
    props.handleSubmit(task);
    setTask("");
  }

  function alertUser(input) {
    alert("Enter a task!");
    input.preventDefault();
    setTask("");
  }

  function enterName(input) {
    if(!props.username) {
      alert("Enter your name!");
    }
  }

  return (
    <form className="header" 
    onSubmit={task.length > 0 ? handleSubmit : alertUser}
    onClick={!props.username ? enterName : null}>
      <input
        type="text"
        className="new-todo-input"
        placeholder="Type new task here..."
        name="text"
        autoComplete="off"
        value={task}
        onChange={handleChange}
        disabled={!props.username}
      />
      <button type="submit" disabled={!props.username}>Add</button> 
    </form>
  );
}

export default AddToList;