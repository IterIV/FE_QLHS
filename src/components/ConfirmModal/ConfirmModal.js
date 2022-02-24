import React from "react";
import styled from "styled-components";
import { styledConfig } from "../../configs/StyledVariable";
import { Button } from "antd";

const ConfirmModal = ({
  message = "",
  textCancle = "",
  textOK = "",
  handleOK,
  handleShow,
  show,
}) => {
  return (
    <Container className={`${show ? "show" : ""}`}>
      <div className="confirm__content">
        <div className="confirm__close">
          <Button
            type="text"
            icon={<i className="fa-solid fa-xmark"></i>}
            onClick={() => handleShow(false)}
          ></Button>
        </div>
        <p className="confirm__message">
          {message === "" ? "Thông báo" : message}
        </p>
        <div style={{ textAlign: "right" }}>
          <Button className="confirm__button" onClick={() => handleShow(false)}>
            {textCancle === "" ? "Hủy bỏ" : textCancle}
          </Button>
          <Button className="confirm__button" type="primary" onClick={handleOK}>
            {textOK === "" ? "Đồng ý" : textOK}
          </Button>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in;
  .confirm__content {
    width: 300px;
    background-color: white;
    border-radius: 5px;
    box-shadow: ${styledConfig.boxShadow};
    padding: 20px;
    position: relative;
    .confirm__close {
      margin-bottom: 10px;
      text-align: right;
    }
    .confirm__message {
      margin-bottom: 20px;
    }
    .confirm__button {
      margin: 0 10px;
    }
  }
  &.show {
    display: flex;
    opacity: 1;
    visibility: visible;
  }
`;
export default ConfirmModal;
