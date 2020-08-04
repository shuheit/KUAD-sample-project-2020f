import React, { Component } from 'react';
import PropsChildCallBackFunc from './PropsChildCallBackFunc';

class PropsParentCallBackFunc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoCount: 0
    };
  }

  incrementTodoCount(){
    this.setState({
      todoCount: this.state.todoCount + 1
    });
  }

  render() {
    return(
      <div>
        <PropsChildCallBackFunc
          todoCount={this.state.todoCount}
          incrementTodoCount={this.incrementTodoCount.bind(this)}
        />
      </div>
    );
  }
}

export default PropsParentCallBackFunc;
