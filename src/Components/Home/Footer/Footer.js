import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-bg text-white mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>
              POWER{" "}
              <span style={{ color: "orange", fontWeight: "900" }}>X</span>
            </h4>
          </div>
          <div className="col-md-2">
            <p style={{ fontWeight: "600" }}>Need Help?</p>
            <a href="help">Help Center</a> <br />
            <a href="email">Email Support</a>
            <br />
            <a href="livaChat">Live Chat</a>
            <br />
            <a href="gift">Gift Certificates</a>
            <br />
            <a href="feedback">Send Us Feedback</a>
          </div>
          <div className="col-md-2">
            <p style={{ fontWeight: "600" }}>Degital Resorces</p>
            <a href="articles">Articles</a>
            <br />
            <a href="ebooks">E-Books</a>
          </div>
          <div className="col-md-2">
            <p style={{ fontWeight: "600" }}>Contact With Us</p>
            <a href="articles">Articles</a>
            <br />
            <a href="forums">Forums</a>
          </div>
          <div className="col-md-3">
            <p style={{ fontWeight: "600" }}>Join Out Newsletter</p>
            <p>
              Get exclusive news, features and updates from the shredder weight
              loss Academy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
