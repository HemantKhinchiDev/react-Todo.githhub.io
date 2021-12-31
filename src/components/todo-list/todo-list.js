import React from 'react';
import TodoItem from './todo-items';
import './todo-list.css';
const TodoList = (props) => {
  return (
    <ul id="myUL" className="list">
      {props.items.map((expense) => {
        <TodoItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.title}
        </TodoItem>;
      })}
    </ul>
  );
};
export default TodoList;
