import styled from "styled-components";
import { styledConfig } from "../../configs/StyledVariable";

export const DropdownStyled = styled.div`
  position: relative;
  .dropdown__panel {
    position: absolute;
    z-index: 10;
    top: 140%;
    right: 0;
    opacity: 0;
    visibility: hidden;
    background-color: white;
    min-width: ${(props) => props.minWidth}px;
    box-shadow: ${styledConfig.boxShadow};
    padding: 10px;
    border-radius: 8px;
    transition: 0.3s ease-in;
    &::before {
      content: "";
      position: absolute;
      top: -5px;
      right: 10%;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      background-color: white;
    }
    .dropdown__menu {
      margin-bottom: 0;
      &__item {
        border-radius: 5px;
        transition: 0.3s ease-in;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 15px;
        &:hover {
          background-color: ${styledConfig.background.primary};
          color: ${styledConfig.color.primary};
        }
        cursor: pointer;
        p {
          font-size: 14px;
          margin-left: 10px;
          margin-bottom: 0;
        }
      }
    }

    &.show {
      top: 120%;
      opacity: 1;
      visibility: visible;
    }
  }
`;
