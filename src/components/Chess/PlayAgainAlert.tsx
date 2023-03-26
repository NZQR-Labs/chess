import React from "react";

interface Props {
  open: boolean;
  winner: string | null;
  onReset: () => void;
}

const PlayAgainAlert: React.FC<Props> = ({ open, winner, onReset }) => {
  return (
    <div>
      <input
        checked={open}
        type="checkbox"
        id="play-again-modal-toggle"
        readOnly
        className="modal-toggle"
      />

      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-neutral">
          <h3 className="font-bold text-lg">{`${winner || ""} wins!`}</h3>
          <p className="py-4">Do you want to play again?</p>
          <div className="modal-action">
            <label htmlFor="play-again-modal-toggle" onClick={onReset} className="btn mr-2">
              Yes
            </label>
            <label htmlFor="play-again-modal-toggle" className="btn" onClick={() => onReset()}>
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayAgainAlert;
