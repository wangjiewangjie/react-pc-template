import * as React from 'react'
import { Component, Fragment } from 'react'
export interface Props {}

export interface State {
  like: boolean
}

class Title extends Component<Props, State> {
  render() {
    return <h1>我是一个标题</h1>
  }
}

class Button extends Component<Props, State> {
  state = { like: false }
  handleClick(e: any) {
    console.log(e)
    this.setState({
      like: !this.state.like,
    })
  }
  renderGoodWord(goodWord: any, badWord: any) {
    const isGoodWord = false
    return isGoodWord ? goodWord : badWord
  }

  render() {
    return (
      <Fragment>
        <Title></Title>
        <button onClick={this.handleClick.bind(this)}>
          {this.state.like ? '😍' : '不😍'}
        </button>
        <div>{this.renderGoodWord(<strong>哈哈</strong>, <i>哈哈</i>)}</div>
      </Fragment>
    )
  }
}

export default Button
