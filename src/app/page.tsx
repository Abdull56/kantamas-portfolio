"use client";

import { BrowserRouter } from "react-router-dom";
import Header from "./header/page";
import Main from "./main/page";
import AboutMe from "./aboutMe/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
