import Home from "./Components/Home/Home.js";
import Classes from "./Components/Classes/Classes.js";
import { Routes, Route } from "react-router-dom";
import Pricing from "./Components/Pricing/Pricing.js";
import Login from "./Components/Login/Login.js";
// import PrivateOutlet from "./Components/PrivateOutlet/PrivateOutlet.js";
import ClassDetails from "./Components/ClassDetails/ClassDetails.js";
import Membership from "./Components/Membership/Membership.js";
import Payment from "./Components/Payment/Payment.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/classDetails/:title" element={<ClassDetails />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
