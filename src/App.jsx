import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { MdOutlineChatBubble } from "react-icons/md";
import { lazy, Suspense, useEffect, useState } from "react";

/**
 * @pages
 */
const Home = lazy(() => import("@/pages/Home/Home"));
const Service = lazy(() => import("@/pages/Service"));
const About = lazy(() => import("@/pages/About"));
const MediaCenter = lazy(() => import("@/pages/MediaCenter"));
const Career = lazy(() => import("@/pages/Career"));
const Contact = lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const Packaging = lazy(() => import("@/pages/Packaging"));
const Franchise = lazy(() => import("@/pages/Franchise"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail/BlogDetail"));
const NotFound = lazy(() => import("@/pages/404"));

/**
 * @components
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import LoadingPopup from "@/components/LoadingPopup";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ROUTES } from "@/lib/routes";
import ScrollToTop from "@/lib/ScrollToTop";
import { LuArrowUp } from "react-icons/lu";

const App = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [showLoadingPopup, setShowLoadingPopup] = useState(false);

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

  useEffect(() => {
    const isShowLoadingPopup = sessionStorage.getItem("showLoadingPopup");

    if (!isShowLoadingPopup) {
      setShowLoadingPopup(true);
      const timer = setTimeout(() => {
        setShowLoadingPopup(false);
        sessionStorage.setItem("showLoadingPopup", true);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (showLoadingPopup) {
    return <LoadingPopup />;
  }

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div></div>}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path={ROUTES.SERVICE} element={<Service />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.MEDIACENTER} element={<MediaCenter />} />
          <Route path={ROUTES.CAREER} element={<Career />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PACKAGING} element={<Packaging />} />
          <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route path={ROUTES.FRANCHISE} element={<Franchise />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

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
          <PopoverContent
            align="end"
            className="min-[576px]:w-[400px] w-[300px] p-0"
          >
            <ChatBot />
          </PopoverContent>
        </Popover>
      </Suspense>
      {/* Additional routes can be added here */}

      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
};

export default App;
