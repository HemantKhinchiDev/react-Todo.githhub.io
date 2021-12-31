import React from 'react';
import './header.css';
const Header = () => {
  return (
    <div id="myDIV" className="header">
      <h2>My To Do List</h2>
      <input
        type="text"
        id="myInput"
        placeholder="Title..."
        className="addTodo"
      />
      <span onclick="newElement()" className="addBtn">
        Add
      </span>
    </div>
  );
};
export default Header;
