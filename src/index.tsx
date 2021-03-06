import React from 'react'
import ReactDOM from 'react-dom'
import './styles/normalize.css'
import * as serviceWorker from './serviceWorker'
import BasicLayout from './views/BasicLayout/BasicLayout'
import 'antd/dist/antd.css'
import 'antd'

ReactDOM.render(<BasicLayout />, document.getElementById('root'))
serviceWorker.unregister()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
