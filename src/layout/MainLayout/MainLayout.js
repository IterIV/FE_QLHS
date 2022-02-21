import React, { useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import TopNav from "../../components/TopNav/TopNav";
import { MainContainer } from "./MainLayoutStyled";

const MainLayout = () => {
  // TODO State
  const [show, setShow] = useState(false);

  // TODO Handle Event
  const changeShow = () => {
    setShow(!show);
  };

  // TODO UseEffect
  useLayoutEffect(() => {
    const resizeWidthWindow = () => {
      if (window.innerWidth >= 768) {
        setShow(false);
      }
    };
    window.addEventListener("resize", resizeWidthWindow);
    return () => {
      window.removeEventListener("resize", resizeWidthWindow);
    };
  }, []);

  // TODO render
  return (
    <>
      <SideBar show={show} changeShow={changeShow} />
      <MainContainer className={`${show ? "show" : ""}`}>
        <div className="main__bgoverlay" onClick={() => changeShow()} />
        <TopNav changeShow={changeShow} />
        <div className="main__content">
          <Outlet />
        </div>
      </MainContainer>
    </>
  );
};

export default MainLayout;
