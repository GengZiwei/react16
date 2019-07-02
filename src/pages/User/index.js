import React, { Component, Fragment } from 'react';

import { Button } from 'antd'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      listDate: []
     }
  }

  setUserDate = () => {
    let { listDate } = this.state;
    console.log('开始进行更新数据')
    this.setState({
      numDate: listDate.push({})
    }, () => {
      console.log('执行更新数据结束');
    })
  }

  componentWillMount() {
    console.log('初始化挂载', process.env);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('是否进行开始更新数据');
    return true
  }

  componentWillUpdate() {
    console.log('更新数据开始');
    
  }

  render() {
    console.log('渲染中');
    let listDate = this.state.listDate;
    return ( 
      <Fragment>
        
        <Button onClick={() => this.setUserDate()}>
          开始
        </Button>
        <ul>
          {
            listDate.map((res, req) => {
              return (<li key={req}>{req}</li>)
            })
          }
        </ul>
      </Fragment>
     );
  }

  componentDidMount() {
    console.log('挂载完成');
  }

  componentDidUpdate() {
    console.log('数据更新结束');
    
  }

}
 
export default User;