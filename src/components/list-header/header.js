import React, { useState } from 'react';
import HeaderForm from './headerform';
import './header.css';
const Header = (props) => {
  return (
    <div className="header">
      <h2>My To Do List</h2>
      <HeaderForm />
    </div>
  );
};
export default Header;
