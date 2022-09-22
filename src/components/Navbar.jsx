import React, { useState } from "react";
import { close, logo, menu } from "../assets/index";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [active, setactive] = useState("Home");
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-auto" />
      <ul className="list-none sm:flex hidden justify-end items-center text-white">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer, text-[16px] mr-6
          ${active === nav.title ? "text-white" : "text-dimWhite"}`}
            onClick={() => setactive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-auto object-contain"
          onClick={() => settoggle(!toggle)}
        />

        <div
          className={`${
            toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar`}
        >
          <ul className="list-none flex justify-end items-center text-white">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer, text-[16px] mr-6
          ${active === nav.title ? "text-white" : "text-dimWhite"}`}
                onClick={() => setactive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
