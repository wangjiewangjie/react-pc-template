import React, { Component } from 'react'
// // import Comment from './Comment'
// interface IProps {
//   comments: {
//     username: string,
//     content: string
//   }[]
// }
// interface IState {
//   name: string,
// }
// class CommentList extends Component<IProps, IState>{
//   constructor(props: IProps) {
//     super(props)
//     this.state = {
//       name: "wang"
//     }
//   }
//   render() {
//     return (
//       <ul>
//         <li><span>{this.state.name}</span>reactdemo</li>
//       </ul>
//     )
//   }
// }

// export default CommentList

interface UserState {
  createTime: Date
}
interface UserProp {
  name: string
}
class CommentList extends Component<UserProp, UserState>{
  constructor(props: UserProp) {
    super(props);
    this.state = { createTime: new Date() };
  }
  render() {
    return <div>
      <p>我是User组件</p>
      <p>我的名字是{this.props.name}</p>
      <p>我的创建时间是{this.state.createTime.toString()}</p>
    </div>
  };
}

export default CommentList