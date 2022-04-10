import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [제목,제목변경] = useState(['공부하는 예냥이','롤하는 밍구','닭강정 먹고싶을 땐?']);
  let [하트,하트변경] = useState(0);
  let [하트2,하트변경2] = useState(0);
  let [하트3,하트변경3] = useState(0);

  return (
    <div className="App">
      <header className="header">
        <div className="nav">
          <div>YEL blog</div>
        </div>
      </header>
      <section>
        <div className="list">
          <h1> { 제목[0] } <span onClick={ ()=>{ 하트변경(하트 + 1) } }>❤</span>{하트}</h1>
          <p>4월 10일 작성</p>
          <hr></hr>
        </div>
        <div className="list">
          <h1> { 제목[1] } <span onClick={ ()=>{ 하트변경2(하트2 + 1) } }>❤</span>{하트2}</h1>
          <p>4월 11일 작성</p>
          <hr></hr>
        </div>
        <div className="list">
          <h1> { 제목[2] } <span onClick={ ()=>{ 하트변경3(하트3 + 1) } }>❤</span>{하트3}</h1>
          <p>4월 12일 작성</p>
          <hr></hr>
        </div>
      </section>
      <footer className="footer">
      </footer>
    </div>
  );
}

export default App;
