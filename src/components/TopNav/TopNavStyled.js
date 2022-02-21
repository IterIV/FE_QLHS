import styled from "styled-components";
import { styledConfig as config } from "../../configs/StyledVariable";

export const TopNavContainer = styled.nav`
  height: ${config.topNav.height};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${config.spacing.default};
  background-color: ${config.background.white};
  .sidebar__toggle {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;
