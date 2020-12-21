import * as React from 'react'
import './image-wrap.scss'

export interface Props {
  imageUrl: string
  width: number
  height: number
}

export interface State {}

class ImageWrap extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }
  render() {
    const width = this.props.width || 100
    const height = this.props.height || 100
    const imageUrl =
      this.props.imageUrl ||
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1839428146,394280066&fm=26&gp=0.jpg'
    return (
      <React.Fragment>
        <div
          className="image-wrap"
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          <img style={{ height: `${height}px` }} src={imageUrl} alt="img" />
        </div>
      </React.Fragment>
    )
  }
}

export default ImageWrap
