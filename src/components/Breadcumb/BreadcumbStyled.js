import styled from "styled-components";
import { styledConfig } from "../../configs/StyledVariable";

export const BreadcumbWrap = styled.div`
  margin-bottom: 20px;
  .breadcumb__header {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .breadcumb__list {
    .breadcumb__separator {
      padding: 0 10px;
    }
    .breadcumb__item {
      opacity: 0.7;
      font-size: 14px;
      .breadcumb__link {
        a {
          color: inherit;
        }
        &:hover {
          color: ${styledConfig.color.primary};
          opacity: 1;
        }
      }
    }
    span:last-of-type {
      opacity: 1;
    }
  }
`;
