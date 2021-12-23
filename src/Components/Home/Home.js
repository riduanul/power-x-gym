import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Training from "./Training/Training";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Services />
      <AboutUs />
      <Training />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
