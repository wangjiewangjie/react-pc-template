import * as React from 'react';

export interface Props {
  content: string,  //父子组件传参需要定义
  index: number
}

export interface State {

}

class ToDoListItem extends React.PureComponent<Props, State> {
  constructor(Props: Readonly<Props>) {
    super(Props)
    this.onClickDel = this.onClickDel.bind(this)
  }

  onClickDel() {
    console.log(this.props.content)
  }

  render() {
    return (
      <li onClick={this.onClickDel}>{this.props.content}</li>
    );
  }
}

export default ToDoListItem;