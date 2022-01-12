import React from "react";
import "./ClassDetails.css";
import { useParams } from "react-router-dom";
import data from "../../Data/Data.js";
import CommonHeader from "../Home/Common/CommonHeader";
import Footer from "../Home/Footer/Footer.js";

function ClassDetails() {
  const { title } = useParams;
  const info = data;
  const classes = info.filter((info) => info.title === title);
  console.log(title, info);
  return (
    <div>
      {/* banner */}

      <div>
        <div>
          <CommonHeader props={title} />
        </div>
      </div>

      {/* class-info */}

      <div className="class-info">
        {classes.map((classess) => (
          <>
            <img src={classes.img} alt="" />
            <p>{classes.details}</p>
          </>
        ))}
        <p>{info.title}</p>
      </div>

      {/* // footer / */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default ClassDetails;
