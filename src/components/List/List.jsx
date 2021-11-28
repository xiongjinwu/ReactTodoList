import React, { Component } from "react";
import PropTypes from "prop-types";
import "./list.css";
import Item from "../Item/Item";

export default class List extends Component {
  static propsType = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };
  render() {
    let { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((item) => {
          // return <Item  key={item.id} name={item.name} done={item.done}/>
          return (
            <Item
              key={item.id}
              {...item}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
