import React, { Component } from 'react';
import './comment_app.scss'
import CommentInput from "./CommentInput"

class CommentApp extends Component {
  render() {
    return (
      <div className="comment">
        <CommentInput />
      </div>
    )
  }
}

export default CommentApp