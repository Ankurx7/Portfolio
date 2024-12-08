import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReactTyped } from 'react-typed';
import { FaLinkedin, FaFileAlt } from 'react-icons/fa';
import '../App.css';

const Home = () => {
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (leftSideRef.current) observer.observe(leftSideRef.current);
    if (rightSideRef.current) observer.observe(rightSideRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const textColor = mode === "light" ? "text-gray-900" : "text-white";

  return (
    <div
      id="Home"
      className={`h-screen flex justify-between items-center px-6 md:px-7 py-5 overflow-hidden relative`}
      style={{
        background: mode === "light"
          ? 'linear-gradient(to right, #ffebcc , #ffefd5)'
          : 'linear-gradient(to right, #30304f , #0e0e3f)',
      }}
    >
      <div
        className="absolute top-1/3 right-0 flex justify-center items-center hidden md:block"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
        }}
      >
        <img
          src="/img/abstract-shape.png"
          alt="Vector background"
          className="w-full h-full object-cover"
          style={{
            opacity: 0.15,
            animation: 'spin 10s linear infinite, float 4s ease-in-out infinite',
          }}
        />
      </div>
      <div
        className="absolute top-5 right-96 flex justify-center items-center hidden md:block"
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
        }}
      >
        <img
          src="/img/geometry.png"
          alt="Vector background"
          className="w-full h-full object-cover"
          style={{
            opacity: 0.059,
          }}
        />
      </div>
      <div
        className="absolute top-80 right-2/4 flex justify-center items-center hidden md:block"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
        }}
      >
        <img
          src="/img/geometrical.png"
          alt="Vector background"
          className="w-full h-full object-cover"
          style={{
            opacity: 0.04,
          }}
        />
      </div>
      <div
        className="absolute top-[-10vh] left-[-10vw] flex justify-center items-center"
        style={{
          width: '110%',
          height: '110%',
          borderRadius: '50%',
        }}
      >
        <img
          src="/img/shape-1.jpg"
          alt="Vector background"
          className="w-full h-full object-cover"
          style={{
            opacity: 0.017,
          }}
        />
      </div>
      <div
        className="absolute top-96 right-0 inset-0 flex justify-center items-center"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
        }}
      >
        <img
          src="/img/heptagon.png"
          alt="Vector background"
          className="w-full h-full object-cover"
          style={{
            opacity: 0.1,
            animation: 'spin 10s linear infinite',
          }}
        />
      </div>
      <div
        className="absolute top-64 right-80 flex justify-center items-center"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
        }}
      >
        <img
          src="/img/loading.png"
          alt="Vector background"
          className="w-full h-full object-cover"
          style={{
            opacity: 0.1,
            animation: 'spin 25s linear infinite',
          }}
        />
      </div>
      <div
        ref={leftSideRef}
        className={`w-full md:w-3/5 max-w-lg px-6 md:px-12 text-center md:text-left relative z-10`}
      >
        <h1 className={`text-2xl md:text-2xl font-extrabold leading-tight mb-4 ${textColor}`}>
          Hi, I'm <span className="text-gray-500 text-4xl">Ankur</span> <br />
          <ReactTyped
            strings={['Competitive Programmer!', 'Mern Stack Developer !', 'AIML Enthusiast !', 'Software Developer !']}
            typeSpeed={40}
            backSpeed={30}
            backDelay={1300}
            startDelay={400}
            loop
            showCursor
            className="text-indigo-500"
            style={{ fontSize: '1.8rem' }}
          />
        </h1>
        <p className={`text-base md:text-xs mb-4 ${textColor}`}>
          I’m pursuing a B.Tech in Computer Science and Engineering. With a strong foundation in algorithms, problem-solving, and web development, I am eager to contribute to AI and ML innovations.
        </p>
        <div className="mt-6 flex gap-6 flex-wrap justify-center md:justify-start">
          <a
            href="#resume"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:shadow-xl hover:rotate-1 flex items-center gap-2"
          >
            Resume
            <FaFileAlt className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/ankur-akash"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-pink-500 hover:shadow-xl hover:rotate-1 flex items-center gap-2"
          >
            LinkedIn
            <FaLinkedin className="text-white" />
          </a>
        </div>
      </div>
      <div
        ref={rightSideRef}
        className="hidden md:flex justify-center items-center relative w-2/5 h-full"
      >
        <img
          src="img/ankur.jpg"
          alt="Your profile"
          className="w-3/4 rounded-lg shadow-xl object-cover transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Home;
