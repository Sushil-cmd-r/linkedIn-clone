import "./comment.scss";

import Icon from "../Icon/Icon";
import { ThumbUp, Send, Reply, InsertComment } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { forwardRef } from "react";

const Comment = forwardRef(({ comment }, ref) => {
  return (
    <div className="comment" ref={ref}>
      <div className="commentHead">
        <Avatar>{comment.creater[0]}</Avatar>
        <div className="commentInfo">
          <h3>{comment.creater}</h3>
          <p>This is Descrition</p>
        </div>
      </div>
      <div className="commentBody">
        <p>{comment.comment}</p>
      </div>
      <div className="commentIcons">
        <Icon Icon={ThumbUp} title="Like" color="gray" />
        <Icon Icon={InsertComment} title="Comment" color="gray" />
        <Icon Icon={Reply} title="Share" color="gray" />
        <Icon Icon={Send} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Comment;
