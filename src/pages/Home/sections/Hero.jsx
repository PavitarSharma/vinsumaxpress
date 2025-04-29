import { heroBannerVideo } from "@/assets/videos";
import { twentyThreeYears } from "@/assets/images";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/lib/routes";
import { LuArrowRight } from "react-icons/lu";
import { useFormik } from "formik";
import { useCallback, useState } from "react";
import TrackShipment from "@/pages/Home/sections/TrackShipment";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import axios from "axios";
import { franchise } from "@/assets/images";
import { memo } from "react";
import { twentyThreeYearsSvg } from "@/assets/images";


const formSchema = z.object({
  panNumber: z
    .string()
    .regex(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN number format")
    .length(10, { message: "PAN number must be exactly 10 characters" })
    .trim(),
  name: z.string().min(1, "Name is required").trim(),
  mobile: z
    .string()
    .regex(/^\d{10}$/, { message: "Mobile number must be exactly 10 digits" })
    .trim(),
  address: z.string().min(1, "Address is required").trim(),
  remarks: z.string().min(1, "Remarks are required").trim(),
  service: z.string().min(1, "Please select your service.").trim(),
});

const Hero = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shipment, setShipment] = useState(null);
  const [openTrackShipment, setOpenTrackShipment] = useState(false);
  const navigate = useNavigate();

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


  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      panNumber: "",
      name: "",
      mobile: "",
      address: "",
      remarks: "",
      service: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const requestBody = {
        panNo: values.panNumber,
        name: values.name,
        address: values.address,
        customerType: values.service,
        mobileNumber: +values.mobile,
        remarks: values.remarks,
      };
      await axios.post(
        "http://ccptestapi.vinsumaxpress.com/api/Franchise/Request",
        requestBody,
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success("Request submitted successfully");
      form.reset();
      setTimeout(() => setShowFranchisePopup(false), 500);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleTrackShipmentClose = useCallback(() => {
    setOpenTrackShipment((prev) => !prev);
    setShipment(null);
  }, []);

  return (
    <>
      <TrackShipment
        show={openTrackShipment}
        onClose={handleTrackShipmentClose}
        shipment={shipment}
      />
      <section id="heroSection" className=" w-full relative">
        <div className="text-white container">
          <div className="md:pt-36  sm:pt-44 pt-32 max-[360px]:pt-36 pb-4 grid md:grid-cols-2">
            <div className="flex flex-col gap-6 mt-12 ">
              <h1 className="sm:text-5xl text-3xl font-bold uppercase leading-tight">
                WE <span className="text-primary">DELIVER</span> YOUR
                PACKAGE ALL OVER{" "}
                <span className="text-primary">THE WORLD.</span>
              </h1>
             <div className="grid md:grid-cols-2 gap-6">
          
          <div className="space-y-6 md:ml-auto">
            <p className="max-w-72">
              Become a franchisee, and invest in a promising partnership.
            </p>
            <Button onClick={() => navigate(ROUTES.FRANCHISE)}>
              JOIN TODAY <LuArrowRight size={18} />
            </Button>
          </div>
        </div>
            </div>
            <div className="md:ml-auto md:mt-0 mt-8  gap-10 flex flex-col h-full mr-24">
               <div className="px-4  rounded w-full bg-zinc-400/50 slider">
                <span className="slider__word">“Lightning-fast delivery!”</span>
                <span className="slider__word">
                  “Efficient. Accurate. On-Time.”
                </span>
                <span className="slider__word">
                  “From Us to You, Absolutely Flawless!”
                </span>
              </div>
              <div className="max-w-96 w-full border rounded-2xl p-4 space-y-10 bg-white text-black isolate bg-white/20 shadow-lg ring-1 ring-black/5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-base font-medium text-white">
                    Invoice Search
                  </span>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isTracking}
                      onChange={handleToggleTracking}
                      className="sr-only peer"
                    />
                    <div className="relative w-[52px] h-7 bg-neutral-200 rounded-full cursor-pointer peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-primary after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
                  </label>
                  <span className="text-base font-medium text-white">
                    Docket Search
                  </span>
                </div>

                {/* <form
                  onSubmit={formik.handleSubmit}
                  className="rounded-2xl p-4 space-y-3 isolate bg-white/20 shadow-lg ring-1 ring-black/5"
                >
                  <h3 className="font-medium text-white">
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
                    className="bg-white border-0  h-12"
                  />

                  <Button
                    type="submit"
                    className="w-full h-12"
                    disabled={loading}
                  >
                    {loading ? (
                      <div role="flex items-center gap-1">
                        <svg
                          aria-hidden="true"
                          className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="ml-2 text-sm">Loading...</span>
                      </div>
                    ) : (
                      "Track Now"
                    )}
                  </Button>

                  {/* <Button
                  type="submit"
                  className="w-full h-12"
                  disabled={loading}
                >
                  {loading ? (
                    <div role="flex items-center gap-1">
                      <svg
                        aria-hidden="true"
                        className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="ml-2 text-sm">Loading...</span>
                    </div>
                  ) : (
                    "Track Now"
                  )}
                </Button> 
                </form> */}

                <Card className="bg-primary">
        <CardHeader>
          <CardTitle>Join Our Franchise Network</CardTitle>
          <CardDescription>
            Join our growing network of franchises and take the first step
            toward success.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "panNumber", label: "Pan Number" },
                  { name: "name", label: "Name" },
                  { name: "mobile", label: "Mobile No" },
                  { name: "address", label: "Address" },
                  { name: "remarks", label: "Remarks" },
                ].map((field) => (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name}
                    render={({ field: inputField }) => (
                      <FormItem>
                        <FormLabel>{field.label}</FormLabel>
                        <FormControl>
                          <Input {...inputField} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[
                            "Booking Agent",
                            "Delivery Agent",
                            "Vendor/Partner",
                          ].map((value) => (
                            <SelectItem key={value} value={value}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
              </div>
            </div>
          </div>
        </div>

        <video
          id="bannerVideo"
          muted
          loop
          autoPlay
          title="Video Indroduction"
          poster="https://cdn.pixabay.com/photo/2014/09/11/22/00/dock-441989_1280.jpg"
          className="absolute inset-0 w-full h-full -z-10 brightness-50 object-cover"
        >
          <source src={heroBannerVideo} type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default Hero;
