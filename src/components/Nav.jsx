import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index.js";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className='padding-x py-8 z-10 w-full'>
      <nav className='md:flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='logo' width={130} height={29} />
        </a>

        <ul
          className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden `}
          id='nav-menu'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className='hidden max-lg:block cursor-pointer '
          id='bars-icon'
          onClick={toggleNavbar}>
          <img src={hamburger} alt='Hamburger' width={25} height={25} />
        </div>
      </nav>
      {/* Mobile Nav */}
      {isOpen && (
        <ul
          className={` flex flex-col flex-wrap justify-center items-center gap-16 mt-5 transition-all ease-in duration-500 `}
          id='nav-menu'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
