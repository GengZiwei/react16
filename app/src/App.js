import React, { Component } from 'react';
import { Button } from 'antd'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentWillUpdate(){
  }

  render() { 
    return ( <div>
      <Button>点击</Button>
    </div> );
  }
}
 
export default App;