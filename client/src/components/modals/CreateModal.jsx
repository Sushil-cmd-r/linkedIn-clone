import "./createmodal.scss";
import Backdrop from "../backdrop/Backdrop";
import { Close, ImageOutlined } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useState } from "react";

const CreateModal = ({ handleClose }) => {
  const [image, setImage] = useState("");
  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target?.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    console.log(imageUrl);
  };

  return (
    <Backdrop onClick={handleClose}>
      <div className="createmodal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <span>Create a post</span>
          <Close onClick={handleClose} className="icon" />
        </div>
        <div className="modalBody">
          <div className="info">
            <Avatar className="icon" />
            <span>Sushil Kandhare</span>
          </div>
          <textarea type="text" placeholder="What do you want to talk about?" />
          <img src={image} alt="" />
        </div>
        <div className="modalFooter">
          <div className="icons">
            <label htmlFor="image">
              <input
                type="file"
                style={{ display: "none" }}
                id="image"
                onChange={handleImage}
              />
              <ImageOutlined className="icon" />
            </label>
            <span className="icon-text">Add Image</span>
          </div>

          <button>Post</button>
        </div>
      </div>
    </Backdrop>
  );
};

export default CreateModal;
