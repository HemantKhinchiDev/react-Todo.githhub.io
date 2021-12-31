import React from 'react';
import './todo-list.css';
const TodoList = () => {
  return (
    <ul id="myUL" className="list">
      <li>Hit the gym</li>
      <li className="checked">Pay bills</li>
      <li>Meet George</li>
      <li>Buy eggs</li>
      <li>Read a book</li>
      <li>Organize office</li>
    </ul>
  );
};
export default TodoList;
