import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";
import PlayAgainAlert from "./PlayAgainAlert";

interface Props {
  width: number;
}

const Board: React.FC<Props> = ({ width }) => {
  const [game, setGame] = useState(new Chess());
  const [playAgain, setPlayAgain] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    if (game.turn() === "b") {
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

  const makeMove = (
    move: string | { from: string; to: string; promotion?: string | undefined }
  ) => {
    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn());
    try {
      gameCopy.move(move);
    } catch (error) {
      console.log("Invalid move detected.");
      setError((error as { message: string })?.message);
    }
    setGame(gameCopy);

    if (gameCopy.isGameOver()) {
      if (gameCopy.isCheckmate()) {
        const winnerColor = gameCopy.turn() === "w" ? "Black" : "White";
        setWinner(winnerColor);
        setPlayAgain(true);
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
      const color = piece[0] === "w" ? "w" : "b";
      if (
        piece === "wP" ||
        piece === "bP" ||
        (piece === "wK" && startSquare === "e1" && endSquare === "g1") ||
        (piece === "bK" && startSquare === "e8" && endSquare === "g8") ||
        (piece === "wK" && startSquare === "e1" && endSquare === "c1") ||
        (piece === "bK" && startSquare === "e8" && endSquare === "c8")
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
    setPlayAgain(false);
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
            <PlayAgainAlert
              open={playAgain}
              winner={winner}
              onReset={resetGame}
            />
          ) : (
            <p>Current player: {game.turn() === "w" ? "White" : "Black"}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Board;
