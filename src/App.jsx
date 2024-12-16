import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { MdOutlineChatBubble } from "react-icons/md";

/**
 * @pages
 */
import Home from "@/pages/Home/Home";
import Service from "@/pages/Service";
import About from "@/pages/About";
import MediaCenter from "@/pages/MediaCenter";
import Career from "@/pages/Career";
import Contact from "@/pages/Contact";
import PrivacyPloicy from "@/pages/PrivacyPolicy";
import Packaging from "@/pages/Packaging";
import Franchise from "@/pages/Franchise";
import BlogDetail from "@/pages/BlogDetail/BlogDetail";

/**
 * @components
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ROUTES } from "@/lib/routes";
import ScrollToTop from "@/lib/ScrollToTop";
import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

const App = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  const handleShowScrollIcon = () => {
    window.scrollY >= 1200 ? setShowScrollIcon(true) : setShowScrollIcon(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowScrollIcon);
    return () => {
      window.removeEventListener("scroll", handleShowScrollIcon);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path={ROUTES.SERVICE} element={<Service />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.MEDIACENTER} element={<MediaCenter />} />
        <Route path={ROUTES.CAREER} element={<Career />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.PACKAGING} element={<Packaging />} />
        <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPloicy />} />
        <Route path={ROUTES.FRANCHISE} element={<Franchise />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
      {/* Additional routes can be added here */}

      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />

      {showScrollIcon && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded flex items-center justify-center bg-primary text-white hover:drop-shadow-xl hover:shadow-xl ease-in-out cursor-pointer fixed bottom-16 right-4 z-50 animate-bounce duration-2000"
        >
          <LuArrowUp size={26} />
        </button>
      )}

      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="w-10 h-10 rounded flex items-center justify-center bg-primary text-white hover:drop-shadow-xl hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer fixed bottom-4 right-4 z-50 "
          >
            <MdOutlineChatBubble size={24} />
          </button>
        </PopoverTrigger>
        <PopoverContent align="end" className="min-[576px]:w-[400px] w-[300px] p-0">
          <ChatBot />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default App;
