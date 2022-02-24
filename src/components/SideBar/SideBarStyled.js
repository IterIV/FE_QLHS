import styled from "styled-components";
import { styledConfig as config } from "../../configs/StyledVariable";

export const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: ${config.sideBar.width};
  height: 100vh;
  padding: ${config.spacing.default};
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: ${config.boxShadow};
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${config.color.black};
  background-color: ${config.background.white};
  transition: 0.5s ease-in;

  @media screen and (max-width: 768px) {
    transform: translateX(-100%);
    &.show {
      transform: translateX(0);
    }
  }

  .sidebar {
    &__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      img {
        height: ${config.sideBar.logo.height};
        width: ${config.sideBar.logo.width};
      }
      h1 {
        font-size: 18px;
        margin-left: 20px;
        color: ${config.color.primary};
      }
    }
    &__menu {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      &__item {
        width: 100%;
      }
      &__header {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        margin: 10px 0;
      }
      &__submenu {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 10px;
        margin: 5px 0;
        padding-left: 15px;
        opacity: 0.6;
        transition: 0.3s ease-in-out;
        border-radius: 5px;
        color: inherit;
        &__icon {
          width: 35px;
        }
        &:hover,
        &.active {
          background-color: ${config.background.primary};
          color: ${config.color.primary};
          font-weight: 500;
          opacity: 1;
        }
      }
    }
  }
`;
