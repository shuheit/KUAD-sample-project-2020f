import React, { Component } from 'react';
import TodoCounter from './TodoCounter';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: ["荷物を受け取る", "歯医者を予約する", "休暇申請をする", "ガソリンを入れる" ],
      remainigCount: 4,
      completedCount: 2
    };
  }

  //Todo追加処理
  addTodo(title) {
    //入力されたTodoをTodoの配列に追加し、stateを更新する
    const updatedTodoData = [...this.state.todoData, title];
    this.setState( {todoData: updatedTodoData} );
    this.setState( {remainigCount: this.state.remainigCount+1 } );
  }

  //Todo完了処理
  completeTodo(title, isCompleted) {
    //Todoの配列から、完了or削除したTodoを削除する
    const updatedTodoData = this.state.todoData;
    const index = updatedTodoData.indexOf(title);
    if(index >= 0){ updatedTodoData.splice(index, 1); }

    //各state更新
    this.setState( {todoData: updatedTodoData} );
    this.setState( {remainigCount: this.state.remainigCount-1 } );
    if(isCompleted) {
      this.setState( {completedCount: this.state.completedCount+1 } );
    }
  }

  render() {
    return(
      <div className="todo-container">
        <TodoCounter
          remainigCount = {this.state.remainigCount}
          completedCount = {this.state.completedCount}
        />
        <TodoList
          todoData = {this.state.todoData}
          completeTodo = {this.completeTodo.bind(this)}
        />
        <TodoForm
          addTodo = {this.addTodo.bind(this)}
        />
      </div>
    );
  }
}

export default TodoContainer;
