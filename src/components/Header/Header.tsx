import * as React from 'react'
import './header.scss'

class Header extends React.Component {
  UNSAFE_componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return <header>{this.props.children}</header>
  }
}

export default Header
