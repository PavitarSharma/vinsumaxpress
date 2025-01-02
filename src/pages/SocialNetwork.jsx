import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { socialsLinks, companyDetail } from "@/constants";
import { currentYear, nextYear } from "@/lib/utils";

const SocialNetwork = () => {
  return (
    <section className="md:py-8 py-16 md:min-h-screen flex items-center justify-center px-4" style={{"background":"#e0e0e0"}}>
      <Card className="sm:w-[550px] w-full  mx-auto" style={
      {"border-radius": "16px", "box-shadow":  `7px 7px 13px #cccccc,
             -7px -7px 13px #f4f4f4`,
"background":"linear-gradient(90deg, rgba(224, 224, 224, .5) 22%, rgba(224, 224, 224, .5) 39%, rgba(224, 224, 224, .5) 68%, rgba(224, 224, 224, .5) 81%)"}
    }>
        <CardContent className="flex flex-col items-center justify-center space-y-4 py-6 px-4">
          <img src="/logo.png" alt="logo" className="md:w-36 w-32" />
          <div className="items-center justify-center flex flex-col">
            <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold text-center">
              <span className="text-primary">VIN</span>
              <span>SUM</span>
            </h1>
            <h3 className="text-base tantialiased text-center antialiased font-semibold tracking-wider text-black my-2 max-w-sm w-full">
              Vinsum Axpress India Private Limited.
            </h3>
            <div className="bg-black rounded px-2 w-fit">
              <p className="text-sm tantialiased my-2 max-w-sm w-full tracking-wider text-white text-center">
                Delivering Satisfaction Around The Globe
              </p>
            </div>
            <div className="py-2" />
            <a href={companyDetail.website} target="_blank" className="text-base tantialiased text-center antialiased font-semibold tracking-wider text-black my-2 max-w-sm w-full">
              www.vinsumaxpress.com
            </a>
          </div>
          <ul className="sm:flex grid grid-cols-3 justify-center items-center gap-6 flex-wrap">
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
                    className="sm:w-12 sm:h-12 w-10 h-10 object-contain"
                  />
                  <span className="sm:text-sm text-xs mt-1 text-center">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div>
            <p className="mt-4 sm:text-sm text-xs text-zinc-600 text-center">
            © Copyright {currentYear}-{nextYear}
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
