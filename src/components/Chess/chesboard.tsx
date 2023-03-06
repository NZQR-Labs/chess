/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import {Chess} from "chess.js";
import { Chessboard } from "react-chessboard";
import { type Piece, type Square } from "react-chessboard/dist/chessboard/types";
import IllegalMoveModal from "./illegalMoveAlert";

interface Props {
  width: number;
}

const Board: React.FC<Props> = ({width}) => {
  const [game, setGame] = useState(new Chess());
  const [moveError, setError] = useState<any>(); 
  const [open, setOpen] = useState(false); 

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
  };

  const onDrop = (startSquare: Square, endSquare: Square, piece: Piece): boolean => {
    makeMove({
      from: startSquare,
      to: endSquare,
    });
    return true;
  };

  return <>
    <IllegalMoveModal open={open} setOpen={setOpen} errorMessage={moveError} />
    <Chessboard boardWidth={width} position={game.fen()} onPieceDrop={onDrop} />
  </>;
};

export default Board;