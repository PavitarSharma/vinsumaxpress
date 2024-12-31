import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { socialsLinks } from "../constants";

const SocialNetwork = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <Card className="sm:w-[550px] w-full  mx-auto bg-[#ffffff]" style={
      {"background":"linear-gradient(90deg, rgba(211, 226, 249, .5) 22%, rgba(229, 241, 255, .5) 39%, rgba(229, 241, 255, .5) 68%, rgba(211, 226, 249, .5) 81%)"}
    }>
        <CardContent className="flex flex-col items-center justify-center space-y-4 py-6 px-4">
          <img src="/logo.png" alt="logo" className="w-44" />
          <div className="items-center justify-center flex flex-col">
            <h1 className="text-8xl font-bold text-center">
              <span className="text-primary">VIN</span>
              <span>SUM</span>
            </h1>
            <h3 className="text-base tantialiased text-center antialiased font-semibold tracking-wider text-black my-2 max-w-sm w-full">
              Vinsum Axpress India Private Limited.
            </h3>
            <div className="bg-black rounded p-0 px-1 w-fit">
              <p className="text-base tantialiased my-2 max-w-sm w-full tracking-wider text-white text-center">
                Delivering Satisfaction Around The Globe
              </p>
            </div>
            <div className="py-2" />
            <a href="https://www.vinsumaxpress.com" target="_blank" className="text-base tantialiased text-center antialiased font-semibold tracking-wider text-black my-2 max-w-sm w-full">
              www.vinsumaxpress.com
            </a>
          </div>
          <ul className="flex items-center gap-6 flex-wrap">
            {socialsLinks.map(({ href, label, image }, index) => (
              <li key={index}>
                <a
                  href={href}
                  target="_blank"
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src={image}
                    alt={label}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-sm mt-1 text-center">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div>
            <p className="mt-4 text-sm text-zinc-600">
            © Copyright 2024
            <span className="text-primary ml-1 font-medium">
              Vinsum Axpress
            </span>
            . All Rights Reserved
          </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SocialNetwork;
