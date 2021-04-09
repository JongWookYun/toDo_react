// import logo from './logo.svg';
// import { render } from '../node_modules/@testing-library/react';
import React from 'react';


const TodoList = ({form, children}) => {
    return (
        <main className="todo-list">
            <div className="title">
                오늘 할 일
            </div>
            <secion className="form-wrapper">
                {form}
            </secion>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}
export default TodoList;