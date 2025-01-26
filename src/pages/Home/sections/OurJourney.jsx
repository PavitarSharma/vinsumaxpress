import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { growthTrackerVideo } from "@/assets/videos";

const OurJourney = () => {
  const [, setIsCounterSectionVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Create IntersectionObserver for the counter section
    const counterSectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCounterSectionVisible(true); // Start counter animation
        }
      },
      { threshold: 0.5 }
    );

    // Create IntersectionObserver for the video section
    const videoSectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          videoRef.current.play(); // Play video when visible
          // setIsPaused(false);
        } else {
          videoRef.current.pause(); // Pause video when out of view
          // setIsPaused(true);
        }
      },
      { threshold: 0.5 }
    );

    // Target the counter and video sections
    const counterSection = document.querySelector("#counterSection");
    const videoSection = document.querySelector("#videoSection");

    if (counterSection) counterSectionObserver.observe(counterSection);
    if (videoSection) videoSectionObserver.observe(videoSection);

    // Cleanup observers on unmount
    return () => {
      if (counterSection) counterSectionObserver.unobserve(counterSection);
      if (videoSection) videoSectionObserver.unobserve(videoSection);
    };
  }, []);

  return (
    <section id="ourJourney" className="section px-4">
      <div className="bg-cardBackground rounded-2xl  overflow-hidden shadow">
        <div className="w-full  flex md:flex-row flex-col rounded-2xl">
          <div className="bg-primary md:py-4 py-8 text-white text-center flex items-center justify-center">
            <p className="md:text-5xl text-4xl font-bold text-text text-white justify-self-center	leading-tight">
              VINSUM IN NUMBERS
            </p>
          </div>
          <div className="md:w-2/3 w-full bg-black text-white md:py-6 py-10 px-4 flex gap-8 flex-wrap items-center justify-center">
              <VinsumCoutup total={700} title="Current Workforce" />
              <VinsumCoutup total={60} title="Office Locations" />
              <VinsumCoutup total={23} title="Years Experience" />
              <VinsumCoutup total={500} title="Happy Clients" />
            </div>
          {/* <div className="w-2/3 bg-black">
            <div className="my-8 flex gap-8 flex-wrap">
              <VinsumCoutup total={700} title="Current Workforce" />
              <VinsumCoutup total={60} title="Office Locations" />
              <VinsumCoutup total={23} title="Years Experience" />
              <VinsumCoutup total={500} title="Happy Clients" />
            </div>
          </div> */}
        </div>

        {/* <div className="max-w-xl space-y-3">
          <p className="text-lg text-red-600">Our journey</p>
          <h1 className="card-title">
            <span className="text-primary">Vinsum</span> Is One Of The Best
            Shipping And Logistics Companies.
          </h1>
          <p className="card-description">
            For the past two decades, Vinsum has proudly established itself as a
            leader in the logistics industry, consistently delivering excellence
            and innovative solutions.
          </p>
        </div> */}

        <div className="my-8 text-center text-base antialiased  tracking-wider text-red-600 bg-background rounded px-6 py-2.5 font-semibold justify-self-center">
          Our Journey
        </div>

        <div className="relative lg:aspect-auto lg:h-[600px] aspect-video w-full">
          <video
            ref={videoRef}
            muted
            autoPlay
            title="Growth Track"
            className="w-full h-full object-cover"
          >
            <source src={growthTrackerVideo} type="video/mp4" />
          </video>
          <div className="absolute  right-0 top-0 bottom-0 bg-cardBackground w-1 z-10 h-full"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-cardBackground h-2"></div>
        </div>
      </div>
    </section>
  );
};

const VinsumCoutup = ({ total, title }) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <h3 className="text-4xl font-bold text-white">
        <CountUp end={total} duration={2} />+
      </h3>
      <p className="text-base text-text text-white">{title}</p>
    </div>
  );
};

export default OurJourney;
