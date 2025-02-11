"use client"
import { useState } from "react";
import { ChevronsRight, X } from "lucide-react";
import logo from "../../../public/AK.png"
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const token = useAppSelector(useCurrentToken);

  // let user;

  // if (token) {
  //   user = verifyToken(token);
  // }
  // console.log({ user });
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-900 text-white rounded-r-lg shadow-lg
          transition-transform duration-300 md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3">
          <ul className="space-y-3">

            <li className="hover:bg-gray-700 rounded-md p-2">
              <Link href="/dashboard/blogs" className="block">
                Blogs
              </Link>
            </li>
            <li className="hover:bg-gray-700 rounded-md p-2">
              <Link href="/dashboard/projects" className="block">
                Projects
              </Link>
            </li>
            <hr className="border-gray-600" />
            <li className="hover:bg-gray-700 rounded-md p-2">
              <Link href="/" className="block">
                Back to Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 md:hidden text-white bg-gray-800 p-2 rounded"
      >
        <ChevronsRight className="size-6" />
        {/* < size={24} /> */}
      </button>
    </div>
  );

};

export default Sidebar;