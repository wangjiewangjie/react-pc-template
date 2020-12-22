import * as React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ImageWrap from '../../components/ImageWrap/ImageWrap'
import { timeFormat } from '../../utils/common'

export interface Props {}

export interface State {
  width: number
  height: number
  imageUrlList: Array<string>
  isHeaderShow: boolean
  time: string
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
      isHeaderShow: false,
      time: timeFormat(null, 'yyyy-MM-dd hh-mm-ss'),
    }
  }

  UNSAFE_componentWillMount() {
    setInterval(() => {
      this.setState({
        time: timeFormat(null, 'yyyy-MM-dd hh:mm:ss'),
      })
    }, 1000)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  _handleHeaderClick() {
    this.setState({
      isHeaderShow: !this.state.isHeaderShow,
    })
  }

  _handleClick() {
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
        {this.state.isHeaderShow ? (
          <Header>
            <i>头部</i>
            <div className="time">{this.state.time}</div>
          </Header>
        ) : null}
        <button onClick={this._handleHeaderClick.bind(this)}>
          控制头部组件显示隐藏
        </button>

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
        <button onClick={this._handleClick.bind(this)}>图片宽高 x2</button>
        <Footer />
      </React.Fragment>
    )
  }
}

export default BasicLayout
