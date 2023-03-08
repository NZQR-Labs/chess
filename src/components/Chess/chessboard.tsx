import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";
import IllegalMoveModal from "./IllegalMoveAlert";
interface Props {
  width: number;
}

const Board: React.FC<Props> = ({width}) => {
  const [game, setGame] = useState(new Chess());
  const [moveError, setError] = useState<any>(); 
  const [open, setOpen] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

useEffect(() => {
  if (game.turn() === 'b') {
    const possibleMoves = game.moves();
    if (possibleMoves.length > 0) {
      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      const move = possibleMoves[randomIndex];
      if (move) {
        makeMove(move);
      }
    }
  }
}, [game]);


  const makeMove = (move: string | { from: string; to: string; promotion?: string | undefined; }) => {
    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn());
    try {
      gameCopy.move(move);
    }
    catch (error) {
      setOpen(true);
      setError((error as any)?.message);
    }
    setGame(gameCopy);

    if (gameCopy.isGameOver()) {
      if (gameCopy.isCheckmate()) {
        const winnerColor = gameCopy.turn() === "w" ? "Black" : "White";
        setWinner(winnerColor);
      }
    }
  };

  const onDrop = (
    startSquare: Square,
    endSquare: Square,
    piece: Piece | undefined
  ): boolean => {
    let move: string | { from: string; to: string; promotion?: string | undefined } = {
      from: startSquare,
      to: endSquare,
    };
    if (startSquare && endSquare && piece) {
      if (
        piece.type === "p" &&
        ((piece.color === "w" && endSquare[1] === "8") ||
          (piece.color === "b" && endSquare[1] === "1"))
      ) {
        move = {
          ...move,
          promotion: "q",
        };
      }
      if (typeof move === "object" && "from" in move && "to" in move) {
        makeMove(move);
      } else if (typeof move === "string") {
        makeMove(move);
      }
    }
    return true;
  };
  

  const resetGame = () => {
    setGame(new Chess());
    setWinner(null);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <Chessboard boardWidth={width} position={game.fen()} onPieceDrop={onDrop} />
        </div>
        <div>
          {winner ? (
            <>
              <p>{`${winner} wins!`}</p>
              <button className="play-again-button" onClick={resetGame}>
  Play again
</button>
            </>
          ) : (
            <p>Current player: {game.turn() === "w" ? "White" : "Black"}</p>
          )}
        </div>
      </div>
      <IllegalMoveModal open={open} setOpen={setOpen} errorMessage={moveError} />
    </>
  );
};

export default Board;
