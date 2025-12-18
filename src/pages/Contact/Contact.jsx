import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Divider from "../../components/Divider/Divider";
import ContactForm from "../../components/ConrtactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <>
      <NavBar />

        <ContactForm />
      <Footer/>
    </>
  );
}
