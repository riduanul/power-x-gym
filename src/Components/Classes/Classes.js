import React from "react";
import CommonHeader from "../Home/Common/CommonHeader";
import Footer from "../Home/Footer/Footer";

function Classes() {
  return (
    <div>
      {/* common header */}
      <div>
        <CommonHeader props={"OUR CLASSES"} />
      </div>
      {/* classes */}
      <div className="container"></div>
      {/* // footer / */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Classes;
