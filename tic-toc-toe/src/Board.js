import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClickSquare={handleClick} />
        <Square value={squares[1]} onClickSquare={handleClick} />
        <Square value={squares[2]} onClickSquare={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClickSquare={handleClick} />
        <Square value={squares[4]} onClickSquare={handleClick} />
        <Square value={squares[5]} onClickSquare={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClickSquare={handleClick} />
        <Square value={squares[7]} onClickSquare={handleClick} />
        <Square value={squares[8]} onClickSquare={handleClick} />
      </div>
    </>
  );
}
