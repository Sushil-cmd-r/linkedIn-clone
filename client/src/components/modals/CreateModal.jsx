import "./createmodal.scss";
import Backdrop from "../backdrop/Backdrop";
import { Close, ImageOutlined } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../features/commentSlice";

const CreateModal = ({ handleClose }) => {
  const [image, setImage] = useState("");
  const commentRef = useRef(null);
  const fileRef = useRef(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user?.userName);

  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target?.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    console.log(imageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("comment", commentRef.current.value);
    data.append("image", fileRef?.current?.files[0]);
    dispatch(createComment(data));

    handleClose();
  };

  return (
    <Backdrop onClick={handleClose}>
      <div className="createmodal" onClick={(e) => e.stopPropagation()}>
        <form encType="multipart/form-data">
          <div className="modalHeader">
            <span>Create a post</span>
            <Close onClick={handleClose} className="icon" />
          </div>
          <div className="modalBody">
            <div className="info">
              <Avatar className="icon">{user[0]}</Avatar>
              <span>{user}</span>
            </div>
            <textarea
              type="text"
              placeholder="What do you want to talk about?"
              ref={commentRef}
            />
            <img src={image} alt="" />
          </div>
          <div className="modalFooter">
            <div className="icons">
              <label htmlFor="image">
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="image"
                  ref={fileRef}
                  onChange={handleImage}
                />
                <ImageOutlined className="icon" />
              </label>
              <span className="icon-text">Add Image</span>
            </div>
            <button onClick={handleSubmit}>Post</button>
          </div>
        </form>
      </div>
    </Backdrop>
  );
};

export default CreateModal;
