// client/src/App.js

import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:5000/todos');
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async (task) => {
    const response = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    });
    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = async (id) => {
    const todo = todos.find((todo) => todo._id === id);
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    const updatedTodo = await response.json();
    setTodos(
      todos.map((todo) => (todo._id === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const updateTodo = async (id, updatedTask) => {
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
    const updatedTodo = await response.json();
    setTodos(
      todos.map((todo) => (todo._id === id ? updatedTodo : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
