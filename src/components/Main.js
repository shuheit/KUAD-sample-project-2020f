import React, { Component } from 'react';
import TodoContainer from './TodoContainer';

class Main extends Component {  
  render() {
    return(
      <div className="main">
        <TodoContainer />
      </div>
    );
  }
}

export default Main;
