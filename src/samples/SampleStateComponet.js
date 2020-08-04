import React, { Component } from 'react';

class SampleStateComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoCount: 0
    };
  }

  updateTodoCount() {
    this.setState({
      todoCount: this.state.todoCount + 1
    });
  }

  render() {
    return(
      <div>
        <p>Todo数：{ this.state.todoCount }</p>
        <input
          type="submit"
          value="Todo追加"
          onClick={ this.updateTodoCount.bind(this) }
        />
      </div>
    );
  }
}

export default SampleStateComponet;
