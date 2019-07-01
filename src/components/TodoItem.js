import React, { Component } from "react";

class TodoItem extends Component {

  handleClick = () => {
    const { item, deleteItem } = this.props;
    deleteItem(item)  
  }
  render() {
    const { item } = this.props;
    return <li onClick={this.handleClick}>{item.text}</li>;
  }
}

export default TodoItem;
