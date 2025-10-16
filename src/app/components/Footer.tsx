// src/components/Footer.tsx

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Automatically gets the current year

  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} ZAYNAB. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;