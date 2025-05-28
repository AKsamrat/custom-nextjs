/* eslint-disable @typescript-eslint/no-explicit-any */


import Image from 'next/image';
import { AiFillLike } from 'react-icons/ai';
import { FaCalendar } from 'react-icons/fa';

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
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`);
  const pBlog = await res.json();
  const blog: any = pBlog.data;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-3xl shadow-xl">
      <div className="mb-6">
        <img
          src={blog.image}
          alt="Blog"
          className="w-full h-[400px] object-cover rounded-2xl shadow-md"
        />
      </div>


      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        {blog.title}
      </h1>

      {/* Author */}
      <div className="flex justify-center items-center gap-3 mb-6 bg-gray-100 py-3 px-5 rounded-xl">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
          width={32}
          height={32}
          alt="author"
          className="rounded-full"
        />
        <p className="text-lg font-semibold text-gray-700">{blog.author_name}</p>
      </div>

      {/* Blog Image */}
      {/* Date Badge */}
      <div className="flex justify-center mb-4">
        <span className="flex items-center gap-2 text-teal-600 bg-teal-100 px-4 py-1 rounded-full text-sm font-medium">
          <FaCalendar />
          {formatDate(blog.createdAt)}
        </span>
      </div>

      {/* Description */}
      <div className="text-gray-700 text-lg leading-relaxed mb-6">
        <p className="text-justify">{blog.description}</p>
      </div>

      {/* Tech Stack & Likes */}
      <div className="grid sm:grid-cols-3 gap-4 text-gray-800 text-base">
        <div className="flex items-center gap-2">
          <AiFillLike className="text-teal-500" />
          <span className="font-medium">Likes</span>
        </div>
        <div>
          <span className="font-medium text-gray-700">Frontend:</span>{" "}
          <span className="text-indigo-500">{blog?.frontEnd}</span>
        </div>
        <div>
          <span className="font-medium text-gray-700">Backend:</span>{" "}
          <span className="text-indigo-500">{blog?.backEnd}</span>
        </div>
      </div>
      <a href={blog?.link} className=' text-teal-600 bg-teal-100 px-4 py-1 rounded-full text-sm font-medium' >Visit Site</a>
    </div>
  );
};

export default DetailsPage;
