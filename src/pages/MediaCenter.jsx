import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { blogs, galleries } from "@/constants";
import { LuArrowUpRight } from "react-icons/lu";
import { useEffect } from "react";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Please enter your email",
    })
    .email({ message: "Please enter a valid email address." }),
});

const MediaCenter = () => {
  useEffect(() => {
    document.title = "Media center | Vinsum Axpress";
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values) => {
    const errors = form.formState.errors;

    // If there are validation errors, display the first error message in a toast
    if (Object.keys(errors).length > 0) {
      const firstErrorKey = Object.keys(errors)[0]; // Get the first error field
      const errorMessage = errors[firstErrorKey]?.message; // Get the error message

      if (errorMessage) {
        toast.error(errorMessage); // Display the error message as a toast
      }

      return; // Stop further execution
    }
    console.log(values);
    toast.success(`Thanks for susbcribing ${values.email}`);
  };
  return (
    <>
      <section className="py-8">
        <div className="container grid md:grid-cols-2 md:items-center gap-6">
          <div>
            <h1 className="sm:text-5xl text-3xl font-bold">Vinsum Blog</h1>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-6 relative rounded-full max-w-sm w-full border h-11"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="outline-none bg-transparent border-none h-full w-full rounded-full pl-4 pr-[150px] text-sm"
                      />
                    </FormControl>
                  )}
                />
                <Button
                  type="submit"
                  className="rounded-full absolute right-2 top-1/2 -translate-y-1/2"
                >
                  Search
                </Button>
              </form>
            </Form>
          </div>

          <p className="md:ml-auto text-lg md:max-w-sm w-full">
            New product features, the latest in the technology, solutions, and
            updates.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="wrapper">
          <div className="flex md:flex-row flex-col">
            {blogs.map((blog, index) => (
              <div key={index} className="w-full  relative">
                <div className="h-[400px] relative">
                  <img
                    src={blog.images[0]}
                    alt={blog.title}
                    className="w-full h-full  object-cover"
                  />
                  <div className="absolute inset-0 bg-background/20" />
                  <div className="w-full p-4 py-10 absolute backdrop-blur-sm bg-white/30 text-white  left-0 right-0 bottom-0">
                    <div className="z-10">
                      <h3 className="font-semibold">{blog.author}</h3>
                      <p className="text-white font-medium">{blog.cratedAt}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-xl font-bold relative w-full cursor-pointer underline"
                  >
                    {blog.title}
                  </Link>
                  <p
                    className="line-clamp-2 my-4 font-medium"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                    aria-label="Blog information content"
                  ></p>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="flex items-center font-semibold gap-1 text-sm"
                  >
                    Read post <LuArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 ">
        <div className="wrapper space-y-12 ">
          <div className="bg-primary uppercase text-primary-foreground text-center w-fit mx-auto px-6 py-3 text-2xl font-semibold rounded-tr-3xl rounded-bl-3xl mb-8">
            OUR GALLERY
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleries.map((image, index) => (
              <div key={index} className="grid gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="p-0 !bg-none border-0">
                    <figure>
                      <img src={image} alt="image" className="rounded-lg" />
                    </figure>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaCenter;
