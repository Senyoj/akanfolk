import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const navlinks = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Games",
      url: "/games",
    },
    {
      label: "History",
      url: "/history",
    },
    {
      label: "Gallery",
      url: "/gallery",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-5 md:px-10 lg:px-20 bg-black text-white">
        <div>
          <img src="/src/assets/logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="hidden md:flex">
          <nav>
            <ul className="flex gap-5">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="hover:text-gray-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden md:block">
          <Button className="bg-white rounded-2xl">
            <span className="bg-gradient-to-r from-[#000000] to-[#FAC70A] bg-clip-text text-transparent">
              Community
            </span>
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-85 backdrop-blur-2xl text-white absolute w-full">
          <nav>
            <ul className="flex flex-col gap-4 px-5 py-4">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-5 py-2">
            <Button className="bg-white  w-full">
              <span className="bg-gradient-to-r from-[#000000] to-[#FAC70A] bg-clip-text text-transparent">
                Community
              </span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
