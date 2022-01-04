import React from 'react';
import './style.css';
import HeaderForm from './components/list-header/headerform';
import TodoItem from './components/todo-list/todo-list';
export default function App() {
  const todoList = [
    { title: 'pan' },
    { title: 'pencil' },
    { title: 'Rubber' },
    { title: 'milk' },
    { title: 'choklate' },
  ];
  return (
    <div>
      <HeaderForm />
      <TodoList />
      <TodoList />
    </div>
  );
}
