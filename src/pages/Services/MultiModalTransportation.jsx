import { Fragment, useEffect } from "react";
import { multimodalTransPortationServices } from "@/constants";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import MoreService from "@/components/MoreService";

const MultiModalTransportation = () => {
  useEffect(() => {
    document.title = "Multi Modal Transportation";
  }, []);

  return (
    <>
      <div className="container py-8">
        <h1 className="text-primary sm:text-2xl text-xl font-bold">
          MULTIMODAL TRANSPORTATION
        </h1>
      </div>
      <section>
        <div className="container space-y-16">
          {multimodalTransPortationServices.map((service, index) => {
            const { title, description, image, path } = service;
            const isOdd = index % 2 !== 0;
            return (
              <Fragment key={index}>
                <div className={`grid md:grid-cols-2 gap-6`}>
                  <div className={`${isOdd ? "md:order-2" : ""}`}>
                    <img src={image} alt={title} className="w-full h-auto rounded-xl" />
                  </div>

                  <div>
                    <h1 className="sm:text-3xl text-2xl font-bold">{title}</h1>
                    <p className="my-4 sm:text-base text-sm opacity-80" dangerouslySetInnerHTML={{ __html: description }}>
                    </p>
                    <Link to={path}>
                      <Button>Read More...</Button>
                    </Link>
                  </div>
                </div>
                <Separator />
              </Fragment>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="py-4 bg-neutral-200 rounded-lg px-4 mx-auto text-center">
            To know more about our multi modal transportation, please reach us
            through the appended form or write to us at.
            <a
              href="mailto:care@vinsumaxpress.com"
              className="text-primary font-semibold ps-1"
            >
              info@vinsumaxpress.com
            </a>
          </p>
        </div>
      </section>

      <MoreService />
    </>
  );
};

export default MultiModalTransportation;
