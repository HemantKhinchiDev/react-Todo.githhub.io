import React, { useState } from 'react';
import './headerform.css';
import Button from '../UI/Button/Button';
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
      <Button type="submit">Add</Button>
    </form>
  );
};
export default HeaderForm;
