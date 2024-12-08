import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto py-3 px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
  
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wide">
            Stay Connected 🚀
          </h2>
        </div>

   
        <div className="flex space-x-8">
          <a
            href="https://github.com/Ankurx7"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="img/userAsset/github.svg"
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ankur-akash-913774252"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="img/userAsset/linkedin.svg"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
          <a
            href="mailto: 07ankur007@gmail.com"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="img/userAsset/gmail.svg"
              alt="Email"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://instagram.com/ankur_.77"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="img/userAsset/instagram.svg"
              alt="Twitter"
              className="w-8 h-8"
            />
          </a>
        </div>

    
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400">
            <a
              href="#Home"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              Ankur Akash
            </a>
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>
      </div>

   
      <div className="border-t border-gray-700 mt-6">
        <p className=" pt-10">
        </p>
      </div>
    </footer>
  );
};

export default Footer;