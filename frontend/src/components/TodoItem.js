// client/src/components/TodoItem.js

import React, { useState } from 'react';
import EditTodo from './EditTodo';
import './TodoItem.css'; // Import the CSS file
const TodoItem = ({ todo, toggleComplete, deleteTodo, updateTodo }) => {
  const [isEditing, setEditing] = useState(false);

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <EditTodo
          todo={todo}
          updateTodo={updateTodo}
          setEditing={setEditing}
        />
      ) : (
        <>
         <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo._id)}
            className="todo-checkbox"
          />
          <span onClick={() => toggleComplete(todo._id)} className="todo-task">
            {todo.task}
            
          </span>
          <div className="button-combine">
          <button onClick={() => setEditing(true)} className="edit-button">Edit</button>
          <button onClick={() => deleteTodo(todo._id)}className="delete-button" >Delete</button>
          </div>
          
        </>
      )}
    </div>
  );
};

export default TodoItem;
