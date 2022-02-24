import styled from "styled-components";
import { styledConfig } from "../../configs/StyledVariable";
import { Input } from "antd";

export const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: ${styledConfig.boxShadow};
  padding: 20px;
  margin-bottom: 20px;
  .form__header {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TableContainer = styled.div`
  .table__header {
    background-color: #f4f6f8;
    padding: 20px;
    border-radius: 10px;
    font-weight: 700;
    color: rgb(99, 115, 129);
  }
  .table__item {
    padding: 20px;
    transition: 0.3s ease-in;
    .table__item__col:first-of-type {
      font-weight: 700;
    }
    :hover {
      background-color: rgba(145, 158, 171, 0.08);
    }
  }
  .table__footer {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #ddd;
    &__right,
    &__left {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    &__select {
      margin-left: 20px;
      font-size: 16px;
      .ant-select-selector {
        border: none;
      }
    }
    &__numpage {
      margin: 0 10px;
    }
    @media screen and (max-width: 425px) {
      flex-wrap: wrap;
      &__right,
      &__left {
        width: 100%;
        flex: 0 0 100%;
      }
      &__left {
        margin-bottom: 10px;
      }
    }
  }
`;

export const InputSearch = styled(Input)`
  margin: 15px 0;
  padding: 15px;
  border-radius: 10px;
  .ant-input-prefix {
    color: rgb(145, 158, 171);
    margin-right: 10px;
  }
  &.ant-input-affix-wrapper:hover {
    border-color: #d9d9d9;
  }
  &.ant-input-affix-wrapper:focus,
  &.ant-input-affix-wrapper-focused {
    box-shadow: 0 0 0 2px rgba(255, 165, 165, 0.2);
    border-color: ${styledConfig.color.primary};
  }
  ::placeholder {
    color: #9ba7b3;
  }
`;
