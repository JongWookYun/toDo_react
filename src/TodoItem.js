// import logo from './logo.svg';
// import { render } from '../node_modules/@testing-library/react';
import './TodoItem.css'; 
import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const { id, text, checked, onToggle, onRemove } = this.props;
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className={`todo-text ${checked && 'checked'}`}>
                    {text}
                </div>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>&nbsp;X&nbsp;</div>
            </div>
        );
    }
}
export default TodoItem;