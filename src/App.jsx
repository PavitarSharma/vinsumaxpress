import { Routes, Route, useLocation } from "react-router-dom";
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
const SocialNetwork = lazy(() => import("@/pages/SocialNetwork"));

// Services Page
const MultiModalTransportation = lazy(() =>
  import("@/pages/Services/MultiModalTransportation")
);
const WarehouseSolution = lazy(() =>
  import("@/pages/Services/WarehouseSolution")
);
const PackagingSolution = lazy(() =>
  import("@/pages/Services/PackagingSolution")
);
const ThreePlInventoryManagement = lazy(() =>
  import("@/pages/Services/ThreePlInventoryManagement")
);
const FourPlInplantLogistics = lazy(() =>
  import("@/pages/Services/FourPlInplantLogistics")
);

// Packaging products
const PackagingProducts = lazy(() =>
  import("@/pages/PackagingProducts/PackagingProducts")
);
const PPBox = lazy(() => import("@/pages/PackagingProducts/PPBox"));
const CustomizeWoodenPackagingBox = lazy(() => import("@/pages/PackagingProducts/CustomizeWoodenPackagingBox"));
const FlcFoldable = lazy(() => import("@/pages/PackagingProducts/FlcFoldable"));
const FoldableCratesBin = lazy(() => import("@/pages/PackagingProducts/FoldableCratesBin"));
const MetalFoldableBin = lazy(() => import("@/pages/PackagingProducts/MetalFoldableBin"));
const Pallets = lazy(() => import("@/pages/PackagingProducts/Pallets"));
const PlasticPallets = lazy(() => import("@/pages/PackagingProducts/PlasticPallets"));
const PlsFoldable = lazy(() => import("@/pages/PackagingProducts/PlsFoldable"));
const SteelPallets = lazy(() => import("@/pages/PackagingProducts/SteelPallets"));
const ThermoFormingTrays = lazy(() => import("@/pages/PackagingProducts/ThermoFormingTrays"));
const WireMeshContainer = lazy(() => import("@/pages/PackagingProducts/WireMeshContainer"));
const WoodenPallets = lazy(() => import("@/pages/PackagingProducts/WoodenPallets"));

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
  const { pathname } = useLocation();

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
        {pathname !== ROUTES.SOCIAL_NETWORK && <Navbar />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path={ROUTES.SERVICE} element={<Service />} />
          <Route
            path={ROUTES.MULTIMODAL_TRANSPORTATION}
            element={<MultiModalTransportation />}
          />
          <Route
            path={ROUTES.WAREHOUSE_SOLUTION}
            element={<WarehouseSolution />}
          />
          <Route
            path={ROUTES.PACKAGING_SOLUTION}
            element={<PackagingSolution />}
          />
          <Route
            path={ROUTES.THREEPL_INVENTORY_MANAGEMENT}
            element={<ThreePlInventoryManagement />}
          />
          <Route
            path={ROUTES.FOURPL_INPLANT_LOGISTICS_PROJECT_MANAGEMENT}
            element={<FourPlInplantLogistics />}
          />

          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.MEDIACENTER} element={<MediaCenter />} />
          <Route path={ROUTES.CAREER} element={<Career />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PACKAGING} element={<Packaging />} />
          <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route path={ROUTES.FRANCHISE} element={<Franchise />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path={ROUTES.SOCIAL_NETWORK} element={<SocialNetwork />} />
          <Route
            path={ROUTES.PACKAGING_PRODUCTS}
            element={<PackagingProducts />}
          >
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.PP_BOX}`} element={<PPBox />} />
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.CUSTOMIZE_WOODEN_PACKAGING_BOX}`} element={<CustomizeWoodenPackagingBox />} />
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.FLC_FOLDABLE}`} element={<FlcFoldable />} />
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.FOLDABLE_CRATES_BIN}`} element={<FoldableCratesBin />} />
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.METAL_FOLDABLE_BIN}`} element={<MetalFoldableBin />} />
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.PALLETS}`} element={<Pallets />} />
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.PLASTIC_PALLETS}`} element={<PlasticPallets />} />
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.PLS_FOLDABLE}`} element={<PlsFoldable />} />
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.STEEL_PALLETS}`} element={<SteelPallets />} />
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.THERMOFORMING_TRAYS}`} element={<ThermoFormingTrays />} />
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.WIRE_MESH_CONTAINER}`} element={<WireMeshContainer />} />
            <Route path= {`${ROUTES.PACKAGING_PRODUCTS}${ROUTES.WOODEN_PALLETS}`} element={<WoodenPallets />} />
            
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {pathname !== ROUTES.SOCIAL_NETWORK && <Footer />}

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
            {pathname !== ROUTES.SOCIAL_NETWORK && (
              <button
                type="button"
                className="w-10 h-10 rounded flex items-center justify-center bg-primary text-white hover:drop-shadow-xl hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer fixed bottom-4 right-4 z-50 "
              >
                <MdOutlineChatBubble size={24} />
                <div className="absolute shadow drop-shadow-md w-6 h-6 text-sm rounded-full font-semibold z-10 -top-4 -right-2 bg-primary-foreground text-foreground flex items-center justify-center">
                  1
                </div>
              </button>
            )}
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
