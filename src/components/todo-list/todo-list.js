import React from 'react';
import itemList from '../list-items';
import './todo-list.css';
const TodoListHolder = (props) => {
  return (
    <ul className="list">
      <itemList />
      <itemList />
    </ul>
  );
};
export default TodoListHolder;
