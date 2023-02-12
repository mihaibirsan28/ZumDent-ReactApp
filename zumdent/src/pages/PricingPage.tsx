import React from "react";
import { Hero } from "../components/Hero";
import "../App.css";
import { ThemeChange } from "../components/Theme";
import { ContactUs } from "../components/Contact";
import { PricingBanner } from "../components/PricingBanner";
import { PricingTable } from "../components/PricingTable";

const PricingPage: React.FC = () => {
  return (
    <>
      <PricingBanner />

      <PricingTable />
      {/* <ThemeChange /> */}
    </>
  );
};

export default PricingPage;
