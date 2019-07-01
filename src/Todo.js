import React, { Component } from "react";

export default class Todo extends Component {

  state = {
    items: [],
    currentItem: ''
  }

  addItem = e => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.currentItem],
      currentItem: ''
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
            <input onChange={this.updateCurrentItem} placeholder="enter task" />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}
