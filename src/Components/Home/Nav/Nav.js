import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/">
                <a
                  className="nav-link active  text-white"
                  aria-current="page"
                  href="home"
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="service">
                Service
              </a>
            </li>
            <li className="nav-item">
              <Link to="classes">
                <a className="nav-link  text-white" href="service">
                  Our Classes
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  active text-white" href="about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
