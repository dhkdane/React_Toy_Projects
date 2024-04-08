// App.jsx
/* eslint-disable react/prop-types */ // props내 value, onClick 정의시 eslint관련 경고를 방지하기위함
import "./App.css";
import { useState } from "react";

function Square({ value, onClick }) {
  // value및 값을 변경하기 위한 event를 같이 정의한다.
  // 정사각형을 버튼화하여 클릭시 value를 변경
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  // Board 함수 컴포넌트

  // props 정의 (props가 사용될 부분과 setter 초기화)
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // 승자를 결정하기 위한 함수
  function calculateWinner(squares) {
    // squares 배열을 인자로 받는다
    const lines = [
      // 승자가 나올 수 있는 케이스 모두 정의 (총 8개)
      [0, 1, 2], // 1열 가로 빙고
      [3, 4, 5], // 2열 가로 빙고
      [6, 7, 8], // 3열 가로 빙고
      [0, 3, 6], // 1행 세로 빙고
      [1, 4, 7], // 2행 세로 빙고
      [2, 5, 8], // 3행 세로 빙고
      [0, 4, 8], // 하향 대각선 빙고
      [2, 4, 6], // 상향 대각선 빙고
    ];

    // 마킹된 케이스 중 하나라도 위 빙고 케이스에 해당되면 즉각 더 이상 마킹을 멈추고 승자를 알림
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        // 가장 나중에 마킹한 플레이어가 승리했음을 알림
        console.log("The last player marked is the winner!");
        return squares[a];
      }
    }
    // 그 외의 경우 승자를 결정하지 않음
    return null;
  }

  function handleClick(i) {
    // 이벤트 처리 함수

    // square 배열이 유효하거나 승자 결정 함수가 호출되면 이벤트 정상 처리
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice(); // squares 배열의 다음 부분으로 넘어가기
    nextSquares[i] = xIsNext ? "X" : "O"; // 정사각형에 마킹이 'X'가 아니면 'X', 'X'이면 'O'으로 마킹

    setSquares(nextSquares); //  다음 정사각형 마킹
    setXIsNext(!xIsNext); // 마킹된 정사각형 다음 정사각형을 마킹
  }
  console.log(squares); // squares 배열 console에 출력

  // 클릭시 정사각형 각 부분의 값이 변경되는 것을 렌더링
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function App() {
  // 메인 어플리케이션 함수

  return (
    <>
      <Board /> // Board 함수 컴포넌트 렌더링
    </>
  );
}

export default App; // 컴포넌트 실행을 위한 수출 명령
