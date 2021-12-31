import React, { useState } from 'react';
import './header.css';
const Header = (props) => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const todoChangeHandler = (element) => {
    setEnteredTodo(element.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const todoData = {
      title: enteredTodo,
    };
    console.log(title);
    props.onSaveExpenseData(todoData);
    setEnteredTodo('');
  };

  return (
    <form id="myDIV" className="header" onAdd={submitHandler}>
      {/* <h2>My To Do List</h2> */}
      <input
        type="text"
        id="myInput"
        placeholder="Title..."
        className="addTodo"
        value={enteredTodo}
        onChange={todoChangeHandler}
      />
      <button type="submit" className="addBtn">
        Add
      </button>
      {/* <span onclick="newElement()" >
        Add
      </span> */}
    </form>
  );
};
export default Header;
