import { FaFacebookF, FaLinkedin, FaYoutube, FaInstagram, FaGlobe, FaSignInAlt } from "react-icons/fa";
import { BsThreadsFill } from "react-icons/bs";
import { companyDetail } from "@/constants";


export default function SocialSidebar() {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-end space-y-4 z-50">
      {/* Social icons */}
      <div className="flex flex-col space-y-1 sm:block hidden">
        <SocialButton icon={<FaFacebookF />} label="Facebook" bgColor="bg-blue-600" link={companyDetail.facebook} />
        <SocialButton icon={<FaLinkedin />} label="Linkedin" bgColor="bg-sky-600" link={companyDetail.linkedin} />
        <SocialButton icon={<FaInstagram />} label="Instagram" bgColor="bg-pink-600" link={companyDetail.instagram} />
        <SocialButton icon={<FaYoutube />} label="Youtube" bgColor="bg-red-600" link={companyDetail.youtube} />
        <SocialButton icon={<BsThreadsFill />} label="Threads" bgColor="bg-gray-600" link={companyDetail.thread} />
      </div>

       {/* HRMS icon */}
      <div className="mt-8 space-y-1 flex flex-col">
        <SocialButton icon={<FaSignInAlt /> } label="HRMS" bgColor="bg-gray-600" link="https://hrms.vinsumaxpress.com/Default.aspx" />
        <SocialButton icon={<FaGlobe /> } label="ERP" bgColor="bg-gray-600" link="http://ggco.vinsumaxpress.com" />
      </div>

    </div>
  );
}

function SocialButton({ icon, label, bgColor, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-end overflow-hidden"
    >
      <div
        className={`flex items-center p-3 text-white ${bgColor} rounded-l-lg hover:w-36 transition-all duration-300 ease-in-out w-10`}
      >
        <span className="text-lg">{icon}</span>
        <span className="ml-4 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
          {label}
        </span>
      </div>
    </a>
  );
}