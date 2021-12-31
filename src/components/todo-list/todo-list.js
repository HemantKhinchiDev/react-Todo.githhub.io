import React from 'react';
import TodoItem from './todo-items';
import './todo-list.css';
const TodoList = (props) => {
  return (
    <ul className="list">
      {props.items.map((goal) => (
        <TodoItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </TodoItem>
      ))}
    </ul>
  );
};
export default TodoList;
