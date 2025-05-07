import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { useCallback, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import axios from "axios";
import TrackShipmentPopup from "@/components/TrackShipmentPopup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqTrackShipment } from "@/constants";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/routes";
import { LuMoveRight } from "react-icons/lu";
import { heroSectionBg } from "@/assets/images";

const TrackShipment = () => {
  callDocketEnquiry()
  const [isTracking, setIsTracking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shipment, setShipment] = useState(null);

  const [openTrackShipment, setOpenTrackShipment] = useState(false);

  const handleToggleTracking = () =>
    setIsTracking((prevTracking) => !prevTracking);

   const formik = useFormik({
    initialValues: {
      docketNumber: "",
    },
    onSubmit: async (values, { resetForm }) => {
      if (values.docketNumber === "") {
        toast.error(
          isTracking
            ? "Please enter your docket number"
            : "Please enter your invoice number"
        );
        return;
      }
      setLoading(true);
      try {
        const res = await axios.get(
          `https://testwebsiteapi.vinsumaxpress.com/api/DocketTracking?docketno=${values.docketNumber}&isDocket=${isTracking}`
        );
        setShipment(res.data);
        setOpenTrackShipment(true);
        resetForm();
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        toast.error("Failed to fetch shipment details");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleTrackShipmentClose = useCallback(() => {
    setOpenTrackShipment((prev) => !prev);
    setShipment(null);
  }, []);

  return (
    <>
    <TrackShipmentPopup
        show={openTrackShipment}
        onClose={handleTrackShipmentClose}
        shipment={shipment}
      />
      <section className="py-8 md:px-16">
        <div
          className="relative w-full h-[400px] bg-cover bg-center md:rounded-2xl"
          style={{ backgroundImage: `url(${heroSectionBg})` }} // replace with your actual image path
        >
          {/* Centered bottom card */}
          <div className="absolute left-1/2 bottom-[-150px] transform -translate-x-1/2 border p-4 rounded-2xl space-y-10 bg-white text-black shadow-lg ring-1 ring-black/5 w-[90%] md:w-[700px]">
            <div className="flex items-center justify-between gap-3">
              <span className="text-base font-medium text-black">Invoice Search</span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isTracking}
                  onChange={handleToggleTracking}
                  className="sr-only peer"
                />
                <div className="relative w-[52px] h-7 bg-neutral-200 rounded-full cursor-pointer peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-primary after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
              </label>
              <span className="text-base font-medium text-black">Docket Search</span>
            </div>

            <form
              onSubmit={formik.handleSubmit}
              className="rounded-2xl p-4 space-y-3 isolate bg-gray-100 shadow-lg ring-1 ring-black/5"
            >
              <h3 className="font-medium text-black">
                {isTracking ? "Track Shipment" : "Track Shipment"}
              </h3>

              <Input
                id="docketNumber"
                name="docketNumber"
                value={formik.values.docketNumber}
                onChange={formik.handleChange}
                placeholder={
                  isTracking
                    ? "Enter your docket number"
                    : "Enter your invoice number"
                }
                className="bg-white border-0 h-12"
              />

              <Button type="submit" className="w-full h-12" disabled={loading}>
                {loading ? (
                  <div role="flex items-center gap-1">
                    {/* Spinner */}
                    <svg
                      aria-hidden="true"
                      className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591..."
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393..."
                        fill="currentFill"
                      />
                    </svg>
                    <span className="ml-2 text-sm">Loading...</span>
                  </div>
                ) : (
                  "Track Now"
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="w-full p-6 text-center text-black font-semibold md:text-5xl text-xl mt-48">Frequently <span className="text-primary">Asked</span> Questions</div>
        <Accordion
            className="w-full p-6"
            defaultValue={["Multimodal Transportation"]}
            type="multiple"
            collapsible
          >
            {faqTrackShipment.map(({ title, question, answer }, index) => {
              return (
                <AccordionItem value={question} key={index}>
                  <AccordionTrigger className="hover:no-underline">
                    <h2 className="text-2xl text-black">
                      {(() => {
                        const parts = question.split(title);
                        return (
                          <>
                            {parts[0]}
                            <span className="text-red-600">{title}</span>
                            {parts[1]}
                          </>
                        );
                      })()}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6">
                    <p className="text-zinc-600" dangerouslySetInnerHTML={{ __html: answer }} ></p>
                    {/* <Link
                      to={`${ROUTES.SERVICE}${answer}`}
                      className="flex items-center gap-1 hover:text-primary transition duration-300"
                    >
                      Learn more <LuMoveRight size={18} />
                    </Link> */}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
      </section>
    </>
  );
};

const callDocketEnquiry = async () => {
  const payload = { dwbno: "2000001260" };

  const response = await fetch("http://webservice.asmx/docketEnquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // or try text/plain if it fails
    },
    body: JSON.stringify(payload),
  });

  const result = await response.text(); // or .json() if it's proper JSON
  console.log(result);
};

export default TrackShipment;
