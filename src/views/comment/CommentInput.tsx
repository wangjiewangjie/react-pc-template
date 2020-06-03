import React, { Component } from 'react'
import './comment_input.scss'


// type propType = {
//   username: string;
//   content: string;
// };
// interface IComment {
//   props: propType
// }
class CommentInput extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      username: '',
      content: ''
    }
  }

  handleUserNameChange(event: any) {
    this.setState({
      username: event.target.value
    })
  }

  handleContentChange(event: any) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({ username, content })
    }
    this.setState({ content: '' })
  }

  render() {
    return (
      <div>
        <div className="comment-input">
          <label htmlFor="username">用户名：</label>
          <input type="text" name="username" placeholder="请输入用户名" value={this.state.username} onChange={this.handleUserNameChange.bind(this)} />
        </div>

        <div className="comment-input">
          <label htmlFor="comment">评论：</label>
          <textarea name="comment" value={this.state.content} onChange={this.handleContentChange.bind(this)}></textarea>
        </div>

        <button onClick={this.handleSubmit.bind(this)}>发布</button>
      </div>
    )
  }
}

export default CommentInput