/*eslint-disable*/

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // useState = [파라미터, 변경함수]
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal,modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // 리액트 내 반복문 돌리는법
  // function 반복된UI(){
  //   let array = [];
  //   for(let i = 0; i < 3; i++) {
  //     array.push(<div>안녕</div>);
  //   }
  //   return array
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        글제목.map((a, i)=>{
          return (
            <div className="list" key={i}>
              <h3 onClick={ ()=>{누른제목변경(i)} }> { a } <span onClick={ ()=>{ 따봉변경(따봉 + 1) }}>👍</span> { 따봉 }</h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          )
        })
      }

      <div className='publish'>
        <input />
        <button>저장</button>
      </div>





      {/* {입력값}
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> */}





      {/* <button onClick={ ()=>{누른제목변경(0)} }>버튼1</button>
      <button onClick={ ()=>{누른제목변경(1)} }>버튼2</button>
      <button onClick={ ()=>{누른제목변경(2)} }>버튼3</button> */}
      <button onClick={ ()=>{ modal변경(!modal)} }>열고 닫기</button>
      {
        // Props 문법 : 자식 컴포넌트에 필요한 state를 props라는 파라미터에 한꺼번에 저장.
        // 저장한 props는 props.변수명 < 으로 사용한다.
        modal === true
        ? <Modal title={ 글제목 } 누른제목={ 누른제목 }></Modal>
        : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      <h2>제목 { props.title[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
