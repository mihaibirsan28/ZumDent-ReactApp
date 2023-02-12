import React from "react";
import { Hero } from "../components/Hero";
import "../App.css";
import { ThemeChange } from "../components/Theme";
import { DoctorCard } from "../components/DoctorCard";
import { AboutHeader } from "../components/AboutHeader";

const About: React.FC = () => {
  return (
    <>
      <AboutHeader />
      <DoctorCard />
      {/* <p>About</p> */}
      {/* <ThemeChange /> */}
    </>
  );
};

export default About;
