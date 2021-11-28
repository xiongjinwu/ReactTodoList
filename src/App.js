import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: "学习", done: true },
      { id: 2, name: "跑步", done: false },
      { id: 3, name: "游泳", done: true },
    ],
  };

  //接收子给父传递的参数
  addTodo = (todoObj) => {
    let { todos } = this.state;
    //在数组前追加，返回新数组
    let newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };
  //更新每个todoObj,通过Item给传的参数
  updateTodo = (id, done) => {
    let { todos } = this.state;
    let newTodos = todos.map((todoObj) => {
      // 如果当前对象中的ID和传来的ID相等，就改变done的状态,jsx中{...todoObj}语法不是复制一个对象
      if (todoObj.id == id) {
        return { ...todoObj, done: done };
      } else {
        return todoObj;
      }
    });
    this.setState({ todos: newTodos });
  };
  //删除一个todo
  deleteTodo = (id) => {
    let { todos } = this.state;
    let newTodos = todos.filter((todoObj) => {
      if (todoObj.id !== id) return todoObj;
    });
    this.setState({ todos: newTodos });
  };
  //全选
  checkAll = (done) => {
    let { todos } = this.state;
    let newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: done };
    });
    this.setState({ todos: newTodos });
  };
  //清除完成的方法，传给Footer
  clearAll = () => {
    let { todos } = this.state;
    let newTodos = todos.filter((todoObj) => {
      return todoObj.done ==false;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    let { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          {/* 把数据传给List组件 */}
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAll={this.checkAll}
            clearAll={this.clearAll}
          />
        </div>
      </div>
    );
  }
}
