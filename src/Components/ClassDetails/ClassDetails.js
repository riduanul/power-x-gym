import React from "react";
import "./ClassDetails.css";
import { NavLink, useParams } from "react-router-dom";
import data from "../../Data/Data.js";
import CommonHeader from "../Home/Common/CommonHeader";
import Footer from "../Home/Footer/Footer.js";
import { FaSignInAlt } from "react-icons/fa";

function ClassDetails() {
  const params = useParams();
  const info = data;
  const classes = info.filter((info) => info.title === params.title);
  console.log(classes);
  return (
    <div>
      {/* banner */}

      <div>
        <div>
          <CommonHeader props={params.title} />
        </div>
      </div>

      {/* class-info */}
      <div className="container">
        <div className="class-details row">
          <div className="class-info col-md-8 ">
            {classes.map((value) => (
              <>
                <img src={value.img} alt="class-imgae" className="img-fluid" />
                <h5
                  className="text-muted mt-3"
                  style={{ lineHeight: "40px", textAlign: "justify" }}
                >
                  {value.details}
                </h5>
              </>
            ))}
            <div className="bonus">
              <h5 style={{ lineHeight: "40px" }}>
                <FaSignInAlt style={{ color: "orange" }} /> Having Slimmer
                Shapely Thighs
              </h5>
              <h5 style={{ lineHeight: "40px" }}>
                <FaSignInAlt style={{ color: "orange" }} /> Getting Stroner Body
              </h5>
              <h5 style={{ lineHeight: "40px" }}>
                <FaSignInAlt style={{ color: "orange" }} /> Increased Metabolism
              </h5>
              <h5 style={{ lineHeight: "40px" }}>
                <FaSignInAlt style={{ color: "orange" }} /> Increase Musculer
                Endurance
              </h5>
              <h5 style={{ lineHeight: "40px" }}>
                <FaSignInAlt style={{ color: "orange" }} /> Maximum Result in
                Less Time
              </h5>
              <h5 style={{ lineHeight: "40px" }}>
                <FaSignInAlt style={{ color: "orange" }} /> Firm Hips And Tummy
              </h5>
            </div>
          </div>
          <div className="class-schedule col-md-4">
            <h1>
              CLASS <span style={{ color: "orange" }}>SCHEDULE</span>
            </h1>
            <div className="schedule-btns ">
              <div className=" btns">
                <div>
                  <h5>MONDAY</h5>
                  <small style={{ color: "orange" }}>8:00 AM - 9:00AM</small>
                </div>
                <div>
                  <h5>TUESDAY</h5>
                  <small style={{ color: "orange" }}>9:00 AM - 10:00AM</small>
                </div>
              </div>
              <div className="btns ">
                <div>
                  <h5>WEDNES DAY</h5>
                  <small style={{ color: "orange" }}>8:00 AM - 9:00AM</small>
                </div>
                <div>
                  <h5>FRIDAY</h5>
                  <small style={{ color: "orange" }}>9:00 AM - 10:00AM</small>
                </div>
              </div>
              <div className="btns">
                <div>
                  <h5>WEDNES DAY</h5>
                  <small style={{ color: "orange" }}>8:00 AM - 9:00AM</small>
                </div>
                <div>
                  <h5>FRIDAY</h5>
                  <small style={{ color: "orange" }}>9:00 AM - 10:00AM</small>
                </div>
              </div>
              <div className="btns">
                <div>
                  <h5>WEDNES DAY</h5>
                  <small style={{ color: "orange" }}>8:00 AM - 9:00AM</small>
                </div>
                <div>
                  <h5>FRIDAY</h5>
                  <small style={{ color: "orange" }}>9:00 AM - 10:00AM</small>
                </div>
              </div>
            </div>
            <NavLink to="/membership">
              <div className="joinBtn">
                <button>Join Us</button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      {/* // footer / */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default ClassDetails;
