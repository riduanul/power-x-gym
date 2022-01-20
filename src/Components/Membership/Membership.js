import React, { useState } from "react";
import "./Membership.css";
import CommonHeader from "../Home/Common/CommonHeader";
import Footer from "../Home/Footer/Footer";
import { useAuth } from "../../Context/AuthContext";

import { useNavigate } from "react-router-dom";

function Membership() {
  const { data, setData } = useAuth();
  const [formData, updateFormData] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(formData);
    console.log(data);
    if (!error) {
      navigate("/payment");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {/* banner */}

      <div>
        <CommonHeader props={"YOUR GYM MEMBERSHIP"} />
      </div>

      {/* Membership form */}
      <div className="container">
        <div className="progress-bar">
          <div className="">
            <h1 className="circle">1</h1>
            <p>Personal Details</p>
          </div>
          <div className="">
            <h1 className="circle2">2</h1>
            <p>Payment Details</p>
          </div>

          <div className="">
            <h1 className="circle3">3</h1>
            <p>Membership</p>
          </div>
        </div>
      </div>

      <div className="container ">
        <form onSubmit={handleSubmit} className="row g-3 needs-validation">
          <div className="col-md-6">
            <label for="inputFirstName" className="form-label">
              First Name
            </label>
            <input
              type="firstName"
              className="form-control"
              name="inputFirstName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="invalid-feedback">Please enter name</div>
          <div className="col-md-6">
            <label for="inputSecondName" className="form-label">
              Second Name
            </label>
            <input
              type="SecondName"
              className="form-control"
              name="inputSecondName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="inputEmail"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label for="inputMobileNumber" className="form-label">
              Mobile Number
            </label>
            <input
              type="SecondName"
              className="form-control"
              name="inputMobileNumber"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="inputAddress"
              placeholder="1234 Main St"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              name="inputAddress2"
              placeholder="Apartment, studio, or floor"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              name="inputCity"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              State
            </label>
            <select
              name="inputState"
              onChange={handleChange}
              className="form-select"
              required
            >
              <option selected>Choose...</option>
              <option>Chittogong</option>
              <option>Dhaka</option>
              <option>Rajshahi</option>
              <option>Sylhet</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              name="inputZip"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12 d-flex ">
            <button type="submit" className=" ms-auto btn btn-warning">
              Next
            </button>
          </div>
        </form>
      </div>
      {/* // footer / */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Membership;
