import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { companyDetail } from "@/constants";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaThreads,
} from "react-icons/fa6";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .trim(),
  email: z
    .string()
    .min(1, { message: "Email is required field" })
    .email({ message: "Please enter a valid email address." })
    .trim(),
  subject: z.string().min(1, { message: "Subject is required field" }).trim(),
  message: z.string().min(1, { message: "Message is required field" }).trim(),
});

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Vinsum Axpress";
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const requestBody = {
        name: values.fullName,
        ...values,
      };
      delete requestBody.fullName;
      await axios.post(
        "https://testwebsiteapi.vinsumaxpress.com/api/Email/SendEmail",
        requestBody,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(
        "Your response is recorded. we'll come back to you shortly."
      );
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const socialIcon =
    "w-12 h-12 rounded-full flex items-center justify-center bg-neutral-200 text-xl hover:bg-primary focus:bg-primary hover:text-white transition duration-300";

  return (
    <>
      <section className="py-8">
        <div className="container">
          {/* <p className="text-sm text-primary font-medium text-center">
            Contact us
          </p> */}
          <h1 className="sm:text-4xl text-3xl font-bold text-center">
            Get in touch with our team
          </h1>
          {/* <p className="text-gray-800 text-center">
            We have the team and know-how to help your scale 10x faster
          </p> */}
        </div>
      </section>

      <section>
        <div className="container grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl" >Head Office</CardTitle>
              <CardDescription className="text-base">
                <div
                href="mailto:care@vinsumaxpress.com"
                className="flex gap-2 text-base text-text my-4 hover:text-primary transition duration-300"
              >
                <FaMapMarkedAlt size={18} />
                <span className="flex-1 text-base">
                  404- Electronic City, Udyog Vihar, Phase IV, Sector 18,
                  Gurugram, 122015.
                </span>
              </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold">Information</h3>
              <p className="font-medium text-gray-700 mt-2">
                Phone:{" "}
                <a href="tel:0124 4070191" className="ml-2">
                  0124 4070191
                </a>
              </p>
              <p className="font-medium text-gray-700 mt-2">
                Customer Care:{" "}
                <a href="tel:1800-833-3513" className="ml-2">
                  1800-833-3513
                </a>
              </p>
              <p className="font-medium text-gray-700 mt-2">
                <a href="mailto:care@vinsumaxpress.com">
                  {companyDetail.email}
                </a>
              </p>
            </CardContent>
            <CardFooter>
              <div>
                <h3 className="text-xl font-bold">Follow Us</h3>
                <div className="flex gap-4 flex-wrap mt-2">
                  <a
                    href={companyDetail.instagram}
                    target="_blank"
                    className={socialIcon}
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={companyDetail.facebook}
                    target="_blank"
                    className={socialIcon}
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={companyDetail.youtube}
                    target="_blank"
                    className={socialIcon}
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href={companyDetail.linkedin}
                    target="_blank"
                    className={socialIcon}
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={companyDetail.thread}
                    target="_blank"
                    className={socialIcon}
                  >
                    <FaThreads />
                  </a>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get in touch</CardTitle>
              <CardDescription>
                Our friendly team would love to hear from you!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea multiple {...field} rows={5} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pt-8">
        <h1 className="sm:text-4xl text-3xl font-bold text-center py-12">
            Head Office
          </h1>
        <div className="container">
          <iframe
            width="100%"
            height="450"
            className="rounded-xl min-h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.331930702625!2d77.07176171492016!3d28.49965948247041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196bf692d653%3A0xd9f2347ba1687ed8!2sVinsum%20Axpress!5e0!3m2!1sen!2sin!4v1592554030727!5m2!1sen!2sin"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
