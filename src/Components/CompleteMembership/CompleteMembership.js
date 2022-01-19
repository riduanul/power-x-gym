import React from "react";
import CommonHeader from "../Home/Common/CommonHeader";
import Footer from "../Home/Footer/Footer";
import { useAuth } from "../../Context/AuthContext";
import "./CompleteMembership.css";

function CompleteMembership() {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <div>
      {/* header */}
      <CommonHeader props={`Welcome Mr. ${currentUser.displayName}!`} />
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Congratulations!!! Now your are Member of{" "}
        <span style={{ color: "orange" }}>Power-x-Gym</span>{" "}
      </h1>
      <p className=" text-center" style={{ color: "red" }}>
        Plese Print this id card and come to gym along with this member ID Card
      </p>
      <div
        className="container welcome-member row d-flex align-items-center justify-content-between"
        style={{ paddingBottom: "20px" }}
      >
        <h4 style={{ textAlign: "center", marginBottom: "0px" }}>Member ID</h4>
        <div className="col-md-4 member-photo">
          <img src={currentUser.photoURL} width="200" alt="" />
        </div>

        <div className="col-md-8">
          <h3>Mr. {currentUser.displayName}</h3>
          <h5>Member Of Power-X-Gym</h5>
          {/* <p>`Joining Date: {new Date()}` </p> */}
          <p>Champak, Nagar, Rangamati, Rangamati </p>
          <p>Mobile: 01794212131 </p>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default CompleteMembership;
