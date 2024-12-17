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
import { FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
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
                <li>we are hiring. Click the button below to join us.</li>
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
                <h3 className="text-center font-semibold text-lg">VISION</h3>
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
                <h3 className="text-center font-semibold text-lg">VALUE</h3>
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

          <div className="bg-cardBackground">
            <div className="relative lg:py-8 pb-8  grid lg:grid-cols-2  my-4 mt-8">
              <div className="w-full px-4 relative flex items-center justify-center flex-col py-32">
                <div className="bg-[#DEDEDE] lg:h-[530px] w-1/2 absolute lg:right-0 -right-4 top-0 bottom-0 border-b-8 border-primary">
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col w-full items-center justify-center">
                    <p>Mr. Vinod Sharma</p>
                    <p className="font-bold">Chairman & Managing Director</p>
                  </div>
                </div>

                <div className="lg:hidden block z-10 relative">
                  <div className="w-20 h-10 bg-primary/30 -top-4 -z-1 absolute right-0"></div>
                  <h1 className="text-5xl font-bold font-lato z-10">
                    About Me.
                  </h1>
                </div>

                <div className=" flex flex-col gap-8 lg:p-4 lg:pt-0 pt-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-16">
                  {/* <img src="/images/wave-2.png" alt="wave-2" className="absolute -top-28 -right-10" /> */}
                  <div className="h-[280px] w-[250px] border-8 border-white rounded relative">
                    {/* <div className="w-12 h-12 rounded flex items-center justify-center absolute -left-7 top-16 bg-[#EDEDED]">
                    <Smile className="opacity-60" />
                  </div> */}
                    <img
                      src={chairman}
                      alt="chairmain"
                      className="w-full h-full object-cover"
                    />

                    <div className="w-4 h-10 bg-primary absolute -right-6 -z-1 bottom-8"></div>
                  </div>

                  <div className="lg:flex hidden flex-col gap-4 pl-8">
                    <a
                      href="#"
                      target="_blank"
                      className="bg-[#676767] text-white lg:w-10 lg:h-10 w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      className="bg-[#676767] text-white lg:w-10 lg:h-10 w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                    >
                      <FaXTwitter />
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      className="bg-[#676767] text-white lg:w-10 lg:h-10 w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full relative  flex flex-col justify-center p-4 px-8">
                <div className="lg:block hidden absolute -left-20 top-20">
                  <div className="w-20 h-10 bg-primary/30 -top-4 -z-1 absolute right-0"></div>
                  <h1 className="text-5xl font-bold font-lato z-10">
                    About Me.
                  </h1>
                </div>

                <div className="relative lg:pt-40 pt-10">
                  <p className="text-2xl leading-relaxed relative before:content-[''] before:absolute before:lg:-left-16 before:-left-12 before:top-5 before:lg:w-14 before:w-10 before:h-[1px] before:bg-black">
                    Join us on an extraordinary journey of growth, where we
                    strive for excellence and work together to achieve the best
                    for
                    <strong> our business.</strong>
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 pt-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-3 h-3 bg-black mt-2"></div>
                    <p className="flex-1">
                      On behalf of Vinsum Axpress, I warmly welcome you all and
                      extend our heartfelt gratitude to our customers for their
                      continued support, particularly during our initial years.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-3 h-3 bg-black mt-2"></div>
                    <p className="flex-1">
                      Vinsum Axpress is dedicated to offering cost-effective
                      transportation solutions. Our services span across surface
                      transport, warehouse management, international freight
                      forwarding, express distribution, 3PL/4PL solutions, and
                      packaging.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-3 h-3 bg-black mt-2"></div>
                    <p className="flex-1">
                      We are honored to be the preferred supplier for Fortune
                      100 automobile companies and a key point of contact for
                      enhancing efficiency within India&#39;s logistics
                      landscape.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-3 h-3 bg-black mt-2"></div>
                    <p className="flex-1">
                      With over 18 years of experience across various
                      industries, our unwavering dedication to value delivery
                      has earned us the trust of our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:hidden flex flex-col py-20 mt-6 items-center justify-center bg-[#2E2E2E] text-white gap-6">
                <div className="flex flex-col w-full items-center justify-center">
                  <p>Social Media Seriously</p>
                  <p className="font-bold">Harm your Mental Health</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="bg-[#676767] text-white w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="bg-[#676767] text-white w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="bg-[#676767] text-white w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
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
          </div> */}
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
