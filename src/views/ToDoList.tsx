import * as React from 'react';
import ToDoListItem from './ToDoListItem';
import './todolist.scss'

export interface Props {

}

export interface State {
  inputValue: string,
  list: Array<string>
}

class ToDoList extends React.Component<Props, State> {

  constructor(Props: Readonly<Props>) {
    super(Props);

    this.state = {
      inputValue: 'wangjie',
      list: ['test1', 'test2']
    }

    this.onChangeInputVlaue = this.onChangeInputVlaue.bind(this)
    this.onClickAdd = this.onClickAdd.bind(this)
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

  render() {
    return (
      <React.Fragment>
        <div><input className="tdl-input" type="text" value={this.state.inputValue} onChange={this.onChangeInputVlaue} /><button onClick={this.onClickAdd}>添加</button></div>
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
}

export default ToDoList;