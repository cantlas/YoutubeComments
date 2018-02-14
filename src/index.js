import React from "react";
import { render } from "react-dom";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import "./index.css";

const styles = {
  fontFamily: "sans-serif"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      comments: []
    };
  }
  toggleHidden() {
    this.setState(...this.state, {
      isHidden: !this.state.isHidden
    });
  }
  handleNewComment(newComment) {
    this.setState(...this.state, {
      comments: [newComment, ...this.state.comments]
    });
  }
  render() {
    console.log(this.state);
    return (
      <div style={styles}>
        <hr />
        <div className="comments__head">
          {this.state.comments.length} Comments
          <a href="#" onClick={this.toggleHidden.bind(this)}>
            SORT BY
          </a>
          {!this.state.isHidden && (
            <div className="sortby__click">
              <div id="top-padding-fix">Top comments</div>
              <div> Newest first</div>
            </div>
          )}
        </div>
        <AddComment submitComment={this.handleNewComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
