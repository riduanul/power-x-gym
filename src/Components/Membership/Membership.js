import React from "react";
import "./Membership.css";
import CommonHeader from "../Home/Common/CommonHeader";
import Footer from "../Home/Footer/Footer";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

function Membership() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
        <div className="dot">
          .....................................................................................................................
        </div>
        <div className="dot1">
          ......................................................................................................................
        </div>
      </div>

      <div className="container ">
        <form class="row g-3 needs-validation" noValidate>
          <div class="col-md-6">
            <label for="inputFirstName" class="form-label">
              First Name
            </label>
            <input
              type="firstName"
              class="form-control"
              id="inputFirstName"
              required
            />
          </div>
          <div class="invalid-feedback">Please enter name</div>
          <div class="col-md-6">
            <label for="inputSecondName" class="form-label">
              Second Name
            </label>
            <input
              type="SecondName"
              class="form-control"
              id="inputSecondName"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail" required />
          </div>
          <div class="col-md-6">
            <label for="inputMobileNumber" class="form-label">
              Mobile Number
            </label>
            <input
              type="SecondName"
              class="form-control"
              id="inputMobileNumber"
              required
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              required
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" required />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select" required>
              <option selected>Choose...</option>
              <option>Chittogong</option>
              <option>Dhaka</option>
              <option>Rajshahi</option>
              <option>Sylhet</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" required />
          </div>
          <NavLink to="/payment">
            <div class="col-12 d-flex ">
              <button type="submit" class=" ms-auto btn btn-warning">
                Next
              </button>
            </div>
          </NavLink>
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
