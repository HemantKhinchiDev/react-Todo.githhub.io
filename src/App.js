import React, { useState } from 'react';
import Header from './components/list-header/header';
import TodoList from './components/todo-list/todo-list';
import './style.css';
const DUMMY_list = [
  {
    id: 'e1',
    title: 'Hit the gym',
  },
  { id: 'e2', title: 'Pay bills' },
  {
    id: 'e3',
    title: 'Meet George',
  },
  {
    id: 'e4',
    title: 'Buy eggs',
  },
  {
    id: 'e5',
    title: 'Read a book',
  },
  {
    id: 'e6',
    title: 'Organize office',
  },
];
export default function App() {
  const [listItem, setListItems] = useState(DUMMY_list);
  const addTodoHandler = (ex) => {
    setListItems((PrevExp) => {
      return [ex, ...PrevExp];
    });
  };

  return (
    <div>
      <Header onAddTodo={addTodoHandler} />
      <TodoList items={listItem} />
    </div>
  );
}
