// src/app/components/About.tsx
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-900 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Image
            src="/images/profile.jpg"
            alt="A photo of Zaynab"
            width={256}
            height={256}
            className="rounded-full object-cover"
          />
          <div className="text-center md:text-left max-w-xl">
            <h3 className="text-2xl font-semibold mb-4">
              I&apos;m Zaynab, a recent Software Engineering graduate.
            </h3>
            <p className="text-gray-700 mb-4">
              I&apos;ve recently completed my degree and am passionate about turning complex problems into simple, beautiful, and intuitive designs. I am excited to apply my skills in a professional setting and contribute to meaningful projects.
            </p>
            <p className="text-gray-700">
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and reading about the latest trends in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;