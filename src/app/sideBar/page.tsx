import React from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";

const SideBar = () => {
  return (
    <div className="nav-bar rounded-3xl  bg-gray-500 ">
      <div className="image-container">
        <Link href={""}>
          <img
            className=" rounded-full"
            src="./image/kantama.jpg"
            style={{
              height: "80px",
              width: "80px",
              padding: "5px",
            }}
            alt=""
          />
        </Link>
      </div>

      <div>
        <nav className="nav">
          <Link href="https://github.com" target="_blank">
            <div className="p-3 py-5">
              <Icon icon="gitHubIcon" size={30} />
            </div>
          </Link>

          <Link href="https://www.google.com/gmail/about" target="_blank">
            <div className="p-3 py-5">
              <Icon icon="mailIcon" size={30} />
            </div>
          </Link>

          <Link href="https://www.linkedin.com/login" target="-blank">
            <div className="p-3 py-5">
              <Icon icon="linkedInIcon" size={30} />
            </div>
          </Link>

          <Link href="https://twitter.com/" target="_blank">
            <div className="p-3 py-5">
              <Icon icon="twitterIcon" size={30} />
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
