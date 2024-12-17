import { homeAboutCards } from "@/constants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/lib/routes";

const WhyUs = () => {
  const navigate = useNavigate();
  const handleClick = (index) => {
    if (index === homeAboutCards.length - 1) {
      navigate(ROUTES.CONTACT);
    } else if (index === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(ROUTES.SERVICE);
    }
  };
  return (
    <section id="whyUs" className="section px-4">
      <div className="container bg-cardBackground rounded-2xl md:px-8 px-6 py-8 overflow-hidden shadow">
        <div className="max-w-xl space-y-3">
          <p className="card-name">About us</p>
          <h1 className="card-title">WHY US.</h1>
          <p className="card-description">
            Innovative Solutions for Every Journey: From real-time tracking to
            customized logistics plans, we adapt to your needs for maximum
            efficiency and transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
          {homeAboutCards.map(({ image, title, description }, index) => (
            <figure
              key={index}
              onClick={() => handleClick(index)}
              className={`bg-white  border drop-shadow w-full rounded-2xl p-6 space-y-4 hover:bg-primary hover:text-white transition duration-300 group cursor-pointer`}
            >
              <img
                src={image}
                alt={title}
                className="w-16 group-hover:filter group-hover:brightness-0 group-hover:invert transition duration-300"
              />
              <figcaption>
                <h2 className="font-semibold text-2xl">{title}</h2>
                <p className="text-zinc-400 text-sm group-hover:text-white">
                  {description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
