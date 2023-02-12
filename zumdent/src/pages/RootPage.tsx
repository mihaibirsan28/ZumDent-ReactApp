import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarSimple } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Box } from "@mantine/core";
import { ThemeChange } from "../components/Theme";

const RootPage: React.FC = () => {
  return (
    <>
      <NavbarSimple />
      {/* <ThemeChange /> */}
      <Box ml={205}>
        <Outlet />
      </Box>
    </>
  );
};

export default RootPage;
