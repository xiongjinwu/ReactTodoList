import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  //全选checkbox的回调
  hanledCheckAll= (e)=>{
    console.log(this)
    this.props.checkAll(e.target.checked)
  }
  //清除已完成的回调
  handelClearAll = ()=>{
    this.props.clearAll()
  }


  render() {
    let { todos } = this.props;
    let total = todos.length; //全部
    let doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total &&total !==0 ? true : false}
            onChange={this.hanledCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handelClearAll}>清除已完成任务</button>
      </div>
    );
  }
}
