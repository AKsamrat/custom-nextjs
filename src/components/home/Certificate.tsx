'use client';
import Image from "next/image";
import { useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Complete WebDevelopment with Jhonkar Mahabub",
    image: "/level one REACT.jpg",
  },
  {
    id: 2,
    title: "Black Belt ",
    image: "/Black belt.png",
  },
  {
    id: 3,
    title: "Next Level Web Development (Full Stack) ",
    image: "/next cer.jpeg",
  },
  {
    id: 4,
    title: "InternShip",
    image: "/adm certificate.png",
  },

];

export default function CertificateSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="certificate" className="py-12   overflow-hidden relative">
      <Image
        src="/blur-23.svg"
        alt="Hero"
        width={1572}
        height={900}
        className="absolute -top-0 -z-10 h-full"
      />
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">

          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 dark:text-gray-800 text-white border-white border-b-2 w-44 lg:w-64 ">
            My <span className="text-[#F86F03]">Certificates</span>
          </h2>
        </div>

        {/* Auto Sliding Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide whitespace-nowrap gap-6">
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                className="min-w-[250px] max-w-xs flex-shrink-0 relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => setSelected(index % certificates.length)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Title Overlay */}
                <div className="absolute bottom-[-100%] left-0 right-0 bg-black/60 text-white text-center py-2 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {cert.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selected !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[80]"
            onClick={() => setSelected(null)}
          >
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-3xl w-full">
              <Image
                src={certificates[selected].image}
                alt={certificates[selected].title}
                width={950}
                height={600}
                className="w-80 h-96 md:w-[700px] md:h-[950px] object-contain rounded"
              />
              <h3 className="text-center text-xl mt-4 font-semibold text-gray-800 dark:text-white">
                {/* {certificates[selected].title} */}
              </h3>
              <p className="text-sm text-center text-gray-500 dark:text-gray-300">
                Click anywhere outside to close
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
