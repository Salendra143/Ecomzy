import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const item = useSelector((state) => state.cart.items);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="px-4 md:px-24 shadow-lg mx-auto flex justify-between items-center">
        <div>
          <img className="w-32 md:w-40 py-2" src="../logocopy.png" alt="" />
        </div>
        <div className="flex gap-1 sm:gap-5">
          <Link to={"./"}>
            <p className="text-[1rem] md:text-[1.5rem] italic  hover:text-slate-500 active:text-pink-600">
              Home
            </p>
          </Link>
          <Link to={"./about"}>
            <p className="text-[1rem] md:text-[1.5rem] italic  hover:text-slate-500 active:text-pink-600">
              About
            </p>
          </Link>
          <Link to={"./contact"}>
            <p className="text-[1rem] md:text-[1.5rem] italic  hover:text-slate-500 active:text-pink-600">
              Contact Us
            </p>
          </Link>
          <div className="relative">
            <Link to="/cart">
              <img className="w-8" src="../trolley.png" alt="" />
              <span className="absolute -top-1 left-3 bg-yellow-500 font-semibold text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {item.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
