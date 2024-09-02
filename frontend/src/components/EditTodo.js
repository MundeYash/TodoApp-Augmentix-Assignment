// client/src/components/EditTodo.js

import React, { useState } from 'react';

const EditTodo = ({ todo, updateTodo, setEditing }) => {
  const [task, setTask] = useState(todo.task);

  const handleUpdate = () => {
    updateTodo(todo._id, { task });
    setEditing(false);
  };

  return (
    <div className="edit-todo">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </div>
  );
};

export default EditTodo;
