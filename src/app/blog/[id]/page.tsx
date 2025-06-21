/* eslint-disable @typescript-eslint/no-explicit-any */


import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

// Date formatting helper
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogDetails = async ({ params }: any) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`);
  const blogData = await res.json();
  const blog = blogData?.data;

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-6 text-white">

        {/* Date */}
        <div className="flex justify-center mb-4">
          <span className="flex items-center gap-2 text-teal-300 bg-teal-700/20 px-4 py-1 rounded-full text-sm font-medium">
            <FaCalendar /> {formatDate(blog?.createdAt)}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
          {blog?.title}
        </h2>

        {/* Author */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
            width={36}
            height={36}
            alt="author"
            className="rounded-full"
          />
          <span className="text-base font-medium text-gray-200">
            {blog?.author_name || "Author"}
          </span>
        </div>

        {/* Blog Image */}
        <figure className="rounded-2xl overflow-hidden mb-6 shadow-lg">
          <Image
            src={blog?.image}
            alt="Blog"
            width={800}
            height={400}
            className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </figure>

        {/* Description */}
        <div className="text-gray-300 text-lg leading-relaxed text-justify mb-6">
          <p>{blog?.description}</p>
        </div>

        {/* Likes & Category */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center text-teal-300 gap-2 text-sm">
            <AiFillLike className="text-xl" />
            Likes
          </div>
          <p className="text-teal-300">
            <span className="text-white">
              Category:
            </span>
            {blog?.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
