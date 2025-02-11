import LatestBlogCard from '@/components/ui/LatestBlogCard';
import { Blog } from '@/types';
import React from 'react';

const BlogPage = async () => {
  const res = await fetch("https://portfolio-nextjs-server.vercel.app/blogs", { cache: "no-store" }); // SSR
  const blogs: Blog[] = await res.json();
  console.log("blog data", blogs)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-8 max-w-7xl mx-auto'>
      {
        blogs.map((blog: Blog) => (
          <LatestBlogCard key={blog._id} blog={blog}>
          </LatestBlogCard>
        ))
      }
    </div>
  );
};

export default BlogPage;