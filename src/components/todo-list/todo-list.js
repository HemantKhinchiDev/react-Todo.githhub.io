import React from 'react';
import listItem from './todo-items';
import './todo-list.css';
const TodoList = (props) => {
  return (
    <ul className="list">
      <listItem />
      <listItem />
    </ul>
  );
};
export default TodoList;
