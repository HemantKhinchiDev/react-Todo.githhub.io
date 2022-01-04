import React from 'react';
import './style.css';
import HeaderForm from './components/list-header/headerform';
export default function App() {
  const todoList = [
    { title: 'pan' },
    { title: 'pencil' },
    { title: 'Rubber' },
    { title: 'milk' },
    { title: 'choklate' },
  ];
  return (
    <div>
      <HeaderForm />
    </div>
  );
}
