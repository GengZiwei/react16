import React,{ useState, useEffect } from 'react';
import PersonalContext from './Context'
import FormLogin from './FormLogin'
import './Index.less'

const fromData = {
  userName: 'admin',
  password: '123456'
}

const Login = function (prpos) {
  const [count, setCount] = useState(0) // useState 唯一的参数就是初始 state。

  useEffect(() => { // 页面更新跟挂载时候进行执行 可以使用多次, 指定第二参数进行更新  传入[]  只执行一次
    function test() {
      console.log('我使用了值', count);
    }
    test()
    return () => {
      console.log('我在每次使用值更新后进行执行')
    };
  }, [count])

  return ( 
  <PersonalContext.Provider value={fromData}>
      <FormLogin />

      <p>state的存储值 {count}</p>
      <button onClick={() => setCount(count + 1)}>点击我哈哈哈</button>
    </PersonalContext.Provider>
   );
}

export default Login;