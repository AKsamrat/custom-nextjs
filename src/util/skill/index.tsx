"use server"
import { revalidateTag } from "next/cache";

export const createSkills = async (formData: FormData) => {
  console.log(formData)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skill`, {
    method: 'POST',
    headers: {
      // "Content-Type": "application/json"
    },
    body: formData,

  })
  revalidateTag("SKILL");
  const userInfo = await res.json()
  console.log(userInfo)
  return userInfo;
}
export const getAllSkill = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skill`,
    {
      next: {
        tags: ["SKILL"],
      },
    }
  );
  const data = await res.json();
  return data;

};
export const getSingleSkill = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skill/${id}`,
    {
      next: {
        tags: ["SKILL"],
      },
    }
  );
  const data = await res.json();
  return data;
};

export const updateSkill = async (data: FormData, id: string) => {
  console.log("Sending update for ID:", id, "with data:", data);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skill/${id}`, {
    method: "PATCH",
    headers: {
      // "Content-Type": "application/json", 

    },
    body: data // ✅ Ensure data is stringified
  });
  revalidateTag("SKILL");

  return res.json();
};
export const deleteSkill = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skill/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      tags: ['SKILL'],
    },
  });

  const data = await res.json();
  return data;
};
