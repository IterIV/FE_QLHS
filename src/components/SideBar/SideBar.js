import React, { useEffect, useState } from "react";
import { SideBarContainer } from "./SideBarStyled";
import listMenu from "../../data/listSidebar.json";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = ({ show, changeShow }) => {
  const [activeSrc, setActiveSrc] = useState("");
  const location = useLocation();
  const { userLogin } = useSelector((rootReducer) => rootReducer.UserReducer);
  useEffect(() => {
    const curPath = location.pathname;
    setActiveSrc(curPath);
  }, [location]);

  const renderSideMenu = () => {
    return listMenu.map((menu, index) => {
      if (userLogin?.role !== "admin") {
        if (menu.title === "Quản lý admin") return null;
        return (
          <div className="sidebar__menu__item" key={`menu-${index}`}>
            <div className="sidebar__menu__header">{menu.title}</div>
            {menu.submenu.map((item) => {
              return (
                <Link
                  to={item.src}
                  className={`sidebar__menu__submenu ${
                    activeSrc === item.src ? "active" : ""
                  }`}
                  key={item.id}
                  onClick={() => changeShow()}
                >
                  <div className="sidebar__menu__submenu__icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="sidebar__menu__submenu__txt">
                    {item.title}
                  </div>
                </Link>
              );
            })}
          </div>
        );
      }
      return (
        <div className="sidebar__menu__item" key={`menu-${index}`}>
          <div className="sidebar__menu__header">{menu.title}</div>
          {menu.submenu.map((item) => {
            return (
              <Link
                to={item.src}
                className={`sidebar__menu__submenu ${
                  activeSrc === item.src ? "active" : ""
                }`}
                key={item.id}
                onClick={() => changeShow()}
              >
                <div className="sidebar__menu__submenu__icon">
                  <i className={item.icon}></i>
                </div>
                <div className="sidebar__menu__submenu__txt">{item.title}</div>
              </Link>
            );
          })}
        </div>
      );
    });
  };
  return (
    <SideBarContainer className={`${show ? "show" : ""}`}>
      <div className="sidebar__logo">
        <img src="./logo.png" alt="GerInte Manager Project" />
        <h1>
          <span>Quản lý</span> hồ sơ
        </h1>
      </div>
      <div className="sidebar__menu">{renderSideMenu()}</div>
    </SideBarContainer>
  );
};

export default SideBar;
