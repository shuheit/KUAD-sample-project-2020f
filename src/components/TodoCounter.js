import React, { Component } from 'react';
import remaining from '../assets/remaining.png';
import completed from '../assets/completed.png';

class TodoCounter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="todo-counter">
        <div className="remaining">
          <img className="remaining-img" src= {remaining} alt="remaining" />
          <span>{ this.props.remainigCount }</span>
        </div>
        <div className="completed">
          <span>{ this.props.completedCount }</span>
          <img className="completed-img" src= {completed} alt="completed" />
        </div>
      </div>
    );
  }
}

export default TodoCounter;
