import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css";

export default function Header() {
  return (
    <div className="banner">
      <Nav></Nav>
      <div className="row ">
        <div className="col-md-6 text-color">
          <h1>
            THE BIGEST FITNESS <br /> STUDIO IN TOWN
          </h1>{" "}
          <br></br>
          <p>
            lorem impsum has been the industry's standard dummy text ever since
            the 1500's <br /> when an unknown printer took a galley of type and
            srambled it to make a type <br />
            spedcimen book. it has survived not onleting. remeainngy five
            cdenturies, but also the leap
            <br /> into electronic types
          </p>{" "}
          <br />
          <button className="btn btn-warning">Join Us</button>
        </div>
        <div className="col-md-6 text-white my-auto mx-auto">
          <p>video comming soon</p>
          <video src="">video coming soon</video>
        </div>
      </div>
    </div>
  );
}
