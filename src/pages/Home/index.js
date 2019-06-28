import React, {Component} from 'react';
import { Row, Col } from 'antd'

import './index.less'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
    <Row className="login" align="middle" justify="center" type="flex">
      <Col span={6}>
      </Col>
    </Row>);
  }
}
 
export default Home;