// import logo from './logo.svg';
// import { render } from '../node_modules/@testing-library/react';
import TodoItem from './TodoItem';
import React, { Component } from 'react';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        
        // const temp = [1,2,3,4,5]
        // const newList = temp.filter(num => num%2 === 0)

        // 0 === "0"

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                    // npm start 시 개발자 콘솔에 아래와 같은 warning이 발생.
                    // Warning: The tag <secion> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
                    // 구글링 시 자식 Element(요소) 를 map같은 걸로 여러개 생성시 key 값을 지정하지 않으면 해당 워닝을 뱉어낸다고 함.
                    // 26행의 key는 23번 행의 key를 의미하는 게 아닌지?
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