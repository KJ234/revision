import React from "react";
import Navbar from "../components/navbar";
import "../App.css";
import Header from "../components/header";
import homeimage from "../../src/assets/images/Home-img.png";
import Footer from "../components/footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <img
        className="homepgpic"
        src={homeimage}
        alt="img"
        loading="lazy"
        width=""
        height=""
      />
      <Footer />
    </div>
  );
}

export default Homepage;
