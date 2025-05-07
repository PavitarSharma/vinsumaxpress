import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/routes";
import { LuMoveRight } from "react-icons/lu";
import {
  chairman,
  mission,
  value,
  gallery22,
  vinsumNetworkMap,
  aboutUsHero,
  vinsumRoadMap,
  vision,
} from "@/assets/images";
import {
  leadershipTeams,
  // visnumNetwork
} from "@/constants";
// import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { useEffect } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { growthTrackerVideo } from "@/assets/videos";
import { useRef } from "react";

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    document.title = "About us | Vinsum Axpress";
  }, []);

  useEffect(() => {
    // Create IntersectionObserver for the video section
    const videoSectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          videoRef.current.play(); // Play video when visible
          // setIsPaused(false);
          console.log("play video")
        } else {
          videoRef.current.pause(); // Pause video when out of view
          // setIsPaused(true);
          console.log("pause video")
        }
      },
      { threshold: 0.5 }
    );

    // Target the counter and video sections
    const videoSection = document.querySelector("#videoSection");

    if (videoSection) videoSectionObserver.observe(videoSection);

    // Cleanup observers on unmount
    return () => {
      if (videoSection) videoSectionObserver.unobserve(videoSection);
    };
  }, []);

  return (
    <>
      <section className="py-6">
        <div className="container grid lg:grid-cols-[55%_45%] gap-4 ">
          <div className="lg:order-1 order-1">
            {/* <div className="bg-neutral-200 rounded p-1 px-2 w-fit">
              “Delivering More Than Just Packages.”
            </div> */}
            <h1 className="sm:text-5xl text-5xl font-bold my-4">About Us</h1>
            <div>
              {/* <p className="text-lg">Do you know that</p>
              <ul className="pl-4 list-disc mt-2 space-y-1">
                <li className="">
                  We&#39;ve been the leading logistics company in India for the
                  past 23+ years.
                </li>
                <li>
                  {" "}
                  With 75+ branches, and 53+ warehouses across India, we&#39;ve
                  got you covered.
                </li>
                <li>
                  {" "}
                  integrity, accountability, excellence, and innovation is our
                  mantra.
                </li>
                <li>
                  With a portfolio of over 500+ happy clients, we strive to
                  provide exceptional service and build lasting relationships.
                </li>
                <li>We are hiring. Click the button below to join us.</li>
              </ul> */}
              <p className="text-base">
                At Vinsum Axpress, we’ve been shaping the future of logistics in India for over 23 years—earning a reputation as one of the country’s most trusted and innovative logistics providers. <br/><br/>
                With a robust network of 75+ strategically located branches and 53+ fully equipped warehouses across India, we ensure seamless connectivity and reliable coverage to meet your logistics needs—no matter where you are.  <br/><br/>
                Our commitment is grounded in our core values:
                Integrity. Accountability. Excellence. Innovation.
                These principles guide everything we do—from operations to customer engagement—ensuring we deliver consistent value and superior service.  <br/><br/>
                We’re proud to serve a growing portfolio of 500+ satisfied clients, ranging from dynamic startups to Fortune 100 companies. At Vinsum, we believe in building not just business partnerships but lasting relationships built on trust, performance, and mutual growth. <br/><br/>
                And we’re growing!
                We're always on the lookout for passionate, talented individuals to join our journey.
              </p>
            </div>
            <Link to={ROUTES.CAREER}>
              <Button className="mt-4">
                Join our Vinsum family <LuMoveRight size={18} />
              </Button>
            </Link>
          </div>

          <figure className="lg:order-2 order-2 h-full w-full mt-8">
            <img
              src={aboutUsHero}
              alt="vinsum-warehouse"
              className="rounded-2xl h-full brightness-90 shadow-xl object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="py-6 mt-8">
        <div className="container mt-4">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl">
            OUR JOURNEY
          </div>
          <div className="w-full aspect-video h-[465px] overflow-hidden mt-16 rounded-md">
            <video
              ref={videoRef}
              muted
              autoPlay
              loop
              playsInline
              title="Growth Track"
              className="w-full h-full object-fill block overflow-hidden mt-5"
              style={{
                clipPath: 'inset(13px 1px)',
              }}
            >
              <source src={growthTrackerVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-12">
          OUR GOALS
        </div>
        <div
          className="bg-gray-100 bg-cover bg-no-repeat bg-center bg-fixed min-h-[50vh] h-full flex items-center justify-center"
        >
          <div className="container flex items-center justify-center h-full relative">
            <HighlightCards />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-12">
            Chairman & Managing Director
          </div>

          <div className="bg-cardBackground">
            <div className="relative lg:py-8 pb-8  grid lg:grid-cols-2  my-4 mt-8">
              <div className="w-full px-4 relative flex items-center justify-center flex-col py-32">
                <div className="bg-[#DEDEDE] lg:h-[530px] w-1/2 absolute lg:right-0 -right-4 top-0 bottom-0 border-b-8 border-primary">
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden lg:flex flex-col w-full items-center justify-center">
                    <p>Mr. Vinod Sharma</p>
                    <p className="font-bold mb-1">Chairman & Managing Director</p>
                    <button className="bg-sky-600 hover:bg-sky-700 text-white text-center justify-self-center py-2 rounded-md border border-sky-600 px-4 rounded inline-flex items-center justify-center">
                      <p className="flex items-center text-lg">Connect on LinkedIn</p>
                      <div className="bg-white text-sky-600 p-1 ms-2 flex items-center justify-center">
                        <FaLinkedinIn />
                      </div>
                    </button>
                  </div>
                </div>

                <div className=" flex flex-col gap-8 lg:p-4 lg:pt-0 pt-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-6">
                  <div className="h-[380px] w-[350px] border-8 border-white rounded relative">
                    <img
                      src={chairman}
                      alt="chairman"
                      className="w-full h-full object-cover"
                    />
                    <div className="w-4 h-10 bg-primary absolute -right-6 -z-1 bottom-8"></div>
                  </div>
                </div>

                <div className="lg:hidden absolute bottom-2 bg-gray-100 left-1/2 -translate-x-1/2 flex flex-col w-full items-center justify-center p-2 bg-gradient-to-r from-cardBackground to-[#dedede]">
                    <p>Mr. Vinod Sharma</p>
                    <p className="font-bold mb-1">Chairman & Managing Director</p>
                    <button className="bg-sky-600 hover:bg-sky-700 text-white text-center justify-self-center py-2 rounded-md border border-sky-600 px-4 rounded inline-flex items-center justify-center">
                      <p className="flex items-center text-lg">Connect on LinkedIn</p>
                      <div className="bg-white text-sky-600 p-1 ms-2 flex items-center justify-center">
                        <FaLinkedinIn />
                      </div>
                    </button>
                  </div>
              
              </div>

              <div className="w-full relative  flex flex-col justify-center p-4 px-8">
                <div className="relative lg:pt-20 pt-10">
                  <p className="text-3xl leading-relaxed relative text-black font-bold">Welcome to Vinsum Axpress</p>
                  <p className="text-2xl leading-relaxed relative before:content-[''] before:absolute before:lg:-left-16 before:-left-12 before:top-5 before:lg:w-14 before:w-10 before:h-[1px] before:bg-black">
                    Join us on a remarkable journey of growth, innovation, and excellence. At Vinsum Axpress, we believe in the power of collaboration to drive success
                    <strong> — for our business, our partners, and our clients.</strong>
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 pt-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-3 h-3 bg-black mt-2"></div>
                    <p className="flex-1">
                      On behalf of the entire Vinsum Axpress team, I extend a warm welcome and sincere gratitude to our valued customers for their continued support, especially during our formative years. Your trust has been the foundation of our progress.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-3 h-3 bg-black mt-2"></div>
                    <p className="flex-1">
                      Vinsum Axpress is committed to delivering cost-effective, reliable, and scalable transportation and logistics solutions. Our comprehensive offerings include: <br/>
                      ♦ Surface Transportation <br/>
                      ♦ Warehouse Management <br/>
                      ♦ Global Freight Forwarding <br/>
                      ♦ Express Distribution <br/>
                      ♦ 3PL & 4PL Logistics Solutions <br/>
                      ♦ Specialized Packaging Services
                    </p>
                    <p></p>
                  </div>

                  <div className="flex gap-4 items-start md:hidden">
                    <div className="w-3 h-3 bg-black mt-2"></div>
                    <p className="flex-1">
                      We are proud to be a preferred logistics partner for several Fortune 100 automobile companies and a trusted contributor to the modernization of India’s logistics ecosystem. Our focus remains on delivering value, fostering long-term partnerships, and continuously enhancing service quality through innovation and technology.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start md:hidden">
                    <div className="w-3 h-3 bg-black mt-2"></div>
                    <p className="flex-1">
                      With over 23 years of cross-industry experience, we have cultivated a deep understanding of complex supply chain dynamics. Our solutions are tailored to maximize efficiency, reduce operational costs, and ensure end-to-end visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hidden md:flex ms-24 w-[65%] items-start relative"
              style={{ top: -150 }}
            >
              <div className="w-3 h-3 bg-black mt-2 me-5"></div>
              <p className="flex-1">
                We are proud to be a preferred logistics partner for several Fortune 100 automobile companies and a trusted contributor to the modernization of India’s logistics ecosystem. Our focus remains on delivering value, fostering long-term partnerships, and continuously enhancing service quality through innovation and technology. With over 23 years of cross-industry experience, we have cultivated a deep understanding of complex supply chain dynamics. Our solutions are tailored to maximize efficiency, reduce operational costs, and ensure end-to-end visibility.
              </p>
            </div>
            <p className="w-full text-center font-semibold text-base" >Thank you for being a part of the Vinsum Axpress journey.</p>
            <br/><br/>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="mb-8 space-y-4">
            <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-5 text-3xl font-semibold rounded-tr-3xl rounded-bl-3xl">
              LEADERSHIP TEAM
            </div>

            <p className="sm:w-full text-center text-neutral-500 mx-auto md:px-40">
              Our dynamic team is driven by curiosity and innovation—constantly challenging conventions, embracing bold ideas, and pushing boundaries to unlock creativity and deliver forward-thinking solutions at every step.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {leadershipTeams.map(
              (
                {
                  image,
                  name,
                  position,
                  // twitter,
                  // instagram,
                  linkedin,
                },
                index
              ) => (
                <div>
                  <figure className="relative w-48 h-48 mx-auto mb-4">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute left-1/2 top-1/2 translate-x-[148%] translate-y-[148%] rounded-full bg-blue-600">
                      <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-white text-4xl p-2" />
                      </a>
                    </div>
                  </figure>
                  <p className="text-center font-semibold text-lg">{name}</p>
                  <p className="text-center text-base text-gray-400">{position}</p>
                </div>
                // <Card key={index}>
                //   <CardHeader>
                    
                //     <CardTitle className="text-center">{name}</CardTitle>
                //     <CardDescription className="text-center">
                //       {position}
                //     </CardDescription>
                //   </CardHeader>

                //   <CardFooter>     
                //     <div className="w-full text-center">
                //       <button className="bg-sky-600 hover:bg-sky-700 text-white text-center justify-self-center py-2 rounded-md border border-sky-600 px-4 rounded inline-flex items-center justify-center">
                //         <p className="flex items-center text-base">Connect on LinkedIn</p>
                //         <div className="bg-white text-sky-600 p-1 ms-2 flex items-center justify-center">
                //           <FaLinkedinIn />
                //         </div>
                //       </button>
                //     </div>
                //   </CardFooter>
                // </Card>
              )
            )}
          </div>
        </div>
      </section>

      <section className="pt-8 pb-10">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-12">
            Head Office
          </div>
          <iframe
            width="100%"
            height="450"
            className="rounded-xl min-h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.331930702625!2d77.07176171492016!3d28.49965948247041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196bf692d653%3A0xd9f2347ba1687ed8!2sVinsum%20Axpress!5e0!3m2!1sen!2sin!4v1592554030727!5m2!1sen!2sin"
          ></iframe>
        </div>
      </section>
    </>
  );
};

