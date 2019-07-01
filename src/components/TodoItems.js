import React, { Component } from "react";
import TodoItem from "./TodoItem";
import FlipMove from "react-flip-move";
export default class TodoItems extends Component {
  render() {
    const { items, deleteItem } = this.props;
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {items.map(item => (
            <TodoItem key={item.key} item={item} deleteItem={deleteItem} />
          ))}
        </FlipMove>
      </ul>
    );
  }
}
