"use client"
import { useEffect, useState } from "react";
import { ChevronDown, LogOut, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/port_logo.png"
import profile from "../../../public/Profile.png"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { UserProps } from "@/types";
import { signOut } from "next-auth/react";
import { useDarkMode } from "./useDarkMode";

export default function Navbar({ session }: { session: UserProps | null }) {
  const router = useRouter();
  console.log(session)
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/project", label: "Project" },
    { href: "/blog", label: "Blogs" },


  ];

  const handleLogout = () => {
    signOut(); // Sign out of the session
    router.push("/dashboard"); // Redirect to the Dashboard page
  };


  return (
    <nav className={`sticky top-0 z-[70] transition-colors duration-300 py-2 dark:bg-white ${scrolled ? "bg-gray-900 shadow-md bg-opacity-85" : "bg-transparent"} `}>
      <div className="max-w-6xl mx-auto  px-6  lg:px-2 dark:text-gray-900">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={logo} quality={100} alt="Logo" className="h-5 w-36" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${pathname === href
                  ? "text-[#F86F03] font-bold"
                  : "text-white dark:text-gray-900 hover:text-6eal-700"
                  }`}
              >
                {label}
              </Link>
            ))}

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-white" />}
            </button>

            {/* Hire Me */}
            <Link
              href="/contact"
              className="border border-[#F86F03] text-[#F86F03] px-5 py-2 rounded-full hover:bg-[#F86F03] hover:text-black transition"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${pathname === href
                  ? "text-[#F86F03] font-bold"
                  : "text-gray-700 hover:text-6eal-700"
                  }`}
              >
                {label}
              </Link>
            ))}

          </div>

          {/* Profile & Dropdown in Mobile Menu */}
          <div className="border-t p-4">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-3 w-full focus:outline-none"
            >
              <Image
                src={
                  session?.user?.image
                    ? session?.user?.image
                    : profile
                }
                // src={session?.user?.image}
                alt="Profile"
                width={10}
                height={10}
                quality={100}
                className="h-10 w-10 rounded-full border-2 border-gray-300"
              />
              <p className="px-4 py-2 text-gray-700 font-semibold">{session?.user?.name}</p>
              <ChevronDown size={20} className="text-gray-600" />
            </button>

            {/* Mobile Dropdown */}
            {dropdownOpen && (
              <div className="mt-2 bg-white shadow-md rounded-lg py-2">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <LogOut size={18} className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}


