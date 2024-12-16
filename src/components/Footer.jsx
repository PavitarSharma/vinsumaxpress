import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { ROUTES } from "@/lib/routes";
import { companyDetail } from "@/constants";
import { qrCode } from "@/assets/images";

const Footer = () => {
  const menuLink =
    "hover:text-primary text-sm text-text transition duration-300";
  return (
    <footer className="px-4">
      <div className="container bg-cardBackground shadow p-8 py-14 rounded-lg my-10">
        <div className="flex flex-col mx-auto items-center justify-center gap-10 w-full">
          <h1 className="antialiased tracking-normal text-base text-center w-full">
            Unlock Tech driven solutions on the go—download our app from the{" "}
            <span className="text-primary">Play Store!</span>
          </h1>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://play.google.com/store/apps/developer?id=Vinsum&hl=en_IN"
              target="_blank"
            >
              <Button size="lg">
                {" "}
                DOWNLOAD APP
                <LuArrowRight />
              </Button>
            </a>

            <Link to={ROUTES.PRIVACY_POLICY}>
              <Button size="lg" variant="outline">
                Privacy (Data) Policy
                <LuArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <Separator className="my-8 bg-neutral-300" />

        <div className="grid md:grid-cols-5 sm:grid-cols-2  gap-6">
          <div className="sm:col-span-2 ">
            <div className="flex items-center gap-1">
              <img
                src="/logo.png"
                alt="logo"
                className="w-8 h-8 object-contain"
              />
              <h1 className="text-3xl font-bold">
                <span className="text-primary">VIN</span>SUM
              </h1>
            </div>

            <p className="text-lg antialiased font-semibold tracking-wider text-black my-2 max-w-sm w-full">
              Vinsum Axpress India Private Limited.
            </p>
            <div className="bg-black rounded p-0 px-1 w-fit">
              <p className="text-sm tantialiased my-2 max-w-sm w-full tracking-wider text-white">
                Delivering Satisfaction Around The Globe
              </p>
            </div>
            <div className="py-2 max-w-sm w-full">
              <a
                href="tel:1800-833-3513"
                className="flex gap-2 items-center text-sm text-text my-4 hover:text-primary transition duration-300"
              >
                <FaPhoneAlt size={18} />
                1800-833-3513
              </a>
              <a
                href="mailto:care@vinsumaxpress.com"
                className="flex gap-2 items-center text-sm text-text my-4 hover:text-primary transition duration-300"
              >
                <MdMail size={18} />
                care@vinsumaxpress.com
              </a>

              <div
                href="mailto:care@vinsumaxpress.com"
                className="flex gap-2 text-sm text-text my-4 hover:text-primary transition duration-300"
              >
                <FaMapMarkedAlt size={18} />
                <span className="flex-1 text-sm">
                  404- Electronic City, Udyog Vihar, Phase IV, Sector 18,
                  Gurugram, 122015.
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Menu</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link to="/" className={menuLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className={menuLink}>
                  About us
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICES} className={menuLink}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CAREER} className={menuLink}>
                  Career
                </Link>
              </li>
              <li>
                <Link to={ROUTES.MEDIACENTER} className={menuLink}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} className={menuLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link to="#" className={menuLink}>
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to={ROUTES.MEDIACENTER} className={menuLink}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className={menuLink}>
                  Terms
                </Link>
              </li>
              <li>
                <Link to={ROUTES.PRIVACY_POLICY} className={menuLink}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="#" className={menuLink}>
                  Licenses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <figure className="w-fit">
              <img
                src={qrCode}
                alt="qr-code"
                className="md:w-auto md:h-auto w-40 h-40 object-contain"
              />
              {/* <figcaption className="text-xs text-text text-center">
                Scan this QR code to download our app
              </figcaption> */}
            </figure>

            {/* <h3 className="font-semibold">Social Media</h3>
             */}
          </div>
        </div>

        <div className="flex sm:flex-row flex-col-reverse justify-between">
          <p className="mt-8 text-sm text-zinc-600">
            © Copyright 2024
            <span className="text-primary ml-1 font-medium">
              Vinsum Axpress
            </span>
            . All Rights Reserved
          </p>
          <ul className="mt-2 flex items-center md:justify-center gap-4 flex-wrap">
            <li>
              <a
                href={companyDetail.facebook}
                target="_blank"
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-primary hover:text-white transition duration-300 focus:bg-primary focus:text-white`}
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href={ROUTES.MEDIACENTER}
                target="_blank"
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-primary hover:text-white transition duration-300 focus:bg-primary focus:text-white`}
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href={companyDetail.linkedin}
                target="_blank"
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-primary hover:text-white transition duration-300 focus:bg-primary focus:text-white`}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href={companyDetail.twitter}
                target="_blank"
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-primary hover:text-white transition duration-300 focus:bg-primary focus:text-white`}
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href={companyDetail.youtube}
                target="_blank"
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-primary hover:text-white transition duration-300 focus:bg-primary focus:text-white`}
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
