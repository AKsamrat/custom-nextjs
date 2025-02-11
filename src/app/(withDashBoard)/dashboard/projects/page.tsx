import { Blog } from '@/types';
import Link from 'next/link';


const Projects = async () => {
  // const router = useRouter();

  const res = await fetch("http://localhost:5000/projects", { cache: "no-store" }); // SSR
  const blogs = await res.json();
  console.log("project data", blogs)
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-[#F86F03]">Projects</h1>
      <p className='text-center mb-5'>This is a list of Projects.</p>
      <hr />
      <div className='text-end mt-3'>
        <Link href="/dashboard/projects/create">
          <button className='px-3 py-1 border-2 bg-[#F86F03] rounded-xl '>Create Projects</button>
        </Link>
      </div>
      <div className="overflow-x-auto mx-auto mt-3">
        <table className="min-w-full border border-gray-300 shadow-md">
          <thead className="bg-gray-200">
            <tr>
              {/* <th className="p-3 text-left border-b">ID</th> */}
              <th className="p-3 text-left border-b">Title</th>
              <th className="p-3 text-left border-b">Category</th>
              <th className="p-3 text-left border-b">Description</th>
              <th className="p-3 text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((item: Blog) => (
              <tr key={item._id} className="hover:bg-gray-100">
                {/* <td className="p-3 border-b">{item.id}</td> */}
                <td className="p-3 border-b">{item.title}</td>
                <td className="p-3 border-b">{item.category}</td>
                <td className="p-3 border-b">{item.description}</td>
                <td>
                  <Link href={`/dashboard/projects/update/${item._id}`}>
                    <button className='px-3 py-1 border border-[#F86F03] rounded-xl bg-slate-300'>Update</button>
                  </Link>

                  <Link href={`/dashboard/projects/delete/${item._id}`}>
                    <button className='px-3 py-1 border border-[#F86F03] rounded-xl bg-slate-300 ml-3'>Delete</button>
                  </Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default Projects;