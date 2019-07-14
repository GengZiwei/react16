import React, { Component, Fragment } from 'react';

import { Button } from 'antd';


interface tsProps {

}

interface tsStatu {
  listDate: any
}

class User extends Component<tsProps, tsStatu> {
  constructor(props:any) {
    super(props);
    this.state = { 
      listDate: []
     }
  }


  setUserDate = () => {
    let { listDate } = this.state;
    this.setState({
      listDate: listDate.push({})
    }, () => {
      console.log('执行更新数据结束');
    })
  }

  componentWillMount() {
    console.log('初始化挂载', process.env);
  }

  shouldComponentUpdate() {
    console.log('是否进行开始更新数据');
    return true
  }

  componentWillUpdate() {
    console.log('更新数据开始');
    
  }

  render() {
    console.log('渲染中');
    return ( 
      <Fragment>
        <Button onClick={() => this.setUserDate()}>
          我的one子页面
        </Button>
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