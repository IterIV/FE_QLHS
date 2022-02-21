import React from "react";
import CustomButton from "../CustomComponent/Buttons/CustomButton";
import ImageButton from "../CustomComponent/Buttons/ImageButton";
import Dropdown from "../Dropdown/Dropdown";
import { TopNavContainer } from "./TopNavStyled";

const TopNav = ({ changeShow }) => {
  // TODO handle Event

  // TODO render
  const MenuDropdown = ({ onClick }) => (
    <ul className="dropdown__menu" onClick={onClick}>
      <li
        className="dropdown__menu__item"
        onClick={() => console.log("Log out")}
      >
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        <p>Đăng xuất</p>
      </li>
    </ul>
  );

  return (
    <TopNavContainer>
      <div className="topnav__left">
        <CustomButton
          type="text"
          icon={<i className="fa-solid fa-bars"></i>}
          className="sidebar__toggle"
          onClick={changeShow}
        ></CustomButton>
      </div>
      <div className="topnav__right">
        <Dropdown MenuDropComponent={MenuDropdown} minWidth={150}>
          <ImageButton
            size="large"
            type="text"
            shape="round"
            icon={
              <img
                src="/assets/img/avt_1.jpg"
                alt="Minh duc"
                className="btn__logo__img"
              />
            }
          >
            Minh Duc
          </ImageButton>
        </Dropdown>
      </div>
    </TopNavContainer>
  );
};

export default TopNav;
