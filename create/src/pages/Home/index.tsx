import React, {Component} from 'react';
import './index.less'
import {fetchs} from 'api/index.js'
import LazyIng from 'components/Lazy';

import * as Routes from 'route/index';
import { Link, Switch } from 'react-router-dom';


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
      <Link to="/home/one">1页面</Link>
      <Link to="/home/two">1页面</Link>
      <Switch>
        <LazyIng>
          <Routes.One></Routes.One>
          <Routes.Two></Routes.Two>
        </LazyIng>
      </Switch>
      </div> );
  }

}
 
export default Home;