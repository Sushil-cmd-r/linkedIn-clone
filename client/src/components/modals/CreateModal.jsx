import "./createmodal.scss";
import Backdrop from "../backdrop/Backdrop";

const CreateModal = ({ handleClose, setComment }) => {
  return (
    <Backdrop onClick={handleClose}>
      <div className="createmodal">
        <button onClick={handleClose}>Close</button>
      </div>
    </Backdrop>
  );
};

export default CreateModal;
