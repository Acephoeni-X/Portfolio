"use client";
import React, { useState } from "react";
import Carousel from "./Carousal";

let images = [
  {
    desc: "I like to hang out with my friends....",
    src: "/Friends.png",
  },
  {
    desc: "I like to travel....",
    src: "/Travel.png",
  },
  {
    desc: "I like to spend time with my family and my special niece....",
    src: "/Family.png",
  },
];

const Hobby = () => {
  const [desc, setdesc] = useState();
  const setDescription = (index) => {
    setdesc(images[index].desc);
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {desc}
          </h2>
        </div>
        {/* images with family are here */}
        {/* <div>
          <Carousel images={images} setDescription={setDescription} />
        </div> */}
      </div>
    </section>
  );
};

export default Hobby;
