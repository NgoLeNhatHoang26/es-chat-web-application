import logo from './logo.svg';
import './App.css';
import React from 'react';
import ContentBoDem from './BoDem';
import ToDoList from './toDoList';
function App() {
  console.log("C")
  const h2React = React.createElement('h2',null, 'Xin chào');
  const pageTitle = 'Hoc React';
  var inChuKha = () => <h2>Xin chào Kha!</h2>;
  const Buoi = ['Sang', 'Trua','Chieu','Toi'];
  inChuKha();
  return (
    <div className="App">
      <ContentBoDem />
      <ToDoList />
    </div>
  );
}

export default App;
