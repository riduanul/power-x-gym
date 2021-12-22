import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h3 style={{ color: "white", fontWeight: "900" }}>
            POWER <span style={{ color: "yellow" }}>X</span>
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
        <div className="collapse navbar-collapse text-white  " id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
