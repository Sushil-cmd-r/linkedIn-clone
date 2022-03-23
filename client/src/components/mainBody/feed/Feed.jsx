import { Avatar } from "@material-ui/core";
import { useState } from "react";
import "./feed.scss";

import {
  ImageOutlined,
  VideoLibrary,
  CalendarToday,
  FormatIndentIncrease,
} from "@material-ui/icons";

import Icon from "./Icon/Icon";
import Comment from "./Comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import { createComment } from "../../../features/commentSlice";

const Feed = () => {
  const { comments, err } = useSelector((state) => state.comments);
  const [comment, setComment] = useState({ comment: "" });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createComment(comment));
    setComment({ comment: "" });
  };

  return (
    <div className="feed">
      <div className="feedInput">
        <div className="feedSearch">
          <Avatar fontSize="large">S</Avatar>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Start a Post"
              value={comment.comment}
              onChange={(e) =>
                setComment({ ...comment, comment: e.target.value })
              }
            />
          </form>
        </div>
        <div className="feedIcons">
          <Icon Icon={ImageOutlined} title="Photo" color="blue" />
          <Icon Icon={VideoLibrary} title="Video" color="green" />
          <Icon Icon={CalendarToday} title="Event" color="yellow" />
          <Icon Icon={FormatIndentIncrease} title="Article" color="red" />
        </div>
      </div>

      <div className="comments">
        {comments.length <= 0 ? (
          <p style={{ marginTop: "15px" }}>Loading Comments</p>
        ) : err ? (
          <p style={{ marginTop: "15px" }}>{err}</p>
        ) : (
          <FlipMove>
            {comments?.map((c) => (
              <Comment key={c._id} comment={c} />
            ))}
          </FlipMove>
        )}
      </div>
    </div>
  );
};

export default Feed;
