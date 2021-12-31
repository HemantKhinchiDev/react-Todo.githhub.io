import React, { useState } from 'react';
import './headerform.css';
const HeaderForm = (props) => {
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
    props.onSaveTodoData(todoData);
    setEnteredTodo('');
  };
  return (
    <form id="myDIV" onSubmit={submitHandler}>
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
export default HeaderForm;
