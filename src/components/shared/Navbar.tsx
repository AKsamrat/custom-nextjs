"use client";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/port_logo.png";
import profile from "../../../public/Profile.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserProps } from "@/types";
import { useDarkMode } from "./useDarkMode";

export default function Navbar({ session }: { session: UserProps | null }) {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav
      className={`sticky top-0 z-[70] transition-colors duration-300 py-2 w-full overflow-x-hidden ${scrolled ? "bg-gray-900 shadow-md bg-opacity-85" : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 overflow-x-hidden">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              className="h-6 w-auto max-w-full"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex justify-center items-center flex-1 space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition whitespace-nowrap ${pathname === href
                  ? "text-[#F86F03] font-bold"
                  : "text-white dark:text-gray-900 hover:text-[#F86F03]"
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-700/30 transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="text-yellow-400" />
              ) : (
                <Moon className="text-white" />
              )}
            </button>
            <Link
              href="/contact"
              className="border border-[#F86F03] text-[#F86F03] px-4 py-1.5 rounded-full hover:bg-[#F86F03] hover:text-black transition whitespace-nowrap"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-700/30 transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="text-yellow-400" />
              ) : (
                <Moon className="text-white" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white dark:text-gray-900"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t w-full overflow-x-hidden">
          <div className="flex flex-col space-y-3 p-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition ${pathname === href
                  ? "text-[#F86F03] font-bold"
                  : "text-gray-700 dark:text-gray-200"
                  }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="border border-[#F86F03] text-[#F86F03] px-4 py-2 rounded-full text-center hover:bg-[#F86F03] hover:text-black transition"
            >
              Hire Me
            </Link>
          </div>

          {session?.user && (
            <div className="border-t p-4 flex items-center gap-3">
              <Image
                src={session.user.image || profile}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border"
              />
              <p className="text-gray-700 dark:text-gray-200 font-semibold">
                {session.user.name}
              </p>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
