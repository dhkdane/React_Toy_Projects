import React from "react";
// import TicTacToe from "./components/tictactoe/tictactoe";
import TicTacToe from "./components/tictactoe/tictactoe";
import StateHandler from "./components/basics/stateHandler";
import StateAsync from "./components/basics/stateAsync";
import Todo from "./components/todolist/todo";
import MapApi from "./components/mapApi";
export default function App() {
  return (
    <div>
      <Todo />
      {/* <MapApi /> */}
    </div>
  );
}
