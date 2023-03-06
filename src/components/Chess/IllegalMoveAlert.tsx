import React from "react"; 

interface Props {
  open: boolean; 
  setOpen: React.Dispatch<boolean>; 
  errorMessage: string; 
}

const IllegalMoveModal: React.FC<Props> = ({open, setOpen, errorMessage}) => {

  return (
    <div>      
      <input checked={open} type="checkbox" id="my-modal-6" className="modal-toggle" />

      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Illegal Move!</h3>          
          <p className="py-4">Invalid move  {(errorMessage || "").split(": ")[1]?.replaceAll("{", "").replaceAll("}", "").replaceAll("\"", "").replaceAll(":", " ").replaceAll(",", " ")}.</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" onClick={() => setOpen(false)} className="btn">okay</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllegalMoveModal;