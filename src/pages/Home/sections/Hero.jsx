import { heroBannerVideo } from "@/assets/videos";
import { heroSectionBg } from "@/assets/images";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/lib/routes";
import { LuArrowRight } from "react-icons/lu";
import { useState } from "react";
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
  const navigate = useNavigate();

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

  const lines = [
    "Worldwide package",
    "delivery made <span class='text-primary'>Seamless</span>",
    "secure and dependable",
  ];

  return (
    <>
      <section id="heroSection" className="w-full relative">
        <div className="text-white container">
          <div className="md:pt-32 sm:pt-44 pt-32 max-[360px]:pt-36 pb-4 grid md:grid-cols-2">
            <div className="content-center md:mt-24">
              <div className="text-3xl md:text-5xl font-bold uppercase space-y-4">
                {lines.map((line, idx) => (
                  <p
                    key={idx}
                    className={`reveal-line depth-text glow-text`}
                    style={{ animationDelay: `${idx * 0.9}s` }}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))}
              </div>
             <div className="grid md:grid-cols-2 gap-6">
          
          <div className="mt-4">
            <Button className="px-8 py-6 text-xl" onClick={() => navigate(ROUTES.TRACK_SHIPMENT)}>
              TRACK YOUR SHIPMENT <LuArrowRight size={20} />
            </Button>
          </div>
        </div>
            </div>
            <div className="md:ml-auto md:mt-0 mt-4 gap-8 flex flex-col h-full md:mr-24">
              <div className="md:text-center md:text-3xl text-lg font-bold">
                <span className="">BECOME A FRANCHISEE AND INVEST IN A </span>
                <span className="">
                  PROMISING PARTNERSHIP
                </span>
              </div>

              <Card className="w-full border rounded-2xl p-1 bg-white text-black isolate bg-white shadow-lg ring-1 ring-black/5" >
                <CardHeader>
                  <CardTitle className="text-lg">Join Our Franchise Network</CardTitle>
                  <CardDescription className="text-base text-gray-800">
                    Join our growing network of franchises and take the first step
                    toward success.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
                                <FormLabel className="text-lg">{field.label}</FormLabel>
                                <FormControl>
                                  <Input className="border-black" {...inputField} />
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
                              <FormLabel className="text-lg">Service</FormLabel>
                              <Select className="text-lg" onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger className="border-black">
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
                      <Button type="submit" disabled={isLoading} className="text-lg">
                        {isLoading ? "Loading..." : "Submit"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>     
            </div>
          </div>
        </div>

               
        <video
          id="bannerVideo"
          muted
          loop
          autoPlay
          title="Video Introduction"
          poster="https://cdn.pixabay.com/photo/2014/09/11/22/00/dock-441989_1280.jpg"
          className="absolute inset-0 w-full h-full -z-10 brightness-50 object-cover"
        >
          <source src={heroBannerVideo} type="video/mp4" />
        </video>

      {/* <figure className="absolute inset-0 w-full h-full -z-10 brightness-50 object-cover">
        <img
          src={heroSectionBg}
          alt="franchise"
          className="h-full w-full"
        />
      </figure> */}
      </section>
    </>
  );
};

export default Hero;
