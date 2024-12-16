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
      <div className="container bg-cardBackground rounded-2xl md:px-8 px-6 py-8 overflow-hidden shadow">
        <div className="max-w-xl space-y-3">
          <p className="card-name">Our journey</p>
          <h1 className="card-title">
            <span className="text-primary">Vinsum</span> Is One Of The Best
            Shipping And Logistics Companies.
          </h1>
          <p className="card-description">
            For the past two decades, Vinsum has proudly established itself as a
            leader in the logistics industry, consistently delivering excellence
            and innovative solutions.
          </p>
        </div>

        <div className="my-8 flex gap-8 flex-wrap">
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">
              <CountUp end={700} duration={2} />+
            </h3>
            <p className="text-sm text-text">Current Workforce</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">
              <CountUp end={60} duration={2} />+
            </h3>
            <p className="text-sm text-text">Office Locations</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">
              <CountUp end={23} duration={2} />+
            </h3>
            <p className="text-sm text-text">Years Experience</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">
              <CountUp end={500} duration={2} />+
            </h3>
            <p className="text-sm text-text">Happy Clients</p>
          </div>
        </div>

        <div className="relative lg:aspect-auto lg:h-[400px] aspect-video w-full">
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

export default OurJourney;
