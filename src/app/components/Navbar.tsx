// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Your Name */}
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          Zaynab's Portfolio
        </Link>

        {/* Right side: Navigation Links */}
        {/* THIS IS THE DIV WE ARE FIXING. NOTE THE "space-x-6" CLASS. */}
        <div className="flex items-center gap-6 whitespace-nowrap">
         <Link href="#about" className="hover:text-blue-400 inline-block px-1">About</Link>
          <Link href="#projects" className="hover:text-blue-400 inline-block px-1">Projects</Link>
          <Link href="#contact" className="hover:text-blue-400 inline-block px-1">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

