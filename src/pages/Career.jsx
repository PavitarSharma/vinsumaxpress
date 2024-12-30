import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  LuSearch,
  LuMapPin,
  LuBriefcaseBusiness,
  LuCalendar,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

import { careerPage } from "@/constants";
import toast from "react-hot-toast";
import { useCallback, useEffect, useState } from "react";

const Career = () => {
  const { title, description, image, careerStats, careerCategories, openings } =
    careerPage;
  const itemsPerPage = 6;
  const [filteredOpenings, setFilteredOpenings] = useState(openings);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const totalPages = Math.ceil(filteredOpenings.length / itemsPerPage);

  useEffect(() => {
    document.title = "Career | Vinsum Axpress";
  }, []);

  const form = useForm({
    defaultValues: {
      jobTitle: "",
      location: "",
    },
  });

  const onSubmit = () => {
    const jobTitle = form.getValues("jobTitle");
    const location = form.getValues("location");

    // Validation checks
    if (!jobTitle) {
      toast.error("Please enter your job title");
      return;
    }

    if (!location) {
      toast.error("Please enter your location");
      return;
    }

    setLoading(true);

    // Apply filtering
    const filtered = openings.filter((opening) => {
      return (
        opening.position.toLowerCase().includes(jobTitle.toLowerCase()) &&
        opening.location.toLowerCase().includes(location.toLowerCase())
      );
    });

    // Update filtered data and reset to the first page
    setTimeout(() => {
      setFilteredOpenings(filtered);
      setCurrentPage(1);
      setLoading(false);
      const element = document.getElementById("jobApplication");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 2000);
  };

  const currentItems = filteredOpenings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = useCallback(
    () => setCurrentPage((prev) => Math.min(prev + 1, totalPages)),
    [totalPages]
  );
  const goToPreviousPage = useCallback(
    () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
    []
  );

  const handleSelectJob = useCallback(
    (index) => {
      setSelectedJob(currentItems[index]);
      setIsDialogOpen(true);
    },
    [currentItems]
  );

  const handleCloseIsDialogOpen = useCallback(() => {
    setIsDialogOpen(false);
    setSelectedJob(null);
  }, []);

  const handleScrollToSection = () => {
    const section = document.getElementById("jobApplication");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="py-6 bg-cardBackground">
        <div className="container grid md:grid-cols-2 gap-6 items-center">
          <div className="md:order-1 order-2">
            <h1 className="lg:text-5xl sm:text-4xl text-3xl leading-tight font-semibold">
              {title}
            </h1>
            <p className="my-2 opacity-60">{description}</p>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              action=""
              className="flex items-center bg-white shadow rounded-lg  px-1"
            >
              <div className="relative w-full">
                <LuSearch
                  size={18}
                  className="absolute top-1/2 -translate-y-1/2 left-2 text-primary"
                />
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  {...form.register("jobTitle")}
                  placeholder="Job title, keywords"
                  className="w-full h-full py-4 border outline-none border-none pl-8 pr-2 text-sm rounded-l-lg"
                />
              </div>
              <div className="relative w-full">
                <LuMapPin
                  size={18}
                  className="absolute top-1/2 -translate-y-1/2 left-2 text-primary"
                />
                <input
                  type="text"
                  placeholder="Your location"
                  id="location"
                  name="location"
                  {...form.register("location")}
                  className="h-full py-4 w-full outline-none border-none pl-8 pr-2 text-sm"
                />
              </div>
              <Button disabled={loading} type="submit" className="">
                {loading ? "Fetching jobs..." : "Find Job"}
              </Button>
            </form>
          </div>

          <figure className="md:order-2 order-1">
            <img src={image} alt={title} className="rounded-2xl" />
          </figure>
        </div>

        <div className="container grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mt-12 pb-6">
          {careerStats.map(({ icon, label, value }, index) => (
            <div
              key={index}
              className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg"
            >
              <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary text-white text-2xl">
                {icon}
              </div>
              <div className="flex flex-col">
                <div>{label}</div>
                <div>{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <h1 className="text-xl font-bold opacity-90 mb-6">
            Popular Categories
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {careerCategories.map((category, index) => (
              <div
                key={index}
                onClick={handleScrollToSection}
                className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg"
              >
                <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20">
                  <category.icon size={28} />
                </div>
                <div className="flex-1 space-y-1">
                  <h2 className="text-sm font-semibold group-hover:text-primary">
                    {category.name}
                  </h2>
                  <p className="text-sm opacity-60">
                    {category.position} Open position
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jobApplication" className="py-8">
        <div className="container">
          <h1 className="text-xl font-bold opacity-90 mb-6">Featured Job</h1>

          <div className="flex flex-col gap-4">
            {filteredOpenings.length > 0 ? (
              currentItems.map(
                ({ position, location, vacancy, experience }, index) => (
                  <div
                    key={index}
                    className="flex sm:items-center sm:flex-row flex-col shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg"
                  >
                    <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-white shadow"></div>
                    <div className="flex-1 gap-4 flex sm:flex-row flex-col sm:items-center justify-between">
                      <div>
                        <h2>{position}</h2>
                        <div className="flex items-center flex-wrap gap-4 mt-2">
                          <div className="flex items-center gap-1 opacity-60">
                            <LuMapPin size={16} />
                            <span className="text-sm">{location}</span>
                          </div>
                          <div className="flex items-center gap-1 opacity-60">
                            <LuBriefcaseBusiness size={16} />
                            <span className="text-sm">{vacancy} Opening</span>
                          </div>
                          <div className="flex items-center gap-1 opacity-60">
                            <LuCalendar size={16} />
                            <span className="text-sm">
                              {experience} Opening
                            </span>
                          </div>
                        </div>
                      </div>

                      <Dialog
                        open={isDialogOpen}
                        onOpenChange={setIsDialogOpen}
                      >
                        <DialogTrigger asChild>
                          <Button
                            type="button"
                            onClick={() => handleSelectJob(index)}
                          >
                            Apply now
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="text-start mb-4">
                              Are for the {selectedJob?.position}?
                            </DialogTitle>
                            <JobApplication onClose={handleCloseIsDialogOpen} />
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                )
              )
            ) : (
              <div className="text-xl text-center font-semibold">Not found</div>
            )}
          </div>

          <div className="flex items-center gap-1 mt-10 justify-center">
            <Button
              type="button"
              disabled={currentPage === 1}
              onClick={goToPreviousPage}
              variant="outline"
            >
              <LuChevronLeft size={20} />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                type="button"
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              type="button"
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={goToNextPage}
            >
              <LuChevronRight size={20} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .min(1, { message: "Email is required field" }),
  phone: z.string().min(1, { message: "Please enter a valid phone number." }),
  experience: z.string().min(1, { message: "Please enter your experience." }),
  currentCtc: z.string().min(1, { message: "Please enter your currrent CTC." }),
  expectedCtc: z
    .string()
    .min(1, { message: "Please enter your expected CTC." }),
});

const JobApplication = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: "",
      phone: "",
      experience: "",
      currentCtc: "",
      expectedCtc: "",
    },
  });

  const handleFileUpload = useCallback((event) => {
    const myFile = event.target.files[0];
    const allowedFileTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 10 * 1024 * 1024;
    if (!allowedFileTypes.includes(myFile.type)) {
      toast.error("Error: Only PDF or DOCX files are allowed.");
      return;
    }

    if (myFile.size > maxSize) {
      toast.error("Error: File size should be 10MB or less.");
      return;
    }
    setFile(myFile);
  }, []);

  const onSubmit = (values) => {
    const { fullName, email, phone, experience, expectedCtc, currentCtc } =
      values;

    const formdata = new FormData();
    formdata.append("fullName", fullName);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("experience", experience);
    formdata.append("currentCtc", currentCtc);
    formdata.append("expectedCtc", expectedCtc);
    if (file) formdata.append("resume", file);

    setTimeout(() => {
      setIsLoading(false);
      form.reset();
      setFile(null);
      onClose();
      toast.success("Application submitted successfully!");
    }, 2000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="items-start flex flex-col">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} className="h-10" />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="items-start flex flex-col">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} className="h-10" />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="items-start flex flex-col">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} className="h-10" />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="items-start flex flex-col">
                <FormLabel>Experience</FormLabel>
                <FormControl>
                  <Input {...field} className="h-10" />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currentCtc"
            render={({ field }) => (
              <FormItem className="items-start flex flex-col">
                <FormLabel>Current CTC</FormLabel>
                <FormControl>
                  <Input {...field} className="h-10" />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expectedCtc"
            render={({ field }) => (
              <FormItem className="items-start flex flex-col">
                <FormLabel>Expected CTC</FormLabel>
                <FormControl>
                  <Input {...field} className="h-10" />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <FormLabel htmlFor="file">Upload Resume</FormLabel>
          <Input id="file" type="file" onChange={handleFileUpload} />
        </div>

        <Button type="submit" className="float-start">
          {isLoading ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
};

export default Career;
