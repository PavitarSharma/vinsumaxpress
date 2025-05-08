import Hero from "@/pages/Home/sections/Hero";
import OurValues from "@/pages/Home/sections/OurValues";
import WhyUs from "@/pages/Home/sections/WhyUs";
import OurService from "@/pages/Home/sections/OurService";
import OurJourney from "@/pages/Home/sections/OurJourney";
import OurClients from "@/pages/Home/sections/OurClients";
import FranchisePopup from "@/pages/Home/sections/FranchisePopup";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

const Home = () => {
  const [showFranchisePopup, setShowFranchisePopup] = useState(false);

  useEffect(() => {
    document.title = "Home | Vinsum Axpress";
  }, []);

  useEffect(() => {
    const isFranchisePopup = sessionStorage.getItem("showFranchisePopup");

    if (!isFranchisePopup) {
      setShowFranchisePopup(true);
      sessionStorage.setItem("showFranchisePopup", true);
    }
  }, []);

  return (
    <>
      <Dialog open={showFranchisePopup} onOpenChange={setShowFranchisePopup}>
        <DialogContent className="max-w-4xl bg-primary">
          <FranchisePopup />
        </DialogContent>
      </Dialog>
      <Hero />
      <OurValues />
      <WhyUs />
      <OurJourney />
      <OurService />
      <OurClients />
    </>
  );
};

export default Home;
