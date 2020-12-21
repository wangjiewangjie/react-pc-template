import * as React from 'react'
import './image-wrap.scss'

export interface Props {
  imageUrl: string
  width: number
  height: number
}

export interface State {}

class ImageWrap extends React.Component<Props, State> {
  static defaultProps = {
    width: 100,
    height: 100,
    imageUrl:
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1839428146,394280066&fm=26&gp=0.jpg',
  }

  constructor(props: Props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <React.Fragment>
        <div
          className="image-wrap"
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
          }}
        >
          <img
            style={{ height: `${this.props.height}px` }}
            src={this.props.imageUrl}
            alt="img"
          />
        </div>
      </React.Fragment>
    )
  }
}

export default ImageWrap
