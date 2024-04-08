// Importing necessary dependencies
import { useState, useEffect } from "react";
import "./tictactoe.css";
import circle_icon from "../assets/o_ttt.png";
import cross_icon from "../assets/x_ttt.png";

// Defining the TicTacToe functional component
export default function TicTacToe() {
  // State variables using the useState hook
  const [cells, setCells] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);
  const [status, setStatus] = useState("");

  // Effect hook to check for winning conditions when the cells state changes
  useEffect(() => {
    checkWin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cells]);

  // Effect hook to update the status message based on winner and count states
  useEffect(() => {
    if (winner) {
      setStatus(`${winner} wins!`);
      setLock(true);
    } else if (count === 9) {
      setStatus("It's a draw!");
      setLock(true);
    } else {
      setStatus(`Next Player: ${count % 2 === 0 ? "X" : "O"}`);
    }
  }, [winner, count]);

  // Function to check for winning combinations
  const checkWin = () => {
    // Array of winning combinations
    const lines = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal from top left to bottom right
      [2, 4, 6], // Diagonal from top right to bottom left
    ];

    // Loop through each winning combination
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      // Check if cells in the combination are equal and not empty
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        // Set the winner and exit the loop
        console.log("i won");
        setWinner(cells[a]);

        return;
      }
    }
  };

  // Function to handle cell click
  const handleClick = (num) => {
    if (cells[num] || lock) return; // If the cell is already filled or the game is locked, do nothing

    const newCells = [...cells];

    newCells[num] = count % 2 === 0 ? "X" : "O";

    setCells(newCells);
    setCount(count + 1);
  };

  // Function to handle game reset
  const handleReset = () => {
    setCells(Array(9).fill(""));
    setCount(0);
    setLock(false);
    setWinner(null);
    setStatus("");
  };

  // Function to render each cell button
  const cell = (num) => {
    return (
      <button className="boxes" onClick={() => handleClick(num)}>
        {cells[num] === "X" ? (
          <img className="square-image" src={cross_icon} alt="Cross Icon" />
        ) : cells[num] === "O" ? (
          <img className="square-image" src={circle_icon} alt="Circle Icon" />
        ) : null}
      </button>
    );
  };

  // Rendering the Tic Tac Toe board
  return (
    <div className="container">
      <div className="status">{status}</div>
      <div className="board">
        <div className="row1">
          {cell(0)}
          {cell(1)}
          {cell(2)}
        </div>
        <div className="row2">
          {cell(3)}
          {cell(4)}
          {cell(5)}
        </div>
        <div className="row3">
          {cell(6)}
          {cell(7)}
          {cell(8)}
        </div>
      </div>

      <button className="reset" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}
