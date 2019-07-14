import React, {Component} from 'react';
import './index.less'
import {fetchs} from 'api/index.js'


class Home extends Component {
  constructor(props:any) {
    super(props);
    this.state = {  }
  }

  componentDidMount(){
    fetchs().then(res => {
      console.log(res)
    })
  }

  render() { 
    return ( <div>
      <div className="div1"></div>
      </div> );
  }

}
 
export default Home;