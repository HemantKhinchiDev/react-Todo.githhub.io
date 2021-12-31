import React from 'react';
import TodoItem from './todo-items';
import './todo-list.css';
const TodoList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">Found no Todo in your List!</h2>
    );
  }
  return (
    <ul id="myUL" className="list">
      {props.items.map((expense) => {
        <TodoItem title={expense.title} />;
      })}
    </ul>
  );
};
export default TodoList;
