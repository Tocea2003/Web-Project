import Navbar from "../components/Navbar";
import React from "react";
import HomeMain from "../components/Home-main";
import Footer from "../components/Footer";
import "../styles/home.css";
function Home() {
  return (
    <div className="home-Smart">
      <Navbar />
      <HomeMain />
      <Footer />
    </div>
  );
}
export default Home;
