'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRouter } from "next/navigation";
// import { use, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const DeleteProject = ({ id }: any) => {
  // const { id }: any = params;
  console.log(id)
  const router = useRouter();
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then(result => {
    if (result.isConfirmed) {
      handleDelete()

    }
  })
  const handleDelete = async () => {
    if (!id) return;
    try {
      const response = await fetch(`https://portfolio-nextjs-server.vercel.app/projects/delete/${id}`, {
        method: "DELETE",
      })
      console.log(response)

      if (response?.ok) {

        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
        router.push("/dashboard/projects");
      }

      return response;
    } catch (error: any) {
      toast.error("Failed to delete item", error);

    };
  };
  return (
    <div>

    </div>
  );
};

export default DeleteProject;