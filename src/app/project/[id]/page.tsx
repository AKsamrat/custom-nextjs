
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

// Format date helper
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const DetailsPage = async ({ params }: any) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`);
  const pBlog = await res.json();
  const blog: any = pBlog.data;

  return (
    <div className="max-w-5xl mx-auto p-6 mt-12 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">

      {/* Image */}
      <div className="overflow-hidden rounded-2xl mb-6">
        <img
          src={blog.image}
          alt="Blog"
          className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-white mb-4 leading-snug">
        {blog.title}
      </h1>

      {/* Author */}
      <div className="flex justify-center items-center gap-3 mb-6">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
          width={36}
          height={36}
          alt="author"
          className="rounded-full"
        />
        <p className="text-lg text-gray-300 font-semibold">{blog.author_name}</p>
      </div>

      {/* Date */}
      <div className="flex justify-center mb-6">
        <span className="flex items-center gap-2 text-teal-300 bg-teal-700/20 px-4 py-1 rounded-full text-sm font-medium shadow-sm">
          <FaCalendar /> {formatDate(blog.createdAt)}
        </span>
      </div>

      {/* Description */}
      <div className="text-gray-200 text-base leading-relaxed mb-8 text-justify px-2">
        <p>{blog.description}</p>
      </div>

      {/* Tech Stack + Likes */}
      <div className="grid sm:grid-cols-3 gap-4 text-white mb-8 px-2">
        <div className="flex items-center gap-2 text-sm">
          <AiFillLike className="text-teal-400 text-lg" />
          <span>{blog?.category} Likes</span>
        </div>
        <div>
          <span className="text-gray-300 font-medium">Frontend:</span>{" "}
          <span className="text-teal-400">{blog?.frontEnd}</span>
        </div>
        <div>
          <span className="text-gray-300 font-medium">Backend:</span>{" "}
          <span className="text-teal-400">{blog?.backEnd}</span>
        </div>
      </div>

      {/* Visit Button */}
      <div className="text-center">
        <a
          href={blog?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#F86F03] hover:bg-[#dd4f00] text-white font-medium px-6 py-2 rounded-full shadow-lg transition"
        >
          🚀 Visit Project Site
        </a>
      </div>
    </div>
  );
};

export default DetailsPage;
