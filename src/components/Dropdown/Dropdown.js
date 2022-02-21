import React, { useEffect, useRef, useState } from "react";
import { DropdownStyled } from "./DropdownStyled";

const Dropdown = ({ minWidth, MenuDropComponent, children }) => {
  const [show, setShow] = useState(false);
  const refPanel = useRef(null);
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (refPanel.current && !refPanel.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return (
    <DropdownStyled ref={refPanel} minWidth={minWidth}>
      <div onClick={() => setShow(!show)}>{children}</div>
      <div className={`dropdown__panel ${show ? "show" : ""}`}>
        <MenuDropComponent onClick={() => setShow(false)} />
      </div>
    </DropdownStyled>
  );
};

export default Dropdown;
