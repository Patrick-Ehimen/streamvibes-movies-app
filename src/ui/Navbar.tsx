import { Link, useLocation } from "react-router-dom";
import { DesktopLogo, SearchBar, BellNotification } from "../assets";

const links = [
  { name: "Home", href: "/" },
  { name: "Movies&Shows", href: "/movies" },
  { name: "Support", href: "/support" },
  { name: "Subscriptions", href: "/subscriptions" },
];

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="flex">
      <div className="flex absolute z-10 lg:ml-[10px]">
        <div className="mt-[60px] md:mx-[50px]">
          <Link to="/">
            <img src={DesktopLogo} alt="Logo" className="hidden md:block" />
          </Link>
        </div>

        <div className="text-[#BFBFBF] hidden md1:flex font-manrope bg-[#0F0F0F] border-4 border-[#1F1F1F] lg:ml-[0px] md1:-ml-[30px] items-center rounded-md mt-[50px] xl:mx-[100px]">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`mx-[px] ${
                pathname === link.href
                  ? "bg-[#1F1F1F] p-[10px] my-[10px] rounded-md mx-[4px]"
                  : ""
              }`}
            >
              <div className="lg:mx-[15px] xl:mx-[20px]">{link.name}</div>
            </a>
          ))}
        </div>
        <div className="md1:flex mt-[50px] xl:ml-[30px] hidden lg:ml-[60px] ml-[20px] cursor-pointer">
          <img src={SearchBar} alt="search" className="w-6" />

          <img
            src={BellNotification}
            alt="notification"
            className="xl:ml-[50px] lg:ml-[30px] ml-[15px] w-7 "
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
