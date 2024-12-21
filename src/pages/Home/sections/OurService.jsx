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
    <section id="ourService" className="section px-4">
      <div className="container bg-white rounded-2xl md:px-8 px-6 py-8 overflow-hidden shadow">
        <div className="max-w-xl space-y-3">
          <p className="card-name">Our Service</p>
          <h1 className="card-title">
            Manage Your Package From Local To The World
          </h1>
          <p className="card-description">
            Vinsum is a logistics provider of integrated freight solutions.
            vinsum provides dedicated freight solution including: Less Than
            Truck Load, Full Truck Load, Wraehousing/Fullfillment, Drayage, and
            transloading
          </p>
        </div>

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
            type="multiple"
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
                      to={`${ROUTES.SERVICE}${path}`}
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
