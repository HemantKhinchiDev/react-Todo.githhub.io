import React, { useState } from 'react';
import './headerform.css';
const HeaderForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const todoChangeHandler = (element) => {
    setEnteredTitle(element.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredTitle);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        id="myInput"
        placeholder="Title..."
        className="addTodo"
        value={enteredTitle}
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
