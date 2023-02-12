import React from "react";
import { Hero } from "../components/Hero";
import "../App.css";
import { ThemeChange } from "../components/Theme";
import { ContactUs } from "../components/Contact";

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactUs />
      {/* <ThemeChange /> */}
    </>
  );
};

export default ContactPage;
