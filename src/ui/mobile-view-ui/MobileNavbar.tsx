import { useState } from "react";
import { closeMenu, Menu } from "../../assets";

const links = [
  { name: "Home", href: "/" },
  { name: "Movies&Shows", href: "/movies" },
  { name: "Support", href: "/support" },
  { name: "Subscriptions", href: "/subscriptions" },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md1:hidden top-0 right-4 absolute mt-[60px] ml-[300px] flex">
      <div className="flex-col ml-[20px] ">
        <button
          onClick={toggleMenu}
          className="bg-[#1a1a1a9a] border  border-[#999] rounded p-[12px]"
        >
          <div className="">
            {isOpen ? (
              <div className="">
                <img src={closeMenu} alt="Close Menu" className="" />
              </div>
            ) : (
              <img src={Menu} alt="Menu" className="" />
            )}
          </div>
        </button>
        {isOpen && (
          <ul className="flex flex-col justify-center items-end h-screen  space-y-4 bg-red-300">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default MobileNavbar;
