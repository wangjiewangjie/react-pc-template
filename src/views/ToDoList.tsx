import * as React from 'react';
import ToDoListItem from './ToDoListItem';

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

  onClickDel(index: number) {
    console.log(1)
    let list = this.state.list.splice(index + 1, 1)

    this.setState({
      list: list
    })
  }

  render() {
    return (
      <React.Fragment>
        <div><input type="text" value={this.state.inputValue} onChange={this.onChangeInputVlaue.bind(this)} /><button onClick={this.onClickAdd.bind(this)}>添加</button></div>
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