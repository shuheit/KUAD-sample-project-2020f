import React, { Component } from 'react';
import PropsChild from './PropsChild';

class PropsParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoCount: 50
    };
  }

  render() {
    return(
      <div>
        <PropsChild
          todoCount={this.state.todoCount}
        />
      </div>
    );
  }
}

export default PropsParent;
