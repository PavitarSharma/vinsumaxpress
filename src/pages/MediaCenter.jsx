import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LuArrowRight } from "react-icons/lu";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { blogs, galleries, youtubeVideos } from "@/constants";
import { LuArrowUpRight } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Please enter your email",
    })
    .email({ message: "Please enter a valid email address." }),
});

const MediaCenter = () => {
  const location = useLocation();
  const tab = location.state?.tab;
  console.log("tab ::::: " + tab)

  useEffect(() => {
    document.title = "Media center | Vinsum Axpress";
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const tabs = ["ARTICLES", "MEDIA", "GALLERY"];
  const [activeTab, setActiveTab] = useState(tab ?? "ARTICLES");

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
      window.scrollTo(0, 0)
    }
  }, [location.state?.tab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "ARTICLES":
        return<ArticlesSection />;
      case "MEDIA":
        return <MediaSection />;
      case "GALLERY":
        return <GallerySection />;
      default:
        return null;
    }
  };

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
    toast.success(`Thanks for subscribing ${values.email}`);
  };

  return (
    <>
      <section className="py-8">
        <div className="grid grid-cols-3 gap-4 md:gap-16 p-4 md:px-60">
        {tabs.map((tab) => (
          <Button
            className="text-xl p-6 font-semibold"
            key={tab}
            type="button"
            variant={activeTab === tab ? "destructive" : "outline"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>
      {renderTabContent()}
        {/* <div className="container grid md:grid-cols-2 md:items-center gap-6">
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
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>

          <p className="md:ml-auto text-lg md:max-w-sm w-full">
            New product features, the latest in the technology, solutions, and
            updates.
          </p>
        </div> */}
      </section>
    </>
  );
};

const GallerySection = () => {
  return (
    <section className="py-8">
        <div className="wrapper space-y-12">
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
  )
}

const ArticlesSection = () => {
  return (
    <section className="py-14 px-8">
        <div className="wrapper">
          <div className="flex flex-col">
            {[...blogs]
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((blog, index) => (
              <div key={index} className="w-full md:grid md:grid-cols-[30%_70%] gap-20 mb-10">
                {/* Left: Image Section */}
                <div className="w-full h-[200px] border-2 border-black rounded-md relative overflow-hidden mb-6">
                  <img
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-background/20" />

                  <div className="absolute bottom-0 left-0 right-0 h-[30%] backdrop-blur-sm bg-white/30 text-white px-4 py-2">
                    <div className="z-10">
                      <h3 className="font-semibold text-black">{blog.author}</h3>
                      <p className="font-medium text-black">{blog.createdAt}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Info Section */}
                <div className="flex flex-col md:w-[80%]">
                  {blog.isExternal ? (
                      <a
                        href={blog.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold relative w-full cursor-pointer underline"
                      >
                        {blog.title}
                      </a>
                    ) : (
                      <Link
                        to={`/blog/${blog.id}`}
                        className="text-xl font-bold relative w-full cursor-pointer underline"
                      >
                        {blog.title}
                      </Link>
                    )}
                    <p
                      className="line-clamp-3 my-4 font-medium"
                      dangerouslySetInnerHTML={{ __html: blog.description1 }}
                      aria-label="Blog information content"
                    ></p>

                  {blog.isExternal ? (
                    <a
                      href={blog.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-fit items-center font-semibold gap-1 text-lg bg-primary text-center text-white px-4 py-3 rounded-md"
                    >
                      READ FULL ARTICLE
                    </a>
                  ) : (
                    <Link
                      to={`/blog/${blog.id}`}
                      className="flex w-fit items-center font-semibold gap-1 text-lg bg-primary text-center text-white px-4 py-3 rounded-md"
                    >
                      READ FULL ARTICLE
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      
  )
}

const MediaSection = () => {
  return (
    <section className="py-14 px-8">
        <div className="wrapper">
          <div className="flex flex-col">
            {youtubeVideos.map((video, index) => (
              <div key={index} className="w-full md:grid md:grid-cols-[30%_70%] gap-20 mb-14">
                {/* Left: Image Section */}
                <div className="w-full h-[200px] border-2 border-black rounded-md relative overflow-hidden mb-6">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.link}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Right: Info Section */}
                <div className="flex flex-col md:w-[80%]">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold relative w-full cursor-pointer underline"
                  >
                    {video.title}
                  </a>

                  <p
                    className="line-clamp-3 my-4 font-medium"
                    dangerouslySetInnerHTML={{ __html: video.description }}
                    aria-label="Blog information content"
                  ></p>

                  <a
                    href={`https://www.youtube.com/watch?v=${video.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center font-semibold gap-1 text-lg bg-primary text-white px-4 py-3 rounded-md"
                  >
                    WATCH FULL VIDEO
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full text-center mt-6">
          <a
            href="https://www.youtube.com/@vinsumaxpressindiapvtltd.8044"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center items-center font-semibold gap-1 text-lg bg-primary text-white px-8 py-3 rounded-md"
          >
            WATCH ALL VIDEOS ON OUR YOUTUBE CHANNEL
        </a>
        </div>
      </section>      
  )
}

export default MediaCenter;
