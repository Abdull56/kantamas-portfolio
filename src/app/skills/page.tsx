import { Icon } from "@/components/icon";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  // const [rotate, setRotate] = useState(false);

  return (
    <div className="grid grid-cols-2 px-2 pt-10 pb-5">
      <section>
        <div className="p-6 mt-10">
          <span className=" text-gray-400 text-lg">My Skills</span>
          <div>
            <span className=" text-white text-2xl">
              Technical <span className=" text-sky-500">Skills.</span>{" "}
            </span>
          </div>

          <div className="mt-2 mb-2">
            <span className="text-white text-lg">
              {" "}
              I believe that this path will not only allow me to explore a wider
              range of technologies and tools but also empower me to create
              end-to-end solutions that have a meaningful impact. I am excited
              about the journey ahead and eager to continue learning and growing
              in the dynamic and ever-evolving field of software development. My
              dedication to inclusive collaboration and my boundless enthusiasm
              for programming make me confident that I will make a positive
              contribution to any team or project I undertake.
            </span>
          </div>
        </div>
      </section>

      <section className=" text-white mt-6 mb-2 p-4">
        <div className="flex  justify-center align-middle mb-6">
          <motion.div
            // animate={{ rotate: rotate ? 360 : 0 }}
            whileHover={{ scale: 1.3 }}
            // onClick={() => setRotate(!rotate)}
            className="mr-8 rounded-xl p-5 "
          >
            <Icon icon={"javascriptIcon"} size={90} />
            <p className="mt-4">Javascript</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring" }}
            // onClick={() => setRotate(!rotate)}
            className="mr-8 rounded-xl p-5 "
          >
            <Icon icon={"reactIcon"} size={90} />
            <p className="mt-4 ml-4">React</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.3 }}
            // onClick={() => setRotate(!rotate)}
            className="mr-8 rounded-xl p-5 "
          >
            <Icon icon={"typescrptIcon"} size={90} />
            <p className="mt-4">Typescript</p>
          </motion.div>
        </div>

        <div className="flex justify-center align-middle text-center">
          {/* <motion.div
            // transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.3 }}
            // onClick={() => setRotate(!rotate)}
            className="mr-8 rounded-xl p-5 "
          >
            <Icon icon={"bootstrapIcon"} size={90} />
            <p className="mt-4">Bootstrap</p>
          </motion.div> */}

          <motion.div
            // animate={{ rotate: rotate ? 360 : 0 }}
            whileHover={{ scale: 1.3 }}
            // onClick={() => setRotate(!rotate)}
            className="mr-8 rounded-xl p-5 "
          >
            <Icon icon={"tailwindIcon"} size={90} />
            <p className="mt-4">Next Js</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
