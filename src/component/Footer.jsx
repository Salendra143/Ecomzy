import React from "react";
import { Transition } from "@headlessui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <Transition
            show={true}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <p className="text-sm">
              &copy; {currentYear} Your Company. All rights reserved.
            </p>
          </Transition>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
