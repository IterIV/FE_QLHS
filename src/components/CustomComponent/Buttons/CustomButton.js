import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const ButtonStyled = styled(Button)``;
const CustomButton = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default CustomButton;
