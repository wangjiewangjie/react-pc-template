import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  render() {
    return (
      <ul>
        <Comment />
      </ul>
    )
  }
}

export default CommentList