import React from 'react';
import Header from './Header';
import Main from './Main';

//Samples
import SampleStateComponet from '../samples/SampleStateComponet'
import PropsParent from '../samples/PropsParent'
import PropsParentCallBackFunc from '../samples/PropsParentCallBackFunc'
import PropsExampleContainer from '../samples/PropsExampleContainer'

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
