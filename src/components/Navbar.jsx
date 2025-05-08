import Logo from "@/components/Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, companyDetail } from "@/constants";
import { FaFacebookF, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsThreadsFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { ROUTES } from "@/lib/routes";
import { useCallback, useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import { ChevronsUpDown } from "lucide-react";

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
      className={`z-50  w-full uppercase top-0 left-0  ${
        pathname === "/" ? "fixed" : "sticky text-black"
      } ${
        navBg
          ? "text-black bg-white"
          : pathname === "/" && "text-primary-foreground"
      }`}
    >
      <div className="px-5 md:px-14 py-2  flex flex-wrap items-center justify-between bg-gray-300 w-full">
        <div className="text-black">
          {/* <a
            href={`tel:${companyDetail.contact}`}
            className="flex items-center gap-2"
          >
            <FaPhoneAlt />
            <span className="text-sm text-black">{companyDetail.contact}</span>
          </a> */}
          {/* <div className="flex items-center gap-2">
          <FaLocationDot />
          <span className="text-sm">{companyDetail.location}</span>
        </div> */}
        </div>

        <div className="flex items-center gap-4 text-black">
          <a
            href={`tel:${companyDetail.contact}`}
            className="flex items-center gap-2"
          >
            <FaPhoneAlt />
            <span className="text-base">{companyDetail.contact}</span>
          </a>
          <a
            href={`mailto:${companyDetail.email}`}
            className="flex items-center gap-2"
          >
            <IoMdMail size={20} />
            <span className="text-base sm:inline hidden">
              {companyDetail.email}
            </span>
          </a>
          {/* <a href={companyDetail.facebook} target="_blank">
            <FaFacebookF />
          </a>
          <a href={companyDetail.linkedin} target="_blank">
            <FaLinkedin />
          </a>
          <a href={companyDetail.instagram} target="_blank">
            <AiFillInstagram size={20} />
          </a>
          <a href={companyDetail.youtube} target="_blank">
            <FaYoutube size={20} />
          </a>
          <a href={companyDetail.thread} target="_blank">
            <BsThreadsFill />
          </a> */}
          {/* <a
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
          </a> */}
        </div>
      </div>
      <div className="container h-14 flex items-center justify-between">
        <Logo />

        <Popover open={popoverOpen} onOpenChange={togglePopover}>
          <PopoverTrigger asChild>
            <button type="button" id="menu" className="lg:hidden inline-block">
              <LuMenu size={26} />
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" className="">
            <ul className="mb-3 space-y-1">
              {navLinks.map(({ href, label, submenu }, index) => (
                <li key={index}>
                  {submenu ? (
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-between"
                        >
                          {label}
                          <ChevronsUpDown />
                        </Button>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="ps-2">
                        <ul className="border-l border-l-muted-foreground/20">
                          {submenu.map(({ href, label }, index) => (
                            <li key={index}>
                              <Button
                                asChild
                                onClick={togglePopover}
                                variant="ghost"
                                className={`${
                                  pathname === href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }  hover:bg-transparent whitespace-pre-wrap`}
                              >
                                <Link to={href}>{label}</Link>
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Button
                      asChild
                      variant="ghost"
                      onClick={togglePopover}
                      className={`${
                        pathname === href
                          ? "text-primary hover:text-primary bg-neutral-100"
                          : ""
                      } w-full justify-start`}
                    >
                      <Link to={href}>{label}</Link>
                    </Button>
                  )}
                </li>
              ))}
              <li className="px-2 mt-2">
                <Link to={ROUTES.CONTACT} className="block">
                  <Button onClick={togglePopover} className="w-full">Download Our Brochure</Button>
                </Link>
              </li>

              <Separator className="!my-4" />
              <div className="grid grid-cols-2 gap-2">
                <li>
                  <a href="http://ggco.vinsumaxpress.com" target="_blank">
                    <Button type="button" variant="outline" onClick={togglePopover} className="w-full">
                      ERP Login
                    </Button>
                  </a>
                </li>

                <li>
                  <a
                    href="https://hrms.vinsumaxpress.com/Default.aspx"
                    target="_blank"
                  >
                    <Button type="button" variant="destructive" onClick={togglePopover}>
                      HRMS Login
                    </Button>
                  </a>
                </li>
              </div>
            </ul>

          
          </PopoverContent>
        </Popover>

        {/* Nav menus */}
        <NavigationMenu className="lg:block hidden">
          <NavigationMenuList className="space-x-6">
            {navLinks.map(({ href, label, submenu }, index) => (
              <NavigationMenuItem key={index}>
                {submenu ? (
                  <>
                    <NavigationMenuTrigger>
                      <p className="text-lg uppercase font-normal text-black hover:font-semibold">{label}</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid grid-cols-2 gap-2 p-2 xl:w-[640px] md:w-[540px] uppercase text-black font-normal">
                        {submenu.map(({ href, label, icon }, index) => (
                          <li key={index}>
                            <NavigationMenuLink href={href} asChild>
                              <Link
                                to={href}
                                className="flex gap-3 select-none p-2 rounded-sm transition-colors hover:bg-foreground/5 items-center"
                              >
                                <div className="w-10 h-10 bg-gray-500 rounded-sm shadow-sm border-t border-foreground/5 flex-shrink-0 grid place-items-center">
                                  <img
                                    src={icon}
                                    alt="logo"
                                    className="w-8 h-8 object-contain"
                                  />
                                </div>

                                <div
                                  className={`text-[13px] leading-normal mb-1 ${
                                    pathname === href
                                      ? "text-primary font-medium"
                                      : ""
                                  }`}
                                >
                                  {label}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavLink
                    to={href}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-medium text-lg"
                        : "hover:font-semibold text-lg text-black font-normal"
                    }
                  >
                    <NavigationMenuLink>{label}</NavigationMenuLink>
                  </NavLink>
                )}
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <a
                href="/assets/brochure.pdf"
                download="vinsum_brochure.pdf"
              >
                <Button className="uppercase text-lg">Download Our Brochure</Button>
              </a>
              {/* <Link to={ROUTES.CONTACT}>
              </Link> */}
            </NavigationMenuItem>
          </NavigationMenuList>
         
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
