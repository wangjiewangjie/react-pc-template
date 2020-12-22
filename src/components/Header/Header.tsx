import * as React from 'react'
import './header.scss'

class Header extends React.Component {
  render() {
    return <header>{this.props.children}</header>
  }
}

export default Header
