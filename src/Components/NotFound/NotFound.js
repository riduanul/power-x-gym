import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    className="container"
    style={{ textAlign: "center", marginTop: "100px" }}
  >
    <h1 style={{ color: "red" }}> 404 - Sorry Page Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
