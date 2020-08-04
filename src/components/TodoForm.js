import React, { Component } from 'react';

class TodoForm extends Component {
  handleClick(event) {
    event.preventDefault();
    this.props.addTodo(event.target.innerText.value);
  }

  render() {
    return(
      <form className="todo-form" onSubmit={this.handleClick.bind(this)}>
        <input className="todo-input" type="text" name="innerText" placeholder="To Do 内容を入力" />
        <input className="todo-submit-button" type="submit" value="追加" />
      </form>
    );
  }

}

export default TodoForm;
