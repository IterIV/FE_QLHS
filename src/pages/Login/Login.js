import React, { useEffect } from "react";
import styled from "styled-components";
import { styledConfig } from "../../configs/StyledVariable";
import { Form, Input, Alert, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/UserAction";
import { Navigate } from "react-router-dom";

const LoginContainer = styled.div`
  background-image: linear-gradient(
    0deg,
    rgb(255, 222, 233) 0%,
    rgb(181, 255, 252) 100%
  );

  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .login__panel {
    /* height: 200px; */
    width: 350px;
    background-color: white;
    border-radius: 10px;
    box-shadow: ${styledConfig.boxShadow};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .ant-form-item {
      margin-bottom: 15px;
      .ant-form-item-explain {
        margin-top: 5px;
      }
    }
    &__logo {
      height: 50px;
      width: 50px;
      margin-bottom: 10px;
    }
    &__header {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 700;
      color: ${styledConfig.color.black};
      color: #595959;
    }
    &__footer {
      font-size: 12px;
      opacity: 0.6;
    }
  }
  @media screen and (max-width: 425px) {
    .login__panel {
      width: 300px;
      &__header {
        font-size: 18px;
      }
    }
  }
`;
const InputStyled = styled(Input)`
  border-radius: 10px;
  padding: 10px;
  &.ant-input-affix-wrapper:hover {
    border-color: ${styledConfig.color.primary};
  }
  &.ant-input-affix-wrapper:focus,
  &.ant-input-affix-wrapper-focused {
    box-shadow: 0 0 0 2px rgba(255, 165, 165, 0.2);
    border-color: ${styledConfig.color.primary};
  }
  .ant-input-prefix {
    margin-right: 10px;
    color: #595959;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
    padding: 5px;
  }
`;
const LoginButton = styled(Button)`
  &.ant-btn-primary {
    background-color: ${styledConfig.color.primary};
    opacity: 1;
    border: none;
    margin-top: 10px;
    .login__button__icon {
      margin-right: 10px;
    }
    :hover,
    :focus {
      background-color: #dd4a48;
    }
    :active {
      background-color: ${styledConfig.color.primary};
      opacity: 1;
    }
    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
  }
`;

const Login = () => {
  const { userLogin, loading, message } = useSelector(
    (rootReducer) => rootReducer.UserReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  const onFinish = (values = null) => {
    if (values) {
      dispatch(loginAction(values));
    }
  };
  const onFinishFailed = (errorInfo = null) => {
    console.log("Failed:", errorInfo);
  };
  if (userLogin) {
    return <Navigate to="/" replace />;
  }
  return (
    <LoginContainer>
      <div className="login__panel">
        <img
          src="./logo.png"
          alt="Quan ly ho so"
          className="login__panel__logo"
        />
        <h1 className="login__panel__header">Đăng nhập</h1>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Tài khoản không để trống!" }]}
          >
            <InputStyled
              placeholder="Tài khoản"
              size="large"
              allowClear
              prefix={<i className="fa-solid fa-user"></i>}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Mật khẩu không để trống!" }]}
          >
            <InputStyled
              type="password"
              placeholder="Mật khẩu"
              size="large"
              prefix={<i className="fa-solid fa-lock"></i>}
            />
          </Form.Item>
          {message && (
            <Form.Item>
              <Alert message={message} type="error" />
            </Form.Item>
          )}
          <Form.Item style={{ textAlign: "center" }}>
            <LoginButton
              type="primary"
              shape="round"
              size="large"
              htmlType="submit"
              loading={loading}
              icon={
                <i className="fa-solid fa-right-to-bracket login__button__icon"></i>
              }
            >
              Đăng nhập
            </LoginButton>
          </Form.Item>
        </Form>
        <p className="login__panel__footer">
          Development by germany.dev.91@gmail.com
        </p>
      </div>
    </LoginContainer>
  );
};

export default Login;
