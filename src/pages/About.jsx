import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/routes";
import { LuMoveRight } from "react-icons/lu";
import {
  chairman,
  mission,
  value,
  vinsumAxpressWarehouse,
  vinsumMap,
  vinsumNetworkMap,
  vinsumRoadMap,
  vision,
} from "../assets/images";
import { leadershipTeams, visnumNetwork } from "../constants";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About us | Vinsum Axpress";
  }, []);
  return (
    <>
      <section className="py-6">
        <div className="container grid lg:grid-cols-2 gap-4">
          <div className="lg:order-1 order-2">
            <div className="bg-neutral-200 rounded p-1 px-2 w-fit">
              “Delivering More Than Just Packages.”
            </div>
            <h1 className="sm:text-4xl text-3xl font-bold my-4">
              An astonishing expedition of curiosities—one mile at a time.
            </h1>
            <div>
              <p className="text-lg">Do you know that</p>
              <ul className="pl-4 list-disc mt-2 space-y-1">
                <li className="">
                  we&#39;ve been the leading logistics company in India for the
                  past 18 years.
                </li>
                <li>
                  {" "}
                  with 75+ branches, and 53+ warehouses across India, we&#39;ve
                  got you covered.
                </li>
                <li>
                  {" "}
                  integrity, accountability, excellence, and innovation is our
                  mantra.
                </li>
                <li>
                  with a portfolio of over 100+ happy clients, we strive to
                  provide exceptional service and build lasting relationships.
                </li>
                <li>
                  and we are hiring. Click the button below to join us 😉.
                </li>
              </ul>
            </div>
            <Link to={ROUTES.CAREER}>
              <Button className="mt-4">
                We are hiring <LuMoveRight size={18} />
              </Button>
            </Link>
          </div>

          <figure className="lg:order-2 order-1">
            <img
              src={vinsumAxpressWarehouse}
              alt="vinsum-warehouse"
              className="rounded-2xl h-full brightness-90 shadow-xl"
            />
          </figure>
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-4">
            OUR JOURNEY
          </div>
          <figure>
            <img
              src={vinsumRoadMap}
              alt="vinsum-road-map"
              className="lg:w-[70%] mx-auto"
            />
          </figure>
        </div>
      </section>

      <section className="px-4">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-12">
            OUR NETWORK
          </div>
          <div className=" grid lg:grid-cols-2 gap-4">
            <div className="grid sm:grid-cols-2 gap-8 h-fit">
              <figure className="bg-foreground text-primary-foreground relative  rounded-xl p-4 h-fit">
                <div className="bg-white absolute -top-6 -left-4 w-16 h-16 rounded-full border-[3px] border-black">
                  <img
                    src={mission}
                    alt="mission"
                    className="w-full h-full p-2"
                  />
                </div>
                <h3 className="text-center font-semibold text-lg">MISSION</h3>
                <p className="text-sm mt-2">
                  To accomplish the designed goal in time bound period by the
                  way of creating and using an infrastructure fully equipped
                  with the latest technology and trained manpower. Customized
                  according to market requirement.
                </p>
              </figure>

              <figure className="bg-primary text-primary-foreground relative  rounded-xl p-4 h-fit">
                <div className="bg-white absolute -top-6 -left-4 w-16 h-16 rounded-full border-[3px] border-primary">
                  <img
                    src={vision}
                    alt="vision"
                    className="w-full h-full p-2"
                  />
                </div>
                <h3 className="text-center font-semibold text-lg">MISSION</h3>
                <p className="text-sm mt-2">
                  To accomplish the designed goal in time bound period by the
                  way of creating and using an infrastructure fully equipped
                  with the latest technology and trained manpower. Customized
                  according to market requirement.
                </p>
              </figure>

              <figure className="bg-foreground text-primary-foreground relative rounded-xl p-4 h-fit">
                <div className="bg-white absolute -top-6 -left-4 w-16 h-16 rounded-full border-[3px] border-black">
                  <img src={value} alt="value" className="w-full h-full p-2" />
                </div>
                <h3 className="text-center font-semibold text-lg">MISSION</h3>
                <p className="text-sm mt-2">
                  To accomplish the designed goal in time bound period by the
                  way of creating and using an infrastructure fully equipped
                  with the latest technology and trained manpower. Customized
                  according to market requirement.
                </p>
              </figure>
            </div>

            <figure className="">
              <img src={vinsumNetworkMap} alt="vinsum-network-map" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-12">
            Chairman & Managing Director
          </div>

          <div>
            <figure className="flex flex-wrap items-center gap-6">
              <div className="w-56 h-56 rounded-full border-[12px] border-cardBackground sm:mx-0 mx-auto">
                <img
                  src={chairman}
                  alt="chairman"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold">CHAIRMAN</h2>
                <h1 className="text-5xl text-primary font-bold">MESSAGE</h1>
                <p className="text-4xl font-stylishCalligraphy opacity-70  my-4">
                  Vinod Sharma
                </p>

                <figcaption>
                  <h4 className="font-bold text-lg">Mr. Vindo Sharam</h4>
                  <p>Chairman & Managing Director</p>
                </figcaption>
              </div>
            </figure>

            <blockquote>
              <p className="max-w-4xl mx-auto my-10 font-semibold italic sm:text-sm text-xs">
                “Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                reiciendis natus soluta minus animi nisi, ducimus eos nostrum
                iure corrupti praesentium et hic deleniti velit. Vero, optio
                suscipit. Optio veritatis, illo explicabo autem quam at quae,
                reprehenderit, repellat odio est nostrum consequuntur quibusdam
                tempora ab sunt dolorem dolor maxime sapiente.”
              </p>
            </blockquote>

            <div>
              <p className="text-xl font-medium">Hello Guys</p>

              <ul className="list-none my-2 space-y-4">
                <li className="text-sm text-zinc-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  nobis officiis dolores ullam iure, alias esse doloribus, quis
                  exercitationem nihil quo totam velit expedita possimus?
                  Molestiae fuga culpa eaque velit distinctio ratione illum
                  nulla sapiente natus veritatis, maxime, nostrum amet beatae
                  ipsum quas minus laboriosam sint debitis deserunt recusandae
                  perferendis saepe ducimus tempore.
                </li>

                <li className="text-sm text-zinc-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum aliquid ea odio unde omnis tempore reiciendis, dolorem
                  nemo molestiae perferendis reprehenderit assumenda vel
                  suscipit dolores cum molestias consequatur alias? Consequatur
                  veritatis, nihil, fugiat minima, necessitatibus excepturi
                  aliquam sint beatae ut sit aspernatur culpa adipisci deserunt
                  asperiores obcaecati officiis assumenda vel in nemo.
                </li>

                <li className="text-sm text-zinc-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  vitae deleniti, magni neque quam rerum accusamus libero
                  voluptatem suscipit ea accusantium unde saepe quidem minus,
                  quos excepturi quibusdam, quod hic! Minima ut dicta omnis.
                  Veritatis atque at esse nihil suscipit itaque dolores
                  reprehenderit nemo, accusantium doloribus perspiciatis? Ut in
                  assumenda, ratione eius laudantium, deleniti harum accusamus
                  earum dignissimos aspernatur cupiditate, quis omnis fuga
                  dolorem consectetur maxime aut dolore pariatur repudiandae
                  maiores magnam? Quaerat, optio aperiam. Excepturi nemo ea aut
                  soluta.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-6">
          <div>
            <h1 className="text-3xl font-bold">{visnumNetwork.title}</h1>
            <p className="tetx-sm opacity-60 my-4">
              {visnumNetwork.description}
            </p>

            <div className="grid sm:grid-cols-3 grid-cols-2 items-center gap-6">
              {visnumNetwork.networks.map((overview, index) => (
                <div
                  key={index}
                  className="bg-cardBackground rounded border-2 p-4 flex flex-col items-center justify-center border-white gap-2"
                >
                  <h3 className="text-lg font-bold  text-primary text-center">
                    {overview.total}
                  </h3>
                  <p className="text-sm opacity-60 font-semibold text-center">
                    {overview.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <figure className="lg:block hidden">
            <img src={vinsumMap} alt="vinsum-map" />
          </figure>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="mb-8 space-y-4">
            <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl">
              LEADERSHIP TEAM
            </div>

            <p className="text-center max-w-lg text-neutral-500 mx-auto">
              We&#39;re led by a team who constantly queations, tinkers, and
              challengers to unlock great creativity around every turn.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {leadershipTeams.map(
              (
                { image, name, position, twitter, instagram, linkedin },
                index
              ) => (
                <Card key={index}>
                  <CardHeader>
                    <figure>
                      <img
                        src={image}
                        alt={name}
                        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                      />
                    </figure>
                    <CardTitle className="text-center ">{name}</CardTitle>
                    <CardDescription className="text-center">
                      {position}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter>
                    <ul className="w-full flex items-center justify-center gap-4">
                      <li>
                        <a
                          href={instagram}
                          target="_blank"
                          className="hover:text-primary focus:text-primary transition duration-300"
                        >
                          <AiFillInstagram size={22} />
                        </a>
                      </li>
                      <li>
                        <a
                          href={linkedin}
                          target="_blank"
                          className="hover:text-primary focus:text-primary transition duration-300"
                        >
                          <FaLinkedinIn size={22} />
                        </a>
                      </li>
                      <li>
                        <a
                          href={twitter}
                          target="_blank"
                          className="hover:text-primary focus:text-primary transition duration-300"
                        >
                          <FaXTwitter size={20} />
                        </a>
                      </li>
                    </ul>
                  </CardFooter>
                </Card>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
