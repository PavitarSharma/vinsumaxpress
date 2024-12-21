import Logo from "@/components/Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, companyDetail } from "@/constants";
import { FaFacebookF, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsThreadsFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { ROUTES } from "@/lib/routes";
import { useCallback, useEffect, useState } from "react";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const { pathname } = useLocation();

  const changeNavBg = () => {
    window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const togglePopover = useCallback(
    () => setPopoverOpen((prevPopoverOpen) => !prevPopoverOpen),
    []
  );

  return (
    <header
      className={`z-50  w-full top-0 left-0 ${
        pathname === "/" ? "fixed" : "sticky text-black"
      } ${
        navBg
          ? "text-black bg-white"
          : pathname === "/" && "text-primary-foreground"
      }`}
    >
      <div className="container py-3 flex flex-wrap items-center justify-between gap-4">
        <div>
          <a
            href={`tel:${companyDetail.contact}`}
            className="flex items-center gap-2"
          >
            <FaPhoneAlt />
            <span className="text-sm">{companyDetail.contact}</span>
          </a>
          {/* <div className="flex items-center gap-2">
          <FaLocationDot />
          <span className="text-sm">{companyDetail.location}</span>
        </div> */}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${companyDetail.email}`}
            className="flex items-center gap-2"
          >
            <IoMdMail size={20} />
            <span className="text-sm sm:inline hidden">
              {companyDetail.email}
            </span>
          </a>
          <a href={companyDetail.facebook} target="_blank">
            <FaFacebookF />
          </a>
          <a href={companyDetail.twitter} target="_blank">
            <FaXTwitter />
          </a>
          <a href={companyDetail.instagram} target="_blank">
            <AiFillInstagram size={20} />
          </a>
          <a href={companyDetail.youtube} target="_blank">
            <FaYoutube size={20} />
          </a>
          <a href={companyDetail.thread} target="_blank">
            <BsThreadsFill />
          </a>
          <a
            href="http://ggco.vinsumaxpress.com"
            target="_blank"
            className="sm:inline hidden text-black"
          >
            <Button type="button" variant="outline" size="sm">
              ERP Login
            </Button>
          </a>
          <a
            href="https://hrms.vinsumaxpress.com/Default.aspx"
            target="_blank"
            className="sm:inline hidden"
          >
            <Button type="button" size="sm">
              HRMS Login
            </Button>
          </a>
        </div>
      </div>
      <div className="container h-14 flex items-center justify-between">
        <Logo />

        <Popover open={popoverOpen} onOpenChange={togglePopover}>
          <PopoverTrigger asChild>
            <button type="button" id="menu" className="md:hidden inline-block">
              <LuMenu size={26} />
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" className="">
            <ul className="">
              {navLinks.map(({ label, path }, index) => (
                <li key={index} className="hover:bg-zinc-100 py-2 px-2">
                  <NavLink
                    to={path}
                    onClick={togglePopover}
                    className={({ isActive }) =>
                      `block w-full ${isActive ? "text-primary" : ""}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}

              <li className="px-2 mt-2">
                <Link to={ROUTES.CONTACT}>
                  <Button onClick={togglePopover}>Get in Touch</Button>
                </Link>
              </li>

              <Separator className="my-4" />
              <div className="grid grid-cols-2 gap-2">
                <li>
                  <a href="http://ggco.vinsumaxpress.com" target="_blank">
                    <Button type="button" variant="outline" className="w-full">
                      ERP Login
                    </Button>
                  </a>
                </li>

                <li>
                  <a
                    href="https://hrms.vinsumaxpress.com/Default.aspx"
                    target="_blank"
                  >
                    <Button type="button" variant="destructive">
                      HRMS Login
                    </Button>
                  </a>
                </li>
              </div>
            </ul>
          </PopoverContent>
        </Popover>

        {/* Nav menus */}
        <NavigationMenu className="md:block hidden">
          <NavigationMenuList className="space-x-6">
            {navLinks.map(({ label, path }, index) => (
              <NavigationMenuItem key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-medium" : "hover:text-primary"
                  }
                >
                  <NavigationMenuLink>{label}</NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Link to={ROUTES.CONTACT}>
                <Button>Get in Touch</Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
