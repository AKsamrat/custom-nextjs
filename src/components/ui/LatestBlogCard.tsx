"use client";

import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { Blog } from "@/types";

const LatestBlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div
      key={blog?._id}
      className="w-full bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300 rounded-2xl overflow-hidden group"
    >
      {/* Blog Image */}
      <figure className="relative h-64 overflow-hidden">
        <Image
          src={blog.image || ""}
          alt="blog image"
          width={600}
          height={256}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow">
          <FaCalendar className="text-sm" />
          {blog.publish_date}
        </div>
      </figure>

      {/* Blog Content */}
      <div className="p-5 text-white space-y-3">
        <h2 className="text-xl font-semibold text-[#F86F03] leading-snug">
          {blog.title.length > 50 ? blog.title.slice(0, 50) + "..." : blog.title}
        </h2>

        <p className="text-gray-300 text-sm">
          {blog.description.length > 100
            ? blog.description.slice(0, 160) + "..."
            : blog.description}
          <Link
            href={`/blog/${blog?._id}`}
            className="text-teal-400 font-semibold ml-2 hover:underline"
          >
            Read More
          </Link>
        </p>

        {/* Author and Likes */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              alt="author image"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-300">{blog.author_name}</span>
          </div>
          <div className="flex  items-center text-teal-300 text-sm font-medium">
            <AiFillLike className="text-lg mr-1" />
            Likes
            <p className="pl-3">

              {blog.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogCard;
