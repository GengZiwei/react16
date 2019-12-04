import React,{Component, Fragment} from 'react';
import FormLogin from './FormLogin'
import './Index.less'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      form: {
        userName: 'admin',
        password: '2'
      }
    }
  }

  // 在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容
  static getDerivedStateFromProps(props, state) {
    return null
  }

  render() {
    return ( 
      <Fragment>
        <FormLogin data={this.state.form}/>
      </Fragment>
     );
  }

  componentDidMount() { // 组件挂载之后执行 可以setState 但是用户不会看到两次渲染
    
  }
}

export default Login;

// 当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
/* 
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
*/


// 当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
/* 
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
*/

// 当组件从 DOM 中移除时会调用如下方法：
/*
componentWillUnmount()
*/


// 当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：
/* 
static getDerivedStateFromError()
componentDidCatch()
 */
