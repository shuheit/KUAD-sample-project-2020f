import React, { Component } from 'react';

class PropsExampleFrom extends Component {
  handleClick(event) {
    event.preventDefault();
    this.props.add(event.target.innerText.value);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleClick.bind(this)}>
          <input type="text" name="innerText" />
          <input type="submit" value="追加" />
        </form>
      </div>
    );
  }
}

export default PropsExampleFrom;
