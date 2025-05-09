import { serviceVideo } from "@/assets/videos";
import { homeServiceQuestions } from "@/constants";
import { ROUTES } from "@/lib/routes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const OurService = () => {
  return (
    <section id="ourService" className="section container bg-white rounded-2xl">
      <div className="w-full px-8">
          <h2 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-700 to-red-500 animate-text-gradient bg-[length:200%_200%] mb-3">
            Our Services
          </h2>
          <h1 className="text-3xl font-semibold md:w-full">
            Comprehensive Package Solutions—Locally and Globally
          </h1>
          {/* <p className="card-description">
            Vinsum is a logistics provider of integrated freight solutions.
            vinsum provides dedicated freight solution including: Less Than
            Truck Load, Full Truck Load, Warehousing/Fulfillment, Drayage, and
            transloading
          </p> */}
      </div>
      <div className="md:px-8 px-2 overflow-hidden">
        <div className="grid lg:grid-cols-2 md:gap-12 gap-10 mt-8">
          <video
            muted
            autoPlay
            title="Our service"
            poster="https://cdn.pixabay.com/photo/2014/09/11/22/00/dock-441989_1280.jpg"
            className="rounded-2xl object-cover w-full h-full brightness-50 drop-shadow-lg"
          >
            <source src={serviceVideo} type="video/mp4" />
          </video>

          <Accordion
            defaultValue={["Multimodal Transportation"]}
            collapsible
          >
            {homeServiceQuestions.map(({ title, description, path }, index) => {
              const accordianTitle = title.split(" ");
              return (
                <AccordionItem value={title} key={index}>
                  <AccordionTrigger className="hover:no-underline">
                    <h2 className="text-2xl font-semibold">
                      <span className="text-primary">{accordianTitle[0]} </span>
                      {accordianTitle[1]}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6">
                    <p className="text-zinc-600">{description}</p>
                    <Link
                      to={`${path}`}
                      className="flex items-center gap-1 hover:text-primary transition duration-300"
                    >
                      Learn more <LuMoveRight size={18} />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default OurService;
