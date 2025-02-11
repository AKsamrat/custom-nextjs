"use server"

import { redirect } from "next/navigation"

export const createBlog = async (data: FormData) => {
  // "use server"
  const blogData = Object.fromEntries(data.entries())
  console.log(data)
  const res = await fetch(`http://localhost:4000/blogs/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),

  })
  const blogInfo = await res.json()
  console.log(blogInfo);
  if (blogInfo) {


    // redirect(`/blogs/${blogInfo.id}`)
    redirect('/dashboard/blogs')
  }
  return blogInfo;
}