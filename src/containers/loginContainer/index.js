import React, { Component } from "react"
import { connect } from "react-redux"
import { Form, Input, Button, Typography, Alert } from "antd"
import { Redirect } from "react-router-dom"
import { clearError } from "../../actions/errorActions"
import { login } from "../../actions/authActions"

import "./index.css"

const { Link, Title } = Typography

class LoginContainer extends Component {
  componentWillUnmount() {
    this.props.clearError('login');
  }

  onFinish = values => {
    const { login } = this.props
    login({ user: values })
  }

  renderErrors = errors => {
    return Object.entries(errors)
      .map(([key, value]) => (
        <Alert message={`${key} ${value}`} type="error" showIcon="true" closable="true" />
      ))
  }

  render() {
    const { loading, authenticated, errors } = this.props

    if (authenticated) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div className='login-container'>
        <Title level={2}>Login</Title>

        {
          errors && this.renderErrors(errors)
        }


        <Form
          name='login-form'
          layout='vertical'
          onFinish={this.onFinish}
          colon={false}
          hideRequiredMark
          style={{ marginTop: "14px" }}
        >
          <Form.Item
            name='email'
            rules={[
              { type: 'email', message: 'Email is not valid' },
              { required: true, message: 'Email is required' },
            ]}
            hasFeedback
          >
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Password is required' }]}
            hasFeedback
          >
            <Input.Password placeholder='Password' />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              loading={loading}
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <Link to='/'>Home</Link>
      </div >
    );

  }
}

const mapStateToProps = ({ auth, errors }) => {
  return {
    loading: auth.loading,
    authenticated: auth.authenticated,
    errors: errors.login
  }
}

const mapDispatchToProps = {
  clearError,
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
