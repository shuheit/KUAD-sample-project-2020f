import React, { Component } from 'react';
import deletion from '../assets/delete.png';
import completed from '../assets/completed.png';

class Todo extends Component {
  //削除ボタンが押された時の処理
  onDeleteButtonClick(){
    this.props.completeTodo(this.props.title, false);
  }

  //完了ボタンが押された時の処理
  onCompleteButtonClick(){
    this.props.completeTodo(this.props.title, true);
  }

  render() {
    return(
      <div className="todo">
        <span className="todo-title">{this.props.title}</span>
        <img
          className="todo-delete"
          src= {deletion}
          alt="deleteButton"
          onClick={this.onDeleteButtonClick.bind(this)}
        />
        <img
          className="todo-complete"
          src= {completed}
          alt="completeButton"
          onClick={this.onCompleteButtonClick.bind(this)}
        />
      </div>
    );
  }
}

export default Todo;
