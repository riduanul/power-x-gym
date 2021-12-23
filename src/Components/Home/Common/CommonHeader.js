import React from "react";
import "./CommonHeader.css";
import Nav from "../Nav/Nav";

export default function CommonHeader({ props }) {
  return (
    <div className="common-banner ">
      <Nav />
      <div className="common-banner-text">
        <h1 style={{ textAlign: "center", color: "white", fontWeight: "800" }}>
          {props}
        </h1>
      </div>
    </div>
  );
}
