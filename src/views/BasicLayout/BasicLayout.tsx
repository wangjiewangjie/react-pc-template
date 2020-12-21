/*
 * @Author: wangjiewangjie
 * @Date: 2020-12-21 10:29:02
 * @LastEditTime: 2020-12-21 16:14:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-pc-template\src\views\basiclayout\BasicLayout.tsx
 */
import * as React from 'react'
import ImageWrap from '../../components/ImageWrap/ImageWrap'

export interface Props {}

export interface State {
  imageUrl: string
  width: number
  height: number
}

class BasicLayout extends React.Component<Props, State> {
  state = {
    imageUrl:
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1839428146,394280066&fm=26&gp=0.jpg',
    width: 100,
    height: 100,
  }
  handleClick() {
    /* 函数式调用this.setState */
    this.setState((prevState) => {
      return { width: prevState.width * 2, height: prevState.height * 2 }
    })
    this.setState((prevState) => {
      console.log(prevState.width)
    })
    /* 普通调用 */
    // this.setState({
    //   width: this.state.width * 2,
    //   height: this.state.height * 2,
    // })
  }
  render() {
    return (
      <React.Fragment>
        <ImageWrap
          imageUrl={this.state.imageUrl}
          width={this.state.width}
          height={this.state.height}
        ></ImageWrap>
        <button onClick={this.handleClick.bind(this)}>图片宽高 x2</button>
      </React.Fragment>
    )
  }
}

export default BasicLayout
