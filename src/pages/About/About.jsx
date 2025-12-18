import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import Divider from "../../components/Divider/Divider";

export default function About() {
  return (
    <div>
      <NavBar />
      <section className="about-section text-white p-5 d-flex align-items-center">
        <div className="container py-5 text-center">
          {/* TITLE */}
          <h2 className="text-center fw-bold about-title">ABOUT COMPONENT</h2>

          <Divider  />
          {/* TEXT ROW */}
          <div className="row mt-4 pt-2">
            <div className="col-md-6 mb-3">
              <p className="about-text">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <p className="about-text">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
