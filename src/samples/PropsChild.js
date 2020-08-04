import React, { Component } from 'react';

class PropsChild extends Component {
  render() {
    return(
      <div>
        Todo: { this.props.todoCount }
      </div>
    );
  }
}

export default PropsChild;
