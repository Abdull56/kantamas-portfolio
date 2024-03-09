"use client";

import React from "react";
import AboutMe from "../aboutMe/page";
import Main from "../main/page";
import Header from "../header/page";
import Contact from "../contact/page";
import Skills from "../skills/page";
import SideBar from "../sideBar/page";

const Home = () => {
  return (
    <div>
      {/* <SideBar /> */}
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
