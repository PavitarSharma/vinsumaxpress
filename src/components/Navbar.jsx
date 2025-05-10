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
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search, MapPin, Landmark, Home, LocateFixed, Type } from 'lucide-react';


const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const { pathname } = useLocation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);


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
    <>
      <BranchLocatorDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
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
            <Button type="button" onClick={() => setIsDialogOpen(true)} className="bg-gray-600 sm:block hidden" size="sm">
                BRANCH LOCATOR
            </Button>
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
                                  <div className="group flex items-center space-x-2 cursor-pointer">
                                    <div className="w-10 h-10 bg-gray-500 rounded-sm shadow-sm border-t border-foreground/5 flex-shrink-0 grid place-items-center 
                                                    transition-all duration-300 group-hover:bg-primary group-hover:scale-105 group-hover:animate-beat">
                                      <img
                                        src={icon}
                                        alt="logo"
                                        className="w-8 h-8 object-contain"
                                      />
                                    </div>

                                    <div
                                      className={`text-[13px] leading-normal mb-1 transition-colors duration-300 ${
                                        pathname === href ? "text-primary font-medium" : "text-foreground"
                                      } group-hover:text-primary group-hover:font-semibold`}
                                    >
                                      {label}
                                    </div>
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
                  href="/assets/vinsum_brochure_single_page.pdf"
                  download
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
    </>
    
  );
};


function BranchLocatorDialog({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResult(null);
    }
  }, [isOpen]);

  const handleSearch = async () => {
    // Call your API here with 'query'
    // Dummy data for display
    setResult({
      pincode: '00000',
      areaName: 'Connaught Place',
      branchName: 'Central Delhi Branch',
      branchAddress: '12 Connaught Lane, New Delhi, 12 Connaught Lane, New Delhi, 12 Connaught Lane, New Delhi, 12 Connaught Lane, New Delhi,',
      stateName: 'Delhi',
      pinType: 'Head Office',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose} className="relative z-50 bg-transparent">
      <DialogContent className="max-w-4xl w-full max-h-[600px] overflow-y-auto no-scrollbar bg-white px-16">
        <div>
          <h2 className="text-3xl w-fit font-extrabold tracking-wide text-gray-700 mb-4 glass-text2">
            Branch Locator
          </h2>
          {/* Search Field */}
          <div className="flex gap-2 mb-6 ">
            <input
              type="text"
              placeholder="Enter Pincode or Area"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSearch}
              className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-1"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>

          {/* Result Not Out Yet .. */}
          {!result && (
            <div className="flex flex-col items-center justify-center text-black text-lg gap-4 py-16">
              <div className="flex items-center gap-2">
                <Search className="w-8 h-8" />
                <p>Start by entering a pincode to locate a branch.</p>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-8 h-8" />
                <p>Your branch details will appear here once you search.</p>
              </div>
            </div>
          )}

          {/* Result Display */}
          {result && (
          <div className="space-y-4 text-xl text-white">
            <div className="grid grid-cols-[30%_70%] items-center gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-black" />
                <p className="text-black">Pin Code</p>
              </div>
              <span className="glass-text2">{result.pincode}</span>
            </div>

            <div className="grid grid-cols-[30%_70%] items-center gap-2">
              <div className="flex items-center gap-2">
                <LocateFixed className="w-5 h-5 text-black" />
                <p className="text-black">Area Name</p>
              </div>
              <span className="glass-text2">{result.areaName}</span>
            </div>

            <div className="grid grid-cols-[30%_70%] items-center gap-2">
              <div className="flex items-center gap-2">
                <Landmark className="w-5 h-5 text-black" />
                <p className="text-black">Branch Name</p>
              </div>
              <span className="glass-text2">{result.branchName}</span>
            </div>

            <div className="grid grid-cols-[30%_70%] items-center gap-2">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-black" />
                <p className="text-black">Branch Address</p>
              </div>
              <span className="glass-text2">12 Connaught Lane, New Delhi, 12 Connaught Lane, New Delhi, 12 Connaught Lane, New Delhi,</span>
            </div>

            <div className="grid grid-cols-[30%_70%] items-center gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-black" />
                <p className="text-black">State Name</p>
              </div>
              <span className="glass-text2">{result.stateName}</span>
            </div>

            <div className="grid grid-cols-[30%_70%] items-center gap-2">
              <div className="flex items-center gap-2">
                <Type className="w-5 h-5 text-black" />
                <p className="text-black">Pin Type</p>
              </div>
              <span className="glass-text2">{result.pinType}</span>
            </div>
          </div>

          )}
      </div>
      </DialogContent>
    </Dialog>
  );
}

export default Navbar;
