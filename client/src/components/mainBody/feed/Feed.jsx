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
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

const Feed = ({ modal, close, open }) => {
  const comments = useSelector((state) => state.comments.filter);
  const err = useSelector((state) => state.comments.err);
  const user = useSelector((state) => state.users.user?.userName);

  return (
    <div className="feed">
      <div className="feedInput">
        <div className="feedSearch">
          <Avatar fontSize="large">{user[0]}</Avatar>
          <input
            onClick={() => (modal ? close() : open())}
            placeholder="Start a post"
          />
        </div>
        <div className="feedIcons">
          <Icon Icon={ImageOutlined} title="Photo" color="blue" />
          <Icon Icon={VideoLibrary} title="Video" color="green" />
          <Icon Icon={CalendarToday} title="Event" color="yellow" />
          <Icon Icon={FormatIndentIncrease} title="Article" color="red" />
        </div>
      </div>

      <div className="comments">
        {comments.length <= 0 && !err ? (
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
