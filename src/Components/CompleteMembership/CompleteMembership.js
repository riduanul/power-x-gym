import React from "react";
import CommonHeader from "../Home/Common/CommonHeader";
import Footer from "../Home/Footer/Footer";
import { useAuth } from "../../Context/AuthContext";
import "./CompleteMembership.css";

function CompleteMembership() {
  const { currentUser, data } = useAuth();
  console.log(currentUser);

  return (
    <div>
      {/* header */}
      <CommonHeader props={`Welcome Mr. ${currentUser.displayName}!`} />

      {/* progressBar */}
      <div>
        <div className="container mb-5">
          <div className="progress-bar ">
            <div className="">
              <h1 className="circle">1</h1>
              <p>Personal Details</p>
            </div>
            <div className="">
              <h1 className="circle22">2</h1>
              <p>Payment Details</p>
            </div>

            <div className="">
              <h1 className="circle33">3</h1>
              <p>Membership</p>
            </div>
          </div>
        </div>
      </div>
      {/* progressBar */}

      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Congratulations!!! Now your are Member of{" "}
        <span style={{ color: "orange" }}>Power-x-Gym</span>{" "}
      </h1>

      <div
        className="container welcome-member row d-flex align-items-center justify-content-between"
        style={{ paddingBottom: "20px" }}
      >
        <div className="col-md-4 member-photo">
          <img src={currentUser.photoURL} width="200" alt="" />
        </div>

        <div className="col-md-8">
          <h3>
            Mr. {data.inputFirstName} {data.inputSecondName}
          </h3>

          <p>
            {data.inputAddress}, {data.inputAddress2}, {data.inputCity},
            {data.inputState}{" "}
          </p>
          <p>Email: {data.inputEmail}</p>
          <p> Phone: {data.inputMobileNumber} </p>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default CompleteMembership;
