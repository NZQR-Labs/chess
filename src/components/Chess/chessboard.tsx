/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import type { Piece, Square } from "react-chessboard/dist/chessboard/types";
import PlayAgainAlert from "./PlayAgainAlert";
import IllegalMoveModal from "./IllegalMoveAlert";

interface Props {
  width: number;
  fen?: string;
}

const Board: React.FC<Props> = ({ width, fen }) => {
  const [game, setGame] = useState(new Chess(fen));
  const [moveError, setError] = useState<any>();
  const [playAgain, setPlayAgain] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [open, setOpen] = useState(false); 

  const makeMove = (
    move: string | { from: string; to: string; promotion?: string | undefined }
  ) => {
    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn());
    try {
      gameCopy.move(move);
    } catch (error) {
      console.log("Invalid move detected.");
      setOpen(true); 
      setError((error as any).message);
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
      <div className="flex">
        <div className="flex flex-col justify-center">
          {winner ? (
            <PlayAgainAlert
              open={playAgain}
              winner={winner}
              onReset={resetGame}
            />
          ) : (
            <kbd className="kbd font-bold mb-5">Current player: {game.turn() === "w" ? "White" : "Black"} </kbd>
          )}
          <Chessboard boardWidth={width} position={game.fen()} onPieceDrop={onDrop} />
        </div>
        <div>
 
        </div>

        <IllegalMoveModal open={open} setOpen={setOpen} errorMessage={moveError} />
      </div>
    </>
  );
};

export default Board;
