import React from "react";
import "./ContactForm.css";
import Divider from "../Divider/Divider";

export default function ContactForm() {
  return (
    <div className="container contact-container py-5 ">
      <header className="text-center  tex-dark pt-5  mt-5">
        <h1 className="fw-bolder text-uppercase fs-1">Contact Section</h1>
        <Divider className="text-dark" />
      </header>

      <form className="w-50 mx-auto pt-5 ">
        <label className="form-label custom-label">userName</label>
        <input type="text" className="form-control custom-input mb-4" />

        <label className="form-label custom-label">userAge</label>
        <input type="number" className="form-control custom-input mb-4" />

        <label className="form-label custom-label">userEmail</label>
        <input type="email" className="form-control custom-input mb-4" />

        <label className="form-label custom-label">userPassword</label>
        <input type="password" className="form-control custom-input mb-4" />

        <button className="btn btn-success custom-btn">send Message</button>
      </form>
    </div>
  );
}
