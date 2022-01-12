import React from "react";
import CommonHeader from "../Home/Common/CommonHeader";
import Footer from "../Home/Footer/Footer";
import data from "../../Data/Data.js";
import "./Classes.css";
import Class from "./Class.js";

function Classes() {
  // const [info, setInfo] = useState();
  const items = data;

  return (
    <div>
      {/* common header */}
      <div>
        <CommonHeader props={"OUR CLASSES"} />
      </div>

      {/* classes */}
      <div className="container classes-item">
        {items.map((item) => (
          <Class item={item} />
        ))}
      </div>

      {/* // footer / */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Classes;
