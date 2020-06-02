import React, { Component } from 'react'
import './comment_input.scss'

class CommentInput extends Component {
  render() {
    return (
      <form>
        <div className="input_wrap">
          <label htmlFor="username">用户名：</label>
          <input type="text" name="username" placeholder="请输入用户名" />
        </div>

        <div className="input_wrap">
          <label htmlFor="comment">评论：</label>
          <textarea name="comment"></textarea>
        </div>

        <button>发布</button>
      </form>

    )
  }
}

export default CommentInput