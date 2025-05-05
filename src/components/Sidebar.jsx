import { FaFacebookF, FaLinkedin, FaYoutube, FaInstagram, FaGlobe, FaSignInAlt } from "react-icons/fa";
import { BsThreadsFill } from "react-icons/bs";
import { companyDetail } from "@/constants";

export default function SocialSidebar() {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-end space-y-4 z-50">
       {/* HRMS icon */}
      <div className="space-y-1 flex flex-col mb-8 sm:block hidden">
        {/* <SocialButton icon={<FaSignInAlt /> } label="HRMS" bgColor="bg-primary" link="https://hrms.vinsumaxpress.com/Default.aspx" width="w-32" opacity="opacity-100" /> */}
        <SocialButton icon={<FaGlobe /> } label="ERP Login" bgColor="bg-primary" link="http://ggco.vinsumaxpress.com" width="w-32" opacity="opacity-100" />
      </div>

      {/* Social icons */}
      <div className="flex flex-col space-y-1  sm:block hidden">
        <SocialButton icon={<FaFacebookF />} label="Facebook" bgColor="bg-gradient-to-r from-[#0B53B0] to-[#3390FF]" link={companyDetail.facebook} width="" opacity="opacity-0" />
        <SocialButton icon={<FaLinkedin />} label="Linkedin" bgColor="bg-gradient-to-r from-[#004182] to-[#0A66C2]" link={companyDetail.linkedin} width="" opacity="opacity-0" />
        <SocialButton icon={<FaInstagram />} label="Instagram" bgColor="bg-gradient-to-r from-[#DD2A7B] to-[#F58529]" link={companyDetail.instagram} width="" opacity="opacity-0" />
        <SocialButton icon={<FaYoutube />} label="Youtube" bgColor="bg-gradient-to-r from-[#BB0000] to-[#FF0000]" link={companyDetail.youtube} width="" opacity="opacity-0" />
        <SocialButton icon={<BsThreadsFill />} label="Threads" bgColor="bg-gradient-to-r from-[#111111] to-[#444444]" link={companyDetail.thread} width="" opacity="opacity-0" />
      </div>

    </div>
  );
}

function SocialButton({ icon, label, bgColor, link, width, opacity }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-end overflow-hidden"
    >
      <div
        className={`flex items-center p-3 text-white ${bgColor} ${width} rounded-l-lg hover:w-32 transition-all duration-300 ease-in-out w-10`}
      >
        <span className="text-base">{icon}</span>
        <span className={`ml-2 ${opacity} group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300`}>
          {label}
        </span>
      </div>
    </a>
  );
}