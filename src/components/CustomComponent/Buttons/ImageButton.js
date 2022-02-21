import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { styledConfig } from "../../../configs/StyledVariable";

const ButtonStyled = styled(Button)`
  &.ant-btn {
    padding: 0;
    display: flex;
    align-items: center;
    padding-right: 10px;
    border: 1px solid #eee;
    span:last-of-type {
      font-size: 12px;
      font-weight: 500;
    }
    .btn__logo__img {
      height: 40px;
      width: 40px;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      background-color: white;
      margin-right: 8px;
    }
    &.ant-btn-lg {
      span:last-of-type {
        font-size: 14px;
      }
      .btn__logo__img {
        height: 46px;
        width: 46px;
        object-fit: cover;
        object-position: center;
        border: 1px solid ${styledConfig.background.second};
        transform: translate(-10%, 0%);
      }
    }
  }
  &:hover {
    background-color: ${styledConfig.background.second};
  }
`;
const ImageButton = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default ImageButton;
