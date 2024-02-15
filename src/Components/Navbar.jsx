import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Portfolio", path: "portfolio" },
    { link: "Blog", path: "blog" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header className="w-full bg-transparent top-0 left-0 right-0 bg-dark trasition-all duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-dark trasition-all duration-300 ease-in" : "trasition-all duration-300 ease-in"}`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="/" className="text-white text-xl font-bold">
            <span className="text-orange">TechZ</span>omhit
          </a>

          <ul className="md:flex space-x-12 hidden navitems">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-white upparcase hover:text-orange"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex item-center">
            <button className="bg-transparent text-white p-2 border rounded-full">
              <FaBarsStaggered />
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBarsStaggered className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
