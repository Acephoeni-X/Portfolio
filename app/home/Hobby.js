"use client";
import React from "react";
import Carousel from "./Carousal";

const Hobby = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            I like:
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Most my projects are open source.....🙂
          </p>
        </div>
        <div>
          <Carousel images={["/Friends.png", "/Travel.png", "/Family.png"]} />
        </div>
      </div>
    </section>
  );
};

export default Hobby;
