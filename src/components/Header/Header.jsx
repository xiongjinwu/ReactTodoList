import React, { Component } from "react";
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import "./header.css";

export default class Header extends Component {

  static propTypes = {
    addTodo:PropTypes.func.isRequired //添加一个必填任务的函数
  }

  handleKeyUp = (e) => {
    if (e.keyCode !== 13) return;
    if(e.target.value.trim() === '') {
      alert('添加的任务不能为空！')
      return;
    }
    let todoObj = {id:nanoid(),name:e.target.value,done:false}
    this.props.addTodo(todoObj); //通过调用父中的方法，将输入框的参数传给父
    e.target.value = ''
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
