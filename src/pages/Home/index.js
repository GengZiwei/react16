import React, {Component} from 'react';
import { Row, Col } from 'antd'

import './index.less'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.updata = this.updata.bind(this);
    this.setDateVlue = this.setDateVlue.bind(this);
  }

  componentWillMount(){
    console.log( process.env)
    console.log('组件将要进行挂载到页面');
  }

  componentDidMount() {
    console.log('组件挂载完成');

  }

  
  shouldComponentUpdate(nextProps, nextState) { // 可用于优化性能
    if(this.state.value === nextState.value) return false;
    return true;
  }

  componentWillUpdate() {
    console.log('通过了更新判断， 重新挂载中');
  }
  
  componentDidUpdate(){
    console.log('重新挂载结束')
  }

  render() { 
    console.log('挂载中');
    
    return (
    <Row className="login" align="middle" justify="center" type="flex">
      <Col span={6} onClick={this.updata.bind(this)}>
       我的主页数值：{this.state.value}
      </Col>
      <Col span={6} onClick={this.setDateVlue.bind(this)}>
       我的主页数值：{this.state.value}
      </Col>
    </Row>);
  }

  updata = () => {
    let {value} = this.state
    this.setState({
      value: value+=1
    }, () => {
      console.log('数据修改完成');
      
    })
  }

  setDateVlue = () => {
    this.setState({
      value: 2
    })
  }
}
 
export default Home;