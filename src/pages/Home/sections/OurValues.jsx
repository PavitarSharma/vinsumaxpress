import { homeOurValues, homeServices } from "../../../constants";
import { useMediaQuery } from "react-responsive";

const OurValues = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 640px)",
  });
  return (
    <>
      <section id="ourValues" className="section">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-8">
            Our Values
          </div>

          <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-y-6 max-w-screen-lg mx-auto">
            {homeOurValues.map(({ title, image }, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-col gap-2"
              >
                <h2
                  className={`text-lg font-semibold 
                    ${isDesktop && index % 2 === 0 ? "text-primary" : ""}
                    ${
                      !isDesktop && (index === 0 || index === 3 || index === 4)
                        ? "text-primary"
                        : ""
                    }`}
                >
                  {title}
                </h2>
                <div className="w-28 h-28 border-[6px] p-1 border-primary rounded-full">
                  <img
                    src={image}
                    alt={title}
                    className="rounded-full p-1 border-[3px] border-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-primary py-10">
        <div className="container">
          <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-6 max-w-screen-lg mx-auto">
            {homeServices.map(({ title, image }, index) => (
              <div key={index} className="text-primary-foreground space-y-3">
                <div className="w-28 h-28  border-[3px] p-3 border-white rounded-full mx-auto">
                  <img src={image} alt={title} className="object-contain p-2" />
                </div>
                <h2 className="font-semibold text-center text-base mx-auto max-w-[150px] w-full">
                  {title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default OurValues;
