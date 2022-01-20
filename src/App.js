import Home from "./Components/Home/Home.js";
import Classes from "./Components/Classes/Classes.js";
import { Routes, Route } from "react-router-dom";
import Pricing from "./Components/Pricing/Pricing.js";
import Login from "./Components/Login/Login.js";
import NotFound from "./Components/NotFound/NotFound.js";
import ClassDetails from "./Components/ClassDetails/ClassDetails.js";
import Membership from "./Components/Membership/Membership.js";
import Payment from "./Components/Payment/Payment.js";
import AuthProvider from "./Context/AuthContext.js";
import PrivateOutlet from "./Components/PrivateOutlet/PrivateOutlet.js";
import CompleteMembership from "./Components/CompleteMembership/CompleteMembership.js";
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/completeMembership" element={<CompleteMembership />} />
          <Route path="/classDetails/:title" element={<ClassDetails />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="membership" element={<Membership />} />
          </Route>
          <Route path="/payment" element={<Payment />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
