import React from "react";
import "./Login.css";
import googleLogo from "../../Images/google.png";
import CommonHeader from "../Home/Common/CommonHeader";
import Footer from "../Home/Footer/Footer";
import { useAuth } from "../../Context/AuthContext";

export default function Login() {
  const { handleGoogleLogIn } = useAuth();

  return (
    <div>
      {/* header */}
      <CommonHeader props={"Login"} />

      {/* login */}
      <div className="extarnal-login text-center p-5">
        <h3>
          Login with <span style={{ color: "orange" }}> Google</span>
        </h3>
        <div className="login-btn" onClick={handleGoogleLogIn}>
          <span>
            <img src={googleLogo} alt="logo" width="30" />
          </span>
          <button className="google-btn"> Continue with Google</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
