// src/components/AddTodo.js

import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-button ">Add</button>
     
    </form>
  );
};

export default AddTodo;
