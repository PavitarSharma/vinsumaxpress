import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { socialsLinks } from "../constants";

const SocialNetwork = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <Card className="sm:w-[550px] w-full  mx-auto bg-[#ffffff]">
        <CardContent className="flex flex-col items-center justify-center space-y-4 py-6 px-4">
          <div>
            <h1 className="text-4xl font-bold text-center">
              <span className="text-primary">VIN</span>
              <span>SUM</span>
            </h1>
            <h2 className="text-xl text-center">Company</h2>
          </div>
          <img src="/logo.png" alt="logo" className="w-20" />
          <ul className="flex items-center gap-4 flex-wrap">
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
                    className="w-9 h-9 object-contain"
                  />
                  <span className="text-sm mt-1 text-center">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div>
            <p className="text-center text-sm">Company icon</p>

            <p className="font-medium italic mt-0">Company w digit</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SocialNetwork;
