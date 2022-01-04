import React, { useState } from 'react';
import './todo-items.css';
const TodoItem = (props) => {
  return <li>{props.title}</li>;
};
export default TodoItem;
