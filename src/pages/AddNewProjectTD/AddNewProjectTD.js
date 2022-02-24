import React from "react";
import styled from "styled-components";
import Breadcumb from "../../components/Breadcumb/Breadcumb";
import { styledConfig } from "../../configs/StyledVariable";
import { Button, Form, Select } from "antd";

const AddNewProjectTD = () => {
  const listBreadcumb = [
    {
      name: "Trang chủ",
      path: "/",
    },
    {
      name: "Hồ sơ thẩm duyệt",
      path: "",
    },
    {
      name: "Thêm hồ sơ mới",
      path: "",
    },
  ];
  const onFinish = (values = null) => {
    if (values) {
      console.log(values);
    }
  };
  const onFinishFailed = (errorInfo = null) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Breadcumb listPath={listBreadcumb} header="Thêm hồ sơ mới" />
      <Container>
        <h4 className="form__header">Thông tin công trình</h4>
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Loại công trình"
            name="typeBuilding"
            initialValue="new"
            rules={[{ required: true, message: "Tài khoản không để trống!" }]}
          >
            <Select>
              <Select.Option value="new">Công trình mới</Select.Option>
              <Select.Option value="exist">Công trình cũ</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Tên công trình"
            name="typeBuilding"
            initialValue="new"
            rules={[{ required: true, message: "Tài khoản không để trống!" }]}
          >
            <Select>
              <Select.Option value="new">Công trình mới</Select.Option>
              <Select.Option value="exist">Công trình cũ</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              shape="round"
              size="large"
              htmlType="submit"
              icon={
                <i className="fa-solid fa-right-to-bracket login__button__icon"></i>
              }
            >
              Tiếp tục
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </div>
  );
};
const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: ${styledConfig.boxShadow};
  padding: 20px;
  .form__header {
    margin-bottom: 10px;
  }
`;
export default AddNewProjectTD;
