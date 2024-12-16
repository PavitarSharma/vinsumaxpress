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

  return (
    <>
      <section className="py-8">
        <div className="wrapper">
          <div>
            <h1 className="text-4xl font-bold">{blog.title}</h1>
            <div className="my-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={profileUser}
                  alt="profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{blog.author}</h3>
                  <p className="text-xs font-bold opacity-50">
                    {blog.cratedAt}
                  </p>
                </div>
              </div>

              <div>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white">
                  <LuShare2 size={18} className="opacity-60" />
                </button>
              </div>
            </div>
          </div>

          <img
            src={blog.images[image]}
            alt={blog.title}
            className="w-full h-[500px] object-cover my-6"
          />

          <div className="flex flex-wrap gap-8 my-6">
            {blog.images.map((image, idx) => {
              return (
                <img
                  onClick={() => toggleImage(idx)}
                  key={idx}
                  src={image}
                  alt={blog.title}
                  className="w-[250px] h-[250px] object-contain rounded-lg"
                />
              );
            })}
          </div>

          <div
            className="mt-10 space-y-2"
            // dangerouslySetInnerHTML={{ __html: blog.description }}
            aria-label="Blog information content"
          >
            {parse(blog.description)}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
