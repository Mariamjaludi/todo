import React, { Component } from "react";
import TodoItems from './components/TodoItems'
export default class Todo extends Component {

  state = {
    items: [],
    currentItem: {
      text: "",
      key: null
    }
  }

  addItem = e => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.currentItem],
      currentItem: {
        text: "",
        key: null
      }
    })

  }

  updateCurrentItem = e => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input onChange={this.updateCurrentItem} placeholder="enter task" value={this.state.currentItem.text}/>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems items={this.state.items}/>
      </div>
    );
  }
}
