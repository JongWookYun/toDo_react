// import logo from './logo.svg';
// import { render } from '../node_modules/@testing-library/react';
import React from 'react';


const TodoList = ({form, children}) => {
    return (
        <div className="todo-list">
            <div className="title">
                오늘 할 일
            </div>
            <div className="form-wrapper">
                {form}
            </div>
            <div className="todos-wrapper">
                {children}
            </div>
        </div>
        /*
        <main className="todo-list">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
        */

        // 원래 위 주석처리 한 형식이였는데
        // 개발자 콘솔창에서 warning 발생.
        // 구글링 시 리액트 에서 컴포넌트들을 생성하는것은 파스칼 케이스에 해당되기 때문에 gdlButton 와 같이 생성하면 렌더링이 되지 않는다고 함.
        // 첫 문자가 대문자로 오는 파스칼 케이스여야 한다고 함.
        // 아래는 참조 링크
        // https://ipex.tistory.com/entry/React-%EC%8B%9C%EC%9E%91-%EC%A0%84-%EC%A4%80%EB%B9%84-%EB%8B%A8%EA%B3%84-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85-Trouble-Shooting
    )
}
export default TodoList;