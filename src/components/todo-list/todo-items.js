import React, { useState } from 'react';
import './todo-items.css';
const TodoItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Update!');
    console.log(title);
  };
  return <li>{props.title}</li>;
};
export default TodoItem;
