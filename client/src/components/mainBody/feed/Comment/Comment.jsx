import "./comment.scss";
import { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";
import { ThumbUp, Send, Reply, InsertComment } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { forwardRef } from "react";

const Comment = forwardRef(({ comment }, ref) => {
  const bodyRef = useRef(null);
  const [readmore, setReadmore] = useState(false);

  useEffect(() => {
    const check = () => {
      // console.log(bodyRef.current?.scrollHeight);
      // console.log(bodyRef?.current?.clientHeight);
      return bodyRef.current?.scrollHeight > bodyRef?.current?.clientHeight;
    };
    setReadmore(check());
  });

  const handleReadmore = (e) => {
    const target = e.target;
    const parent = target.parentElement; //parent of "target"
  };

  return (
    <div className="comment" ref={ref}>
      <div className="commentHead">
        <Avatar>{comment.creater[0]}</Avatar>
        <div className="commentInfo">
          <h3>{comment.creater}</h3>
          <p>This is Descrition</p>
        </div>
      </div>
      <div className="commentBody" ref={bodyRef}>
        <p>{comment.comment}</p>
        {readmore && <span onClick={handleReadmore}>Read More</span>}
      </div>
      {comment.img && (
        <div className="commentImage">
          <img src={comment.img} alt="" />
        </div>
      )}
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
