import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

export const Header: React.FC = () => {
  const handleClicked = (clicked: any) => {
    console.log("clicked", clicked);
  };

  return (
    <div className=" ">
      <div className="flex justify-end text-white-100 py-2 font-serif text-base">
        <div className="p-2 mr-1 header justify-center" onClick={handleClicked}>
          <Link to={"#skills"} smooth>
            <span className="px-2 mr-1 text-sm">Skills</span>
          </Link>
        </div>

        <div className="p-2 mr-1 header justify-center" onClick={handleClicked}>
          <Link to={"#projects"} smooth>
            <span className="mr-1 text-sm">Feautured Projects</span>{" "}
          </Link>
        </div>

        <div className="p-2 mr-1 header justify-center" onClick={handleClicked}>
          <Link to={"#aboutme"} smooth>
            <span className=" mr-1 text-sm">About Me</span>
          </Link>
        </div>

        <div className="p-2 mr-1 header justify-center" onClick={handleClicked}>
          <Link to={"#contact"} smooth>
            {" "}
            <span className="mr-1 text-sm">Contact Me</span>
          </Link>
        </div>

        <div className="resume ">
          <Link to={"#resume"} smooth>
            <Button
              className=""
              text="View Resume"
              onClick={handleClicked}
            ></Button>
          </Link>
          <div className="">
            <Icon icon={"resumeIcon"} size={20} className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
