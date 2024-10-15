import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/about";
function Contactform() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen ">
        <About/>
      </div>
      <Footer />
    </>
  );
}

export default Contactform;