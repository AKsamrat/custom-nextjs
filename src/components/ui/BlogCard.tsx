import { FaCalendar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="w-full bg-white/10 backdrop-blur-lg border border-white/10 shadow-md hover:shadow-teal-500/30 transition-shadow rounded-2xl overflow-hidden group">
      {/* Image Section */}
      <figure className="relative h-64 overflow-hidden">
        <Image
          src={blog?.image || ""}
          alt={blog?.title}
          width={600}
          height={256}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2 shadow-md">
          <FaCalendar className="text-sm" />
          {blog?.publish_date}
        </div>
      </figure>

      {/* Content Section */}
      <div className="p-5 flex flex-col space-y-3 text-white">
        <h2 className="text-2xl font-semibold leading-snug text-[#F86F03]">
          {blog?.title.length > 40
            ? blog.title.slice(0, 40) + "..."
            : blog.title}
        </h2>

        <p className="text-sm text-gray-300 leading-relaxed">
          {blog.description.length > 100
            ? blog.description.slice(0, 80) + "..."
            : blog.description}
          <Link
            href={`/project/${blog._id}`}
            className="text-teal-400 font-semibold ml-1 hover:underline"
          >
            Read More
          </Link>
        </p>

        <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto">
          <div className="flex items-center gap-2">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              alt="Author"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-300">{blog.author_name}</span>
          </div>
          <div className="flex items-center text-sm text-teal-300 font-medium">
            <AiFillLike className="text-lg mr-1" />
            Likes
            <p className="pl-3">
              {blog?.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
