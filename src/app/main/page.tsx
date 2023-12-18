import React from "react";
import { Icon } from "@/components/icon";
import { motion } from "framer-motion";

const Main = () => {
  const IconClick = (url: any) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 justify-center">
      <section className=" mt-10  mb-4 pt-10 pb-2  flex-1">
        <div className=" text text-center ">
          <h1 className=" text-3xl pb-3">
            Hi, I am <span className=" text-sky-500">Abdullahi Kantama</span>
          </h1>
          <span className="mb-6 text-base font-serif">
            A seasoned{" "}
            <span className="  text-sky-500">Frontend Developer</span>{" "}
            transforming ideas into stunning
            <br /> digital experience,Let's create something amazing
          </span>
        </div>

        <div className=" justify-center flex mt-8 pb-10 mb-10 pt-10">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
            whileHover={{ scale: 1.5, backgroundColor: "#B6B1BF" }}
            className=" rounded-full p-4  bg-gray-500 mr-4  "
            onClick={() => IconClick("")}
          >
            <Icon icon="gitHubIcon" size={20} />
          </motion.div>

          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
            whileHover={{ scale: 1.5, backgroundColor: "#B6B1BF" }}
            className=" rounded-full p-4  bg-gray-500 mr-4  "
            onClick={() => IconClick("")}
          >
            <Icon icon="mailIcon" size={20} />
          </motion.div>

          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
            whileHover={{ scale: 1.5, backgroundColor: "#B6B1BF" }}
            className=" rounded-full p-4  bg-gray-500 mr-4  "
            onClick={() => IconClick("")}
          >
            <Icon icon="linkedInIcon" size={20} />
          </motion.div>
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
            whileHover={{ scale: 1.5, backgroundColor: "#B6B1BF" }}
            className=" rounded-full p-4  bg-gray-500 mr-4  "
            onClick={() => IconClick("")}
          >
            <Icon icon="twitterIcon" size={20} />
          </motion.div>
        </div>
      </section>

      <section className=" bg-neutral-950 justify-center">
        <div className="mt-10 text-center">
          <span className="text-gray-400 text-xs">SERVICES</span>
          <div>
            <span className="text-white text-2xl">
              What <span className="  text-sky-500">I do.</span>{" "}
            </span>
          </div>
        </div>

        <div className="bg-sky-700 justify-center align-middle ml-12 mr-12 rounded-xl  mt-4 mb-12 p-10 text-neutral-950">
          <div className=" border-2 rounded-full p-2 w-min mb-4 border-neutral-950">
            <Icon icon={"closedTagIcon"} size={20} />
          </div>
          <div className=" border-b-2 border-neutral-900 max-w-xs pb-3 mb-3">
            <span className=" font-bold">Web Developement</span>
          </div>
          <span className=" text-sm">
            I use my knowledge of various programming languages such as
            HTML,CSS,JAVASCRIPT,REACT,TAILWIND,BOOTSTRAP, to build digital
            solutions for users.
          </span>
        </div>
      </section>
    </div>
  );
};

export default Main;
