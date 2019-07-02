import React, {memo, useState, useEffect, Fragment} from 'react';

import FormLogin from './FormLogin'
import { Row, Col, Button, Input } from 'antd';

import './index.less'

const MemoForm = memo(FormLogin, (prev, next) => { // true 不更新
  return prev.children[0] === next.children[0]
})



function Login() {
  const [login, setLogin] = useState(0);

  useEffect(() =>{ // 第一个匿名函数用来执行 第二参数为一个数组 根据更新的值来是否执行匿名函数;
    return function setTitle() { // 下次执行的时候先执行返回函数 useEffect解绑副作用
    }
  }, [])

  const InputChangValue = (e) => {
    e.persist()
    console.log('我input变化的值',e.target);
  }

  return (
    <Fragment>
    <Row className="login" align="middle" justify="center" type="flex">
      <Col span={6}>
        <MemoForm>
          {login}
          <Input onChange={InputChangValue} />
          <Button onClick={() => setLogin(login + 1)}>点击添加数据</Button>
        </MemoForm>
      </Col>
    </Row>
    </Fragment>
  );
}
export default Login
