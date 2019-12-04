import React from 'react';
import { Input, Button, Form, Icon, Checkbox} from 'antd'


const Index = (props) => {
  const { getFieldDecorator } = props.form
  const data = props.data
  return (
    <Form className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          initialValue: data.userName,
          rules: [{ required: true, message: '请输入你的用户名' }],
        })(
          <Input
            // onBlur={this.typeName.bind(this, 'userName')}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          initialValue: data.password,
          rules: [{ required: true, message: '请输入你的密码' }],
        })(
          <Input
            // onBlur={this.typeName.bind(this, 'password')}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Button
            type="link"
            className="login-form-forgot"
          >
            Forgot password
          </Button>
          <Button
            type="primary"
            onClick={handleSubmit.bind(this, props.form)}
            htmlType="button"
            className="login-form-button">
            Log in
          </Button>
          Or <Button type="link">register now!</Button>
        </Form.Item>
    </Form>
  );
}

/**
   * @description 登录获取form的值
   * @memberof antd 内部机制会进行数据绑定
   */
const handleSubmit =  ({getFieldsValue, validateFields}, even) => { // this.props.match 路由的值
    even.persist()
    validateFields((e) =>{
      if(!e) {
        console.log('登录',even, getFieldsValue());
      }
    })
  }

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Index);

export default WrappedNormalLoginForm;
