import React, { Component } from 'react';
import PropsExampleList from './PropsExampleList';
import PropsExampleForm from './PropsExampleForm';

class PropsExampleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: ["りんご", "みかん", "いちご", "ぶどう"]
    };
  }

  add(name) {
    this.setState({
        listData: [...this.state.listData, name]
    });
  }

  render() {
    return(
      <div>
        <PropsExampleList
          listData={this.state.listData}
        />
        <PropsExampleForm
          add={this.add.bind(this)}
        />
      </div>
    );
  }
}

export default PropsExampleContainer;
