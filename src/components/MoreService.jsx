import { homeServices } from "@/constants";
import { Link } from "react-router-dom";

const MoreService = () => {
  return (
    <section className="section bg-neutral-100">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold">More Service</h3>
          <p className="max-w-xl w-full text-center text-sm my-4 opacity-80">
            <strong>Vinsum Axpress</strong> is dedicated to providing logistics solutions tailored to the needs of Indian industries, with a strong focus on customer satisfaction—fostering mutual growth in a win-win partnership.
          </p>
        </div>
        <div className="grid mt-8 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-6 max-w-screen-lg mx-auto">
          {homeServices.map(({ title, image, href }, index) => (
            <Link
              to={href}
              key={index}
              className="space-y-3 group cursor-pointer block"
            >
              <div className="w-28 h-28  border-[3px] p-3 border-white rounded-full mx-auto">
                <img
                  src={image}
                  alt={title}
                  className="object-contain p-2 brightness-0"
                />
              </div>
              <h2 className="font-semibold text-center text-sm mx-auto max-w-[150px] w-full group-hover:text-primary">
                {title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreService;
