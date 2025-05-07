import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { growthTrackerVideo, growthTrackerVideoMob } from "@/assets/videos";

const OurJourney = () => {
  const [isCounterSectionVisible, setIsCounterSectionVisible] = useState(false);
  const videoRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    // Create IntersectionObserver for the counter section
    const counterSectionObserver = new IntersectionObserver(
      ([entry]) => {
        console.log("INSIDE OBSERVE")
        if (entry.isIntersecting) {
          setIsCounterSectionVisible(true); // Start counter animation
          console.log("start counter")
          counterSectionObserver.disconnect()
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
    const counterSection = document.querySelector("#counterSection");
    const videoSection = document.querySelector("#videoSection");

    if (videoSection) videoSectionObserver.observe(videoSection);

    if (countRef.current) {
      console.log("observe with ref")
      counterSectionObserver.observe(countRef.current);
    }

    // Cleanup observers on unmount
    return () => {
      if (videoSection) videoSectionObserver.unobserve(videoSection);

      if (countRef.current) {
        console.log("unobserve")
        counterSectionObserver.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <section id="ourJourney" className="section px-4">
      <div className="bg-cardBackground rounded-2xl  overflow-hidden shadow">
        <div className="w-full flex md:flex-row flex-col rounded-2xl">
          <div className="bg-primary md:py-4 py-8 text-white text-center flex items-center justify-center">
            <p className="md:text-5xl text-4xl font-bold text-text text-white justify-self-center	leading-tight uppercase">
              Behind the Success
            </p>
          </div>
          <div className="md:w-2/3 w-full bg-black text-white md:py-6 py-10 px-4 flex gap-16 flex-wrap items-center justify-center" ref={countRef} >
              <VinsumCountUp  ref={countRef} total={700} title="Current Workforce" start={isCounterSectionVisible} />
              <VinsumCountUp  ref={countRef} total={60} title="Office Locations" start={isCounterSectionVisible} />
              <VinsumCountUp  ref={countRef} total={23} title="Years Experience" start={isCounterSectionVisible} />
              <VinsumCountUp  ref={countRef} total={500} title="Happy Clients" start={isCounterSectionVisible} />
            </div>
        </div>

        <div className="my-8 text-center">
          <h2 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-700 to-red-500 animate-text-gradient bg-[length:200%_200%]">
            Our Journey
          </h2>
        </div>

          <div className="w-full aspect-video h-[220px] overflow-hidden bg-transparent">
            <video
              ref={videoRef}
              muted
              autoPlay
              loop
              playsInline
              title="Growth Track"
              className="w-full h-full object-fill block overflow-hidden"
              style={{
                clipPath: 'inset(12px 1px)',
              }}
            >
              <source src={growthTrackerVideoMob} type="video/mp4" />
            </video>
          </div>
      </div>
    </section>
  );
};

const VinsumCountUp = ({ total, title, start }) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <h3 className="text-5xl font-bold text-white">
        {start ? <CountUp end={total} duration={2} /> : 0}+
      </h3>
      <p className="text-base text-text text-white">{title}</p>
    </div>
  );
};

export default OurJourney;
