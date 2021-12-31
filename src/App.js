import React from 'react';
import Header from './components/list-header/header';
import TodoList from './components/todo-list/todo-list';
import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
}
