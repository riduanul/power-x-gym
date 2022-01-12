import React from "react";
import "./Class.css";
import { NavLink } from "react-router-dom";

export default function Class({ item }) {
  const { img, title, details } = item;

  return (
    <div>
      <div>
        <img src={img} alt="" width="350px" height="350px" />

        {/* <div>{details}</div> */}
      </div>
      <NavLink
        to={{
          pathname: `/classDetails/${title}`,
          state: { img: img, details: details },
        }}
      >
        <div className="class-title">
          <h3>{title} </h3>
        </div>
      </NavLink>
    </div>
  );
}
