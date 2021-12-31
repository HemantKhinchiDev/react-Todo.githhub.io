import React, { useState } from 'react';
import './todo-items.css';
const TodoItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return <li onClick={deleteHandler}>{props.children}</li>;
};
export default TodoItem;
