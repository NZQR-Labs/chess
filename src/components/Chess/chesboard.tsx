/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import {Chess} from "chess.js";
import { Chessboard } from "react-chessboard";
import { type Piece, type Square } from "react-chessboard/dist/chessboard/types";

interface Props {
  width: number;
}

const Board: React.FC<Props> = ({width}) => {
  const [game, setGame] = useState(new Chess());

  const makeMove = (move: string | { from: string; to: string; promotion?: string | undefined; }) => {
    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn());
    gameCopy.move(move);
    setGame(gameCopy);
  };

  const onDrop = (startSquare: Square, endSquare: Square, piece: Piece): boolean => {
    makeMove({
      from: startSquare,
      to: endSquare,
    });
    return true;
  };

  return <Chessboard boardWidth={width} position={game.fen()} onPieceDrop={onDrop} />;
};

export default Board;