import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useAuth } from "../../../Context/AuthContext";

export default function Nav() {
  const { logOut, currentUser } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="hpme">
          <h3 style={{ color: "white", fontWeight: "900" }}>
            POWER <span style={{ color: "orange" }}>X</span>
          </h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nab ms-auto">
            <li>
              <NavLink to="/" className="nav_link">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/classes" className="nav_link">
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className="nav_link">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/notfound" id="services" className="nav_link">
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="nav_link">
                Contact Us
              </NavLink>
            </li>

            {currentUser ? (
              <li onClick={logOut}>
                <NavLink to="/" className="nav_link">
                  Logout
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/login" className="nav_link">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
