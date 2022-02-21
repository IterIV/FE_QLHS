import styled from "styled-components";
import { styledConfig as config } from "../../configs/StyledVariable";

export const MainContainer = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
  padding-left: ${config.sideBar.width};
  position: relative;
  z-index: 1;
  transition: 0.5s ease-in;
  @media screen and (max-width: 768px) {
    padding-left: 0;
    width: 100vw;
    .main__bgoverlay {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: none;
      z-index: 1;
    }
    &.show {
      .main__bgoverlay {
        display: block;
      }
    }
  }

  .main__content {
    min-height: calc(100vh - ${config.topNav.height});
    padding: ${config.spacing.default};
    background-color: ${config.background.darkWhite};
  }
`;
