import React, { Component } from 'react';

class PropsExampleList extends Component {
  render() {
    const listHTML = [];
    for(var i = 0; i < this.props.listData.length; i++) {
      listHTML.push(
        <div>
          <p>{this.props.listData[i]}</p>
        </div>
      );
    }

    return(
      <div>
        {listHTML}
      </div>
    );
  }
}

export default PropsExampleList;
