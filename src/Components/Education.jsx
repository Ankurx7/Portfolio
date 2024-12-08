import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Store/themeSlice";

const Education = () => {
  const firstBoxRef = useRef(null);
  const secondBoxRef = useRef(null);
  const thirdBoxRef = useRef(null);
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

 
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slideIn");
      }
    });
  };


  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, 
    });

    if (firstBoxRef.current) observer.observe(firstBoxRef.current);
    if (secondBoxRef.current) observer.observe(secondBoxRef.current);
    if (thirdBoxRef.current) observer.observe(thirdBoxRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const isDarkMode = mode === "dark";

  const containerClass = isDarkMode
    ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
    : "bg-gradient-to-r from-grey-200 via-grey-300 to-grey-500";

  const lineClass = isDarkMode ? "bg-white" : "bg-gray-400";
  const pointClass = isDarkMode ? "text-white" : "text-grey-900";

  return (
    <div
      className={`scroll-mt-9 flex flex-col items-center justify-center min-h-screen p-6 ${containerClass}`}
      id="Education"
    >
      <h2 className={`text-3xl md:text-4xl mb-8 font-semibold leading-tight ${pointClass}`}>
        Education
      </h2>

      <div className="relative w-full max-w-2xl">
     
        <div className={`absolute left-2 sm:left-6 top-0 bottom-0 w-1 sm:w-1 ${lineClass} z-0 rounded-2xl`}></div>

       
        <ul className="list-none p-0 w-full relative z-10 flex flex-col items-center">
         
          <li
            ref={firstBoxRef}
            className="transition-all duration-900 ease-out opacity-0 p-4 sm:p-6 mb-6 rounded-lg shadow-lg relative cursor-pointer bg-gradient-to-r from-gray-200 to-gray-300 w-4/5 h-auto transform scale-90"
          >
            <div
              className={`absolute left-[-36px] sm:left-[-64px] top-1/2 transform -translate-y-1/2 w-5 h-5 ${lineClass} rounded-full z-10`}
            ></div>
            <img
              src="img/Education/bit-newlogo.png"
              alt="Institution Logo"
              className="absolute top-2 right-2 w-12 h-12 object-contain z-0"
            />
            <h3 className="text-sm sm:text-base mb-2 font-semibold leading-tight">
              Bachelor of Technology
            </h3>
            <p className="text-sm sm:text-sm font-medium ">
              Computer Science and Engineering
            </p>
            <p className="text-xs font-bold sm:text-sm italic ">CGPA: 8.24</p>
            <p className="text-xs sm:text-sm italic text-red-600">
              Birla Institute of Technology, Mesra Ranchi
            </p>
            <p className="text-right text-sm sm:text-sm text-green-800">2022 - 2026</p>
          </li>

       
          <li
            ref={secondBoxRef}
            className="transition-all duration-900 ease-out opacity-0 p-4 sm:p-6 mb-6 rounded-lg shadow-lg relative cursor-pointer bg-gradient-to-r from-gray-200 to-gray-300 w-4/5 h-auto transform scale-90"
          >
            <div
              className={`absolute left-[-36px] sm:left-[-64px] top-1/2 transform -translate-y-1/2 w-5 h-5 ${lineClass} rounded-full z-10`}
            ></div>
            <img
              src="img/Education/loyola.jpeg"
              alt="Institution Logo"
              className="absolute top-2 right-2 w-12 h-12 object-contain z-0"
            />
            <h3 className="text-sm sm:text-base mb-2 font-semibold leading-tight">
              Senior Secondary Education
            </h3>
            <p className="text-sm sm:text-sm font-medium">Intermediate [Science] , CBSE</p>
            <p className="text-xs font-bold sm:text-sm italic">AISSCE Results: 92.2%</p>
            <p className="text-xs sm:text-sm italic text-red-600">
              Loyola Convent School, Ranchi
            </p>
            <p className="text-right text-sm sm:text-sm text-green-800">2019 - 2021</p>
          </li>

       
          <li
            ref={thirdBoxRef}
            className="transition-all duration-900 ease-out opacity-0 p-4 sm:p-6 mb-6 rounded-lg shadow-lg relative cursor-pointer bg-gradient-to-r from-gray-200 to-gray-300 w-4/5 h-auto transform scale-90"
          >
            <div
              className={`absolute left-[-36px] sm:left-[-64px] top-1/2 transform -translate-y-1/2 w-5 h-5 ${lineClass} rounded-full z-10`}
            ></div>
            <img
              src="img/Education/loyola.jpeg"
              alt="Institution Logo"
              className="absolute top-2 right-2 w-12 h-12 object-contain z-0"
            />
            <h3 className="text-sm sm:text-base mb-2 font-semibold leading-tight">
              Secondary Education (Class 10th)
            </h3>
            <p className="text-sm sm:text-sm font-medium">Matriculation, CBSE </p>
            <p className="text-xs font-bold sm:text-sm italic">AISSE Results: 92.2%</p>
            <p className="text-xs sm:text-sm italic text-red-600">
              Loyola Convent School, Ranchi
            </p>
            <p className="text-right text-sm sm:text-sm text-green-800">2018 - 2019</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
