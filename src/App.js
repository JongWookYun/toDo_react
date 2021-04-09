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

handleRemove   = (id) => {
  console.log("handleRemove")
  const { todos } = this.state;
  // 일단 보고 한 거긴 한데 여기는 왜 state 전부를 가져 오는 거인지 잘 모르겠음.
  // 이러면 input까지 가져와버리는 거
  this.setState({
    todos: todos.filter(todo => todo.id !== id)
  });
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
        <TodoItemList todos={this.state.todos} onRemove={this.handleRemove} />
         {/*  질문: 78행의 this.handleRemove 에서 this를 빼면 함수 인식을 못 함. 77행 같은 경우는 this가 없는데도 잘 되면서
                  77행과의 차이?
         */}
      </TodoList>
    );
  }
}

export default App;