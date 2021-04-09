// import logo from './logo.svg';
// import { render } from '../node_modules/@testing-library/react';
import TodoItem from './TodoItem';
import React, { Component } from 'react';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        
        const temp = [1,2,3,4,5]
        const newList = temp.filter(num => num%2 === 0)

        0 === "0"

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        
        return (
            <div>
                {todoList}
            </div>
        )
    }
}
export default TodoItemList;