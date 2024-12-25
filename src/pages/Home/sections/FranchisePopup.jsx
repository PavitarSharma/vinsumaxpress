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
import { memo, useState } from "react";

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

const Franchise = ({ setShowFranchisePopup }) => {
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

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <figure className="h-full md:block hidden">
        <img
          src={franchise}
          alt="franchise"
          className="h-full w-full rounded-xl"
        />
      </figure>
      <Card>
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
  );
};

const FranchisePopup = memo(Franchise);
export default FranchisePopup;
