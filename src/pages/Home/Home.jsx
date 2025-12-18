import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Divider from "../../components/Divider/Divider";
// import hero from '../../../public/hero'
export default function Home() {
  return (
    <>
      <NavBar />
      
  <div className="  ">
        <div className="home  d-flex justify-content-center align-items-center flex-column text-white gap-4 vh-100 ">
        <div>
          <img src="/hero.svg" style={{ width: 260 }} alt="" />
        </div>
        <div className="content text-center">
          <Divider/>
          <div>
            <h2 className="fs-1  fw-bold text-uppercase">start Framework</h2>
          </div>

          <h6>Graphic Artist - Web Designer - Illustrator</h6>
        </div>
      </div>
  </div>
      <Footer/>
    </>
  );
}
