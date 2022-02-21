import React from "react";
import { BreadcumbWrap } from "./BreadcumbStyled";
import { Link } from "react-router-dom";
const Breadcumb = ({ header, listPath }) => {
  return (
    <BreadcumbWrap>
      <h2 className="breadcumb__header">{header}</h2>
      <div className="breadcumb__list">
        {listPath.map((item, index) => (
          <span className="breadcumb__item" key={`breadcumb_${index}`}>
            {index === 0 ? undefined : (
              <span className="breadcumb__separator">/</span>
            )}
            <span
              key={`breadcumb-${index}`}
              className={`${item.path !== "" ? "breadcumb__link" : ""}`}
            >
              {item.path !== "" ? (
                <Link to={item.path}>{item.name}</Link>
              ) : (
                item.name
              )}
            </span>
          </span>
        ))}
      </div>
    </BreadcumbWrap>
  );
};

export default Breadcumb;
