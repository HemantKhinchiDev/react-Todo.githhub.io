import React, { useState } from 'react';
import HeaderForm from './headerform';
import './header.css';
const Header = (props) => {
  const SaveTodoDataHandler = (enteredExpenseData) => {
    const todoDataList = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddTodo(todoDataList);
  };
  return (
    <div className="header">
      {/* <h2>My To Do List</h2> */}
      <HeaderForm onSaveTodoData={SaveTodoDataHandler} />
    </div>
  );
};
export default Header;
