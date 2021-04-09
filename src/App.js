// import logo from './logo.svg';
import './App.css';
import TodoList from './todoList';
import Form from './Form';
import TodoItemList from './TodoItemList';
// import { render } from '../node_modules/@testing-library/react';
import React, { Component } from 'react';

class App extends Component {
id = 2
state = {
  input: '',
  todos: [
    { id: 0, text: ' 리액트 소개', checked: false }
  ]
}

handleChange = (e) => {
  this.setState({
    ...this.state,
    input: e.target.value
  });
}

handleCreate = () => {
  console.log("handleCreate")
  const { input, todos } = this.state;
  this.setState({
    todos: todos.concat({id: this.id+=1,text: input,checked: false}),
    input: ''
  });
}

handleKeyPress = (e) => {
  if(e.key === 'Enter') {
    this.handleCreate();
  }
}

// state = {
//   todoList: ''
// }

// ChangeValue = (e) => {
//   this.setState({
//     todoList: e.target.value
//   });
// }

// ConfirmValue = () => {
//   console.log(`"todoList: "${this.state.todoList}`)
// }

// EnterKeyPress = (e) => {
//   if (e.key === "Enter") {
//     this.ConfirmValue();
//   }
// }

render() {
  const { input } = this.state;
  const {
    handleChange,
    handleCreate,
    handleKeyPress
  } = this;
    return (
      // <div className="App">
      //     <input type="text" placeholder="할 일..." onChange={this.ChangeValue} onKeyPress={this.EnterKeyPress} />
      //     <TodoList todo={this.state.todoList} />
      // </div>

      <TodoList form={(<Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} /> )} >
        <TodoItemList todos={this.state.todos}/>
      </TodoList>
    );
  }
}

export default App;