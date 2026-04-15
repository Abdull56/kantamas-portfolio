"use client";

import { useState } from "react";

const Codes = () => {
  const [count, setCount] = useState(0);

  const HandleClicked = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="bg-gray-500">
      <div className="mt-12 flex justify-center">
        <h2 className="">Basic Counter App</h2>
      </div>
      <div className="justify-center flex mt-12">{`Basic Count : ${count}`}</div>

      <div className="justify-center flex">
        <button className="bg-sky-500 p-2 mt-12" onClick={HandleClicked}>
          Click Me
        </button>
      </div>

      <div className="justify-center flex">
        <button className="bg-sky-500 p-2 mt-12">Rese</button>
      </div>
    </div>
  );
};

export default Codes;
