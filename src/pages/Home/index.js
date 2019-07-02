import React, {Component} from 'react';

import MapGD from '@/components/map'

import './index.less'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( <div style={{height: '500px'}}>
      <MapGD ></MapGD>
      </div> );
  }

}
 
export default Home;