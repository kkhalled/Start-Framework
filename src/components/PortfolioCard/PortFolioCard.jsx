import React from "react";
import "./PortfolioCard.css";

export default function PortFolioCard({ src, onClick }) {
  return (
    <>
      <div
        className="mycard col-md-4"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <div className="content position-relative rounded-4">
          <img src={src} className="w-100 rounded-4" alt="portfolio" />
          <div className="inner rounded-4 d-flex justify-content-center align-items-center">

            <i className="fa-solid fa-plus fa-5x text-white"></i>

          </div>
        </div>
      </div>
    </>
  );
}
