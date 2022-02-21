import React, { useEffect, useState } from "react";
import { SideBarContainer } from "./SideBarStyled";
import { listMenu } from "../../data/listSidebar";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ show, changeShow }) => {
  const [activeSrc, setActiveSrc] = useState("");
  const location = useLocation();
  useEffect(() => {
    const curPath = location.pathname;
    setActiveSrc(curPath);
  }, [location]);

  return (
    <SideBarContainer className={`${show ? "show" : ""}`}>
      <div className="sidebar__logo">
        <img src="./logo.png" alt="GerInte Manager Project" />
        <h1>
          <span>Quản lý</span> hồ sơ
        </h1>
      </div>
      <div className="sidebar__menu">
        {listMenu.map((menu, index) => (
          <div className="sidebar__menu__item" key={`menu-${index}`}>
            <div className="sidebar__menu__header">{menu.title}</div>
            {menu.submenu.map((item) => (
              <Link
                to={item.src}
                className={`sidebar__menu__submenu ${
                  activeSrc === item.src ? "active" : ""
                }`}
                key={item.id}
                onClick={() => changeShow()}
              >
                <div className="sidebar__menu__submenu__icon">{item.icon}</div>
                <div className="sidebar__menu__submenu__txt">{item.title}</div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
