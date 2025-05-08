import { useParams } from "react-router-dom";
import { blogs } from "@/constants";
import { LuShare2 } from "react-icons/lu";
import { useCallback, useState } from "react";
import parse from "html-react-parser";
import "@/pages/BlogDetail/BlogDetail.css";
import { profileUser } from "@/assets/images";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));
  const [image, setImage] = useState(0);

  const toggleImage = useCallback((id) => setImage(id), []);

  if (!blog) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt || "Check out this blog!",
        url: window.location.href,
      })
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Web Share API not supported in this browser.");
    }
  };

  return (
    <>
      <section className="py-8">
        <div className="wrapper">
          <div>
            <h1 className="text-4xl font-bold">{blog.title}</h1>
            <div className="my-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="profile"
                  className="w-10 h-10 object-contain"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{blog.author}</h3>
                  <p className="text-xs font-bold opacity-50">
                    {blog.createdAt}
                  </p>
                </div>
              </div>

              <div>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white" onClick={handleShare}>
                  <LuShare2 size={18} className="opacity-100" />
                </button>
              </div>
            </div>
          </div>

          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full h-full object-cover my-6 rounded-xl"
          />

          <div
            className="mt-10 space-y-2"
            // dangerouslySetInnerHTML={{ __html: blog.description }}
            aria-label="Blog information content"
          >
            {blog.description1 && (
              <p dangerouslySetInnerHTML={{ __html: blog.description1 }}></p>
            )}

            {blog.image1 && (
              <img
                src={blog.image1}
                alt="blog image 1"
                className="w-full h-fit object-cover"
              />
            )}

            {blog.description2 && (
              <p dangerouslySetInnerHTML={{ __html: blog.description2 }}></p>
            )}

            {blog.image2 && (
              <img
                src={blog.image2}
                alt="blog image 2"
                className="w-full h-fit object-cover"
              />
            )}

            {blog.description3 && (
              <p dangerouslySetInnerHTML={{ __html: blog.description3 }}></p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
