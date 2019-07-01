import React, { Component } from 'react';
import TodoItem from './TodoItem'
export default class TodoItems extends Component {
  render () {
    const {items} = this.props
    return (
      <ul className="theList">
      {items.map(item => <TodoItem key={item.key} item={item}/>)}
      </ul>
    )
  }
}
