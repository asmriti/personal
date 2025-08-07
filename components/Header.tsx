"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BeakerIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { HamburgerMenu } from "./icons/HamburgerMenu";
import { useState } from "react";
import { CrossIcon } from "./icons/Cross";

export const Header = () => {
  const [isMenuItemVisible, setIsMenuItemVisible] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleMenu = () => {
    setIsMenuItemVisible(!isMenuItemVisible);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header>
      <nav className="flex items-center justify-between mx-5 md:mx-0">
        <a href="#" className="flex items-center gap-2">
          <span className="w-8 h-8 bg-black dark:bg-[#002200] text-white flex items-center justify-center rounded-lg font-bold">
            SA
          </span>
          <span className="font-bold">Smriti Aryal</span>
        </a>

        {/* Hamburger toggle for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuItemVisible(!isMenuItemVisible)}
        >
          {isMenuItemVisible ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <HamburgerMenu />
          )}
        </button>

        <ul
          className={`transition-all duration-300 ease-in-out z-10
            ${
              isMenuItemVisible
                ? "absolute top-0 left-0 w-full h-[40vh] bg-black/60 backdrop-blur-md text-white flex flex-col justify-center items-center py-6 gap-6 md:static md:flex-row md:gap-6 md:py-0"
                : "hidden md:flex md:gap-6"
            }`}
        >
          <button
            className="absolute top-4 right-4 text-white md:hidden mr-5 pt-2"
            onClick={toggleMenu}
          >
            <CrossIcon />
          </button>

          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMenuItemVisible(false);
                }}
                className={`text-base font-medium transition duration-150 ${
                  activeItem === item.name
                    ? "underline underline-offset-4"
                    : "opacity-80 hover:underline"
                }
                `}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
