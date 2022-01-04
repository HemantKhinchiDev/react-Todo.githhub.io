import React, { useState } from 'react';
import './headerform.css';
const HeaderForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="Title..."
        className="addTodo"
        onChange={goalInputChangeHandler}
      />
    </form>
  );
};
export default HeaderForm;
