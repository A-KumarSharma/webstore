import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/contactform";
import Footer from "../components/Footer";
function Contactform() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Contact/>
      </div>
      <Footer />
    </>
  );
}

export default Contactform;