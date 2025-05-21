import Image from 'next/image';
import Button from './Button';


export default function NHero() {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I am <span className="text-blue-600">Shukhrat</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              I build responsive web applications with modern technologies,
              focusing on clean code and intuitive user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#projects" variant="primary">
                View My Work
              </Button>
              <Button href="#contact" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-600/10 p-2">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-600/30">
                <Image
                  src="/images/profile.jpg"
                  alt="Shukhrat Mamadaliev"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-md">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-xl font-bold">5+</span>
                </div>
              </div>
              <div className="absolute text-sm -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-1 px-4 shadow-md font-medium text-blue-600">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