const cardData = [
  {
    title: "MISSION",
    image: mission,
    text: `Our mission is to redefine logistics and supply chain management in India by delivering end- to-end solutions that are seamless, reliable, and tailored to the unique needs of our clients. Through the integration of advanced technology, a dedicated workforce, and sustainable practices, we aim to create value for businesses, contribute to their growth, and support India’s economic development.`,
  },
  {
    title: "VISION",
    image: vision,
    text: `To establish Vinsum Axpress as the leading logistics, supply chain, warehousing, and packaging solutions provider in India, renowned for our innovative services, operational excellence, and unwavering commitment to empowering businesses across diverse industries.`,
  },
  {
    title: "VALUE",
    image: value,
    text: `At Vinsum Axpress, we are committed to delivering customer-focused solutions with integrity, innovation, and sustainability. By embracing technology and fostering collaboration, we ensure reliable, eco-friendly practices that drive growth for our clients and India’s logistics and supply chain sector.`,
  },
];


function HighlightCards() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % cardData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-fit">
      {cardData.map((card, index) => (
        <Dialog key={card.title}>
          <DialogTrigger asChild>
            <figure
              className={`relative rounded-xl p-4 cursor-pointer transition-all duration-700 ${
                highlightedIndex === index
                  ? "bg-red-600 text-white shadow-xl scale-105"
                  : "bg-white text-black"
              }`}
            >
              <div
                className={`absolute -top-6 -left-4 w-16 h-16 rounded-full border-[3px] ${
                  highlightedIndex === index
                    ? "border-white bg-black"
                    : "border-black bg-white"
                }`}
              >
              <img
                    src={card.image}
                    alt={card.title}
                    className={`w-full h-full p-2 transition-all duration-300 ${
                      highlightedIndex === index && card.title !== "VISION" ? "filter invert" : ""
                    }`}
                />
              </div>
              <h3 className="text-center font-semibold text-lg">{card.title}</h3>
              <p className="text-sm mt-2 line-clamp-4">{card.text}</p>
            </figure>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>{card.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground">
              <img src={card.image} alt={card.title} className="w-12 h-12" />
              <p>{card.text}</p>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}


export default About;
