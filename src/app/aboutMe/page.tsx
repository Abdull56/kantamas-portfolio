import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

const AboutMe = () => {
  const handleClicked = (clicked: any) => {
    console.log("clicked", clicked);
  };

  return (
    <div className="bg-neutral-950 justify-center text-white">
      <div className=" text-center  pt-10">
        <span className="text-gray-400 text-xs">My Bio</span>
        <div>
          <span className=" text-white text-2xl">
            About <span className=" text-sky-500">Me.</span>{" "}
          </span>
        </div>
      </div>

      <section className="grid grid-cols-2 p-14">
        <div className="ml-5 about-image mb-10 rounded-full">
          <img
            className=" rounded-full p-8"
            src="./image/kantama.jpg"
            style={{
              height: "300px",
              width: "300px",
            }}
            alt=""
          />
        </div>

        <div className="mt-4 ml-4 text-white text-sm">
          <p>
            In 2020, I embarked on my exciting programming journey, and by 2023,
            I reached a significant milestone by securing my first internship.
            This invaluable opportunity exposed me to a diverse array of
            programming languages and projects, which has greatly fueled my
            passion for problem-solving and software development. I take great
            pride in my ability to collaborate effectively with colleagues from
            various backgrounds, fostering inclusivity in our work environment.
            As a lively and free-spirited individual, I bring boundless energy
            and creativity to my work. I approach each project with enthusiasm
            and a determination to find innovative solutions. Looking ahead, my
            goal is to become a full-stack developer, equipped with a
            well-rounded skill set that spans both front-end and back-end
            development. I believe that this path will not only allow me to
            explore a wider range of technologies and tools but also empower me
            to create end-to-end solutions that have a meaningful impact. I am
            excited about the journey ahead and eager to continue learning and
            growing in the dynamic and ever-evolving field of software
            development. My dedication to inclusive collaboration and my
            boundless enthusiasm for programming make me confident that I will
            make a positive contribution to any team or project I undertake.
          </p>

          <motion.div
            transition={{ type: "spring" }}
            whileHover={{ scale: 1.1 }}
            className=" header flex border p-2 mt-6 mb-10 rounded-full justify-center"
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

          {/* <div className=" bg-sky-500 flex p-2 mt-6 mb-10 rounded-lg justify-center">
            <span className="p-2 text-gray-900">View Resume</span>
            <div className="mt-3 pr-2">
              <Icon icon={"resumeIcon"} size={20} className="mt-4" />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
