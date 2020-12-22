import * as React from 'react'
import Header from '../../components/Header/Header'
import ImageWrap from '../../components/ImageWrap/ImageWrap'

export interface Props {}

export interface State {
  width: number
  height: number
  imageUrlList: Array<string>
}

class BasicLayout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      width: 100,
      height: 100,
      imageUrlList: [
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1839428146,394280066&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1839428146,394280066&fm=26&gp=0.jpg',
      ],
    }
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
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
        <Header>
          <i>头部</i>
        </Header>
        {this.state.imageUrlList.map((item, index) => {
          return (
            <ImageWrap
              key={index}
              imageUrl={item}
              width={this.state.width}
              height={this.state.height}
            ></ImageWrap>
          )
        })}

        <button onClick={this.handleClick.bind(this)}>图片宽高 x2</button>
      </React.Fragment>
    )
  }
}

export default BasicLayout
