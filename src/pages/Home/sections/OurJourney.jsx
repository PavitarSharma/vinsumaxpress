import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { growthTrackerVideo } from "@/assets/videos";

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
          {/* <div className="w-2/3 bg-black">
            <div className="my-8 flex gap-8 flex-wrap">
              <VinsumCountUp total={700} title="Current Workforce" />
              <VinsumCountUp total={60} title="Office Locations" />
              <VinsumCountUp total={23} title="Years Experience" />
              <VinsumCountUp total={500} title="Happy Clients" />
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

        <div className="my-8 text-center text-4xl antialiased tracking-wider text-red-600 rounded px-6 py-2.5 font-semibold justify-self-center w-100 h-16">
          Our Journey
        </div>

        <div className="w-full aspect-video h-[400px]">
          <video
            ref={videoRef}
            muted
            autoPlay
            loop
            playsInline
            title="Growth Track"
            className="w-full h-full object-fill block"
          >
            <source src={growthTrackerVideo} type="video/mp4" />
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
