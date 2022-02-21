import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div``;
const Box = ({ header }) => {
  return (
    <BoxContainer>
      <p className="box__header">{header}</p>
    </BoxContainer>
  );
};

export default Box;
