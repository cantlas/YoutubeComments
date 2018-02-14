import React from "react";
import TimeAgo from "react-timeago";

const CommentList = props => (
  <div>
    {props.comments.map((comment, i) => (
      <div
        style={{ fontSize: "12px", overflow: "auto", paddingBottom: "5px" }}
        key={i}
      >
        <div className="user__avatar" />
        <p style={{ paddingLeft: "50px", marginTop: 0 }}>
          <strong>{comment.user}</strong> &nbsp;
          <TimeAgo live="false" date={comment.date} />
          <br />
          {comment.comment}
          <br />
          <br />
          <a style={{ fontSize: "12px", paddingLeft: 0 }} href="#">
            <strong>REPLY</strong>
          </a>
        </p>
      </div>
    ))}
  </div>
);

export default CommentList;
