// src/components/Hero.tsx

const Hero = () => {
  return (
    // Section container with a light gray background
    <section className="bg-gray-100 text-gray-900">
      {/* Flex container to center content vertically and horizontally */}
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Hi, I'm Zaynab— A Creative Software Engineer
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
          I specialize in building exceptional and accessible digital experiences. I'm passionate about crafting clean code and creating user-friendly applications.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="/Zainab-Rameez - CV.pdf"
            className="bg-white text-gray-900 font-bold py-3 px-6 rounded-lg border border-gray-900 hover:bg-gray-200 transition duration-300"
            download // Added back to force the download
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;