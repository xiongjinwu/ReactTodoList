import React, { Component } from "react";
import "./item.css";

export default class Item extends Component {
  state = { mouse: false }; //标识鼠标移入和移除

  // 鼠标移入或移除
  hanldMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  //改变当前Item是否选中，同时更新App中的状态
  handleCheck = (id) => {
    return (e) => {
      console.log(e.target.checked, id);
      this.props.updateTodo(id, e.target.checked);
    };
  };
  //删除一个Item
  handleDelete = (id) => {
    console.log(id);
    if (window.confirm("确定删除吗？")) {
      this.props.deleteTodo(id);
    }
  };
  render() {
    let { mouse } = this.state;
    let { id, name, done } = this.props;
    return (
      <div>
        <li
          style={{ backgroundColor: mouse ? "#ddd" : "white" }}
          onMouseEnter={this.hanldMouse(true)}
          onMouseLeave={this.hanldMouse(false)}
        >
          <label>
            <input
              type="checkbox"
              checked={done}
              onChange={this.handleCheck(id)}
            />
            <span>{name}</span>
          </label>
          <button
            className="btn btn-danger"
            style={{ display: mouse ? "block" : "none" }}
            onClick={() => this.handleDelete(id)}
          >
            删除
          </button>
        </li>
      </div>
    );
  }
}
