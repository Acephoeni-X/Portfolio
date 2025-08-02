import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font dark:bg-gray-700">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-300">
          <span className="ml-3 text-xl">Rishi Sharma</span>
        </a>
        <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Rishi Sharma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
