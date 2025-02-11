
import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";


const Contact = async () => {
  const res = await fetch("https://portfolio-nextjs-server.vercel.app/projects", { cache: "no-store" }); // SSR
  const blogs = await res.json();
  console.log("project data", blogs)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blogs?.map((blog: Blog) => (
        <BlogCard key={blog?._id} blog={blog} />
      ))}
    </div>
  );
};

export default Contact;