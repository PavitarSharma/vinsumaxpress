import Hero from "@/pages/Home/sections/Hero";
import OurValues from "@/pages/Home/sections/OurValues";
import WhyUs from "@/pages/Home/sections/WhyUs";
import OurService from "@/pages/Home/sections/OurService";
import OurJourney from "@/pages/Home/sections/OurJourney";
import OurClients from "@/pages/Home/sections/OurClients";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Vinsum Axpress";
  }, []);
  
  return (
    <>
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
