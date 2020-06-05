import React, { Component } from 'react';
import './comment_app.scss'
import CommentInput from "./CommentInput"
import CommentList from './CommentList'

class CommentApp extends Component {
  render() {
    return (
      <div className="comment">
        <CommentInput />
        <CommentList  name="wang"/>
      </div>
    )
  }
}

export default CommentApp