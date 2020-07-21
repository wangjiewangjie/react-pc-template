import * as React from 'react';
import ToDoListItem from './ToDoListItem';
import './todolist.scss'

/* 
State 与 Props 区别：
State是可变的，是一组用于反映组件UI变化的状态集合；
而Props对于使用它的组件来说，是只读的，要想修改Props，只能通过该组件的父组件修改。
在组件状态上移的场景中，父组件正是通过子组件的Props, 传递给子组件其所需要的状态 
*/
export interface Props {

}

export interface State {
  inputValue: string,
  list: Array<string>
}

class ToDoList extends React.Component<Props, State> {
  /* 
  constructor()中完成了React数据的初始化，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
  注意：只要使用了constructor()就必须写super(),否则会导致this指向错误。
  */
  constructor(Props: Readonly<Props>) {
    super(Props);

    this.state = {
      inputValue: 'wangjie',
      list: ['test1', 'test2']
    }

    this.onChangeInputVlaue = this.onChangeInputVlaue.bind(this)
    this.onClickAdd = this.onClickAdd.bind(this)
  }

  /*   
  componentWillMount()一般用的比较少，它更多的是在服务端渲染时使用。
  它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。 
  */
  componentWillMount() { }

  /* 
    组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
  */
  componentDidMount() { }

  /* 
  在此处完成组件的卸载和数据的销毁。
  clear你在组建中所有的setTimeout,setInterval
  移除所有组建中的监听 removeEventListener
  */
  componentWillUnmount() { }

  /* 
  在接受父组件改变后的props需要重新渲染组件时用到的比较多
  接受一个参数nextProps
  通过对比nextProps和this.props，将nextProps的state为当前组件的state，从而重新渲染组件
  */
  componentWillReceiveProps(nextProps: any) { }

  /* 
  主要用于性能优化(部分更新)
  唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，在这里return false可以阻止组件的更新
  因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断
  */
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return true;
  }

  /* 
  shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate,这里同样可以拿到nextProps和nextState。
  */
  componentWillUpdate(nextProps: any, nextState: any) {
    console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
  }

  /* 
  组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state
  */
  componentDidUpdate(prevProps: any, prevState: any) { }

  
  render() {
    return (
      <React.Fragment>
        <div>
          <input className="tdl-input"
            type="text" value={this.state.inputValue}
            onChange={this.onChangeInputVlaue}
          />
          <button onClick={this.onClickAdd}>添加</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <ToDoListItem key={index + item} index={index} content={item} />
              )
            })
          }
        </ul>
      </React.Fragment>
    );
  }

  onChangeInputVlaue(e: any) {
    this.setState({
      inputValue: e.target.value
    })
  }

  onClickAdd() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
}

export default ToDoList;