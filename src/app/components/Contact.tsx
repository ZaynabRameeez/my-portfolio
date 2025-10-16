// src/components/Contact.tsx

const Contact = () => {
  return (
    // Section with id for navbar scrolling
    <section id="contact" className="bg-white py-20 px-4">
      <div className="container mx-auto text-center">
        
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-700 max-w-lg mx-auto mb-8">
          I'm currently open to new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out via email or give me a call.
        </p>

        {/* Call-to-action button for email */}
        <a 
          href="mailto:zainabrameezoffl@gmail.com" 
          className="bg-gray-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 transition duration-300 inline-block"
        >
          Say Hello
        </a>

        {/* Container for social links and phone number */}
        <div className="mt-8 text-gray-700">
          <p className="mb-2">You can also find me on:</p>
          <div className="flex justify-center space-x-6 mb-4 font-semibold">
            <a href="https://www.linkedin.com/in/zainab-rameez-5053332b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-600 hover:underline">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 hover:underline">GitHub</a>
          </div>
          <p>
            Or call me at: 
            <a 
              href="tel:+94 77 906 7922" 
              className="font-semibold text-gray-900 hover:text-blue-600 hover:underline ml-2"
            >
             077 906 7922
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;