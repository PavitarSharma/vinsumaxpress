import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import axios from "axios";
import { franchise } from "@/assets/images";
import { useState } from "react";

const formSchema = z.object({
  panNumber: z
    .string()
    .regex(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN number format")
    .min(10, { message: "PAN number must be exactly 10 characters" })
    .max(10, { message: "PAN number must be exactly 10 characters" })
    .nonempty({ message: "PAN number is required" })
    .trim(),
  name: z.string().nonempty({ message: "Name is required" }).trim(),
  mobile: z
    .string()
    .regex(/^\d{10}$/, { message: "Mobile number must be exactly 10 digits" })
    .nonempty({ message: "Mobile number is required" })
    .trim(),
  address: z.string().nonempty({ message: "Address is required" }).trim(),
  remarks: z.string().nonempty({ message: "Remarks is required" }).trim(),
  service: z
    .string()
    .nonempty({ message: "Please select your service." })
    .trim(),
});

const Franchise = () => {
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
        "https://testwebsiteapi.vinsumaxpress.com/api/Franchise/Request",
        requestBody,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      alert(JSON.stringify(requestBody, null, 2));
      toast.success("Request submitted successfully");
      form.reset();
      form.setValue("service", "");
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error(
        "Something went wrong. When you are try to get our franchise?"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6 ">
          <figure>
            <img
              src={franchise}
              alt="franchise"
              className="h-full  w-full rounded-xl"
            />
          </figure>
          <Card>
            <CardHeader>
              <CardTitle>Join Our Franchise Network</CardTitle>
              <CardDescription>
                Join our growing network of franchises and take the first step
                toward building a successful partnership.{" "}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3 "
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="panNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pan Number</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile No</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="remarks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Remarks</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

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

                  <Button type="submit">
                    {isLoading ? "Loading..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Franchise;
