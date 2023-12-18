import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  const handleClicked = (clicked: any) => {
    console.log("clicked", clicked);
  };

  return (
    <div className=" ">
      <div className="flex justify-end mr-4 text-white-100 py-2 font-serif text-base">
        <motion.div
          transition={{ type: "spring" }}
          whileHover={{ scale: 1.1 }}
          className="p-4 mr-2 header rounded-full justify-center"
          onClick={handleClicked}
        >
          <span className="px-2 mr-2">Home</span>
        </motion.div>

        <motion.div
          transition={{ type: "spring" }}
          whileHover={{ scale: 1.1 }}
          className="p-4 mr-2 header rounded-full justify-center"
          onClick={handleClicked}
        >
          <span className="mr-2">Feautured Projects</span>
        </motion.div>

        <motion.div
          transition={{ type: "spring" }}
          whileHover={{ scale: 1.1 }}
          className="p-4 mr-2 header rounded-full justify-center"
          onClick={handleClicked}
        >
          <span className=" mr-2">About Me</span>
        </motion.div>

        <motion.div
          transition={{ type: "spring" }}
          whileHover={{ scale: 1.1 }}
          className="p-4 mr-2 header rounded-full justify-center"
          onClick={handleClicked}
        >
          <span className="mr-2">Contact Me</span>
        </motion.div>

        <motion.div
          transition={{ type: "spring" }}
          whileHover={{ scale: 1.1 }}
          className=" header flex p-2 rounded-full justify-center"
        >
          <Button
            className=""
            text="View Resume"
            onClick={handleClicked}
          ></Button>
          <div className="mt-3 pr-2">
            <Icon icon={"resumeIcon"} size={20} className="mt-4" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
