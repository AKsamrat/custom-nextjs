/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { revalidateTag } from "next/cache";

export const createProject = async (formData: FormData) => {
  console.log(formData)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    method: 'POST',
    headers: {
      // "Content-Type": "application/json"
    },
    body: formData,

  })
  revalidateTag("PROJECT");
  const userInfo = await res.json()
  console.log(userInfo)
  return userInfo;
}
export const getAllProject = async () => {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
      next: {
        tags: ["PROJECT"],
      },
    });

    if (!res.ok) {
      const errorStatus = res.status;
      const errorText = await res.text();
      console.error(`Workspace failed: Status ${errorStatus}. Raw Response: ${errorText.substring(0, 200)}`);
      // Throw here to immediately fail the build for non-2xx responses
      throw new Error(`API fetch non-OK status: ${errorStatus}`);
    }

    const text = await res.text();
    console.log("Raw response text from API:", text.substring(0, 200)); // Log first 200 chars

    const data = JSON.parse(text);
    console.log("Successfully parsed JSON data."); // Confirmation
    return data;
  } catch (err: any) {
    console.error("Error during API call or JSON parsing:", err.message);
    // If 'text' is available, log it again in the catch for clarity

    throw err; // Re-throw to ensure build failure
  }
};
export const getSingleProject = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`,
    {
      next: {
        tags: ["PROJECT"],
      },
    }
  );
  const data = await res.json();
  return data;
};

export const updateProject = async (data: FormData, id: string) => {
  console.log("Sending update for ID:", id, "with data:", data);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
    method: "PATCH",
    headers: {
      // "Content-Type": "application/json", 

    },
    body: data // ✅ Ensure data is stringified
  });
  revalidateTag("PROJECT");

  return res.json();
};
export const deleteProject = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      tags: ['PROJECT'],
    },
  });

  const data = await res.json();
  return data;
};
