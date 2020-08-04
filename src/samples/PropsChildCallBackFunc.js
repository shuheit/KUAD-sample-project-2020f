import React, { Component } from 'react';

class PropsChildCallBackFunc extends Component {
  render() {
    return(
      <div>
        Todo: { this.props.todoCount }<br />
        <input
          type="submit"
          value="Todo追加"
          onClick={this.props.incrementTodoCount}
        />
      </div>
    );
  }
}

export default PropsChildCallBackFunc;
