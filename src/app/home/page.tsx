"use client";

import React from "react";
import AboutMe from "../aboutMe/page";
import Main from "../main/page";
import Header from "../header/page";
import Contact from "../contact/page";
import Skills from "../skills/page";
import SideBar from "../sideBar/page";
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <SideBar /> */}
        <Header />
        <Main />
        <AboutMe />
        <Skills />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default Home;
