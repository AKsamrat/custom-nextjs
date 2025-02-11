"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
const BlogForm = () => {
  const [member, setMember] = useState<any>({
    title: "",
    author_name: "",
    publish_date: "",
    category: "",
    description: "",
    image_url: "",

  });


  const handleChange = (e: any) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`https://portfolio-nextjs-server.vercel.app/blogs/create`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });
    console.log(res)
    if (res.ok) {
      alert("Blog created successfully!");
      // Optionally redirect after updating
      window.location.href = '/dashboard/blogs';
    } else {
      alert("Failed to create Blog.");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen my-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-6 text-[#F86F03] text-center">
            Create Blog
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                value={member.title}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter blog title"
              />

            </div>
            {/* Author Name */}
            <div>
              <label
                htmlFor="author_name"
                className="block text-sm font-medium text-gray-700"
              >
                Author Name
              </label>
              <input
                type="text"
                value={member.author_name}
                onChange={handleChange}
                name="author_name"
                id="author_name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter author name"
              />
            </div>
            {/* Publish Date */}
            <div>
              <label
                htmlFor="publish_date"
                className="block text-sm font-medium text-gray-700"
              >
                Publish Date
              </label>
              <input
                type="date"
                value={member.publish_date}
                onChange={handleChange}
                name="publish_date"
                id="publish_date"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              />

            </div>
            {/* category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                type="text"
                value={member.category}
                onChange={handleChange}
                name="category"
                id="category"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter category"
              />
            </div>
          </div>
          {/* Blog Image (URL Input) */}
          <div className="my-5">
            <label
              htmlFor="blog_image"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Image URL
            </label>
            <input
              type="url"
              value={member.blog_image}
              onChange={handleChange}
              id="blog_image"
              name="blog_image"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Paste image URL here"
            />
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={member.description}
              onChange={handleChange}
              name="description"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter blog description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-[#F86F03] text-white py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
