import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    //propsのTodo配列を元に、Todoコンポーネントを作成
    const todos = [];
    for(var i = 0; i < this.props.todoData.length; i++) {
      todos.push(
        <Todo
          title={this.props.todoData[i]}
          completeTodo={this.props.completeTodo}
        />
      );
    }

    return(
      <div className="todo-list">
        {todos}
      </div>
    );
  }

}

export default TodoList;
