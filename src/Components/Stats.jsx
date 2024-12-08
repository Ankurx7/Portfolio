import React from "react";
import { useSelector } from "react-redux"; 

const Stat = () => {
  const mode = useSelector((state) => state.theme.mode);

  const stats = [
    {
      platform: "Codeforces",
      maxRating: 1451,
      title: "Specialist",
      problemsSolved: 400,
      contestsParticipated: 40,
      logo: "img/Stats/codeforces_logo.png",
      link: "https://codeforces.com/profile/cryptic_",
      color: "bg-blue-500",
    },
    {
      platform: "LeetCode",
      maxRating: 1978,
      title: "Knight",
      problemsSolved: 700,
      contestsParticipated: 30,
      logo: "img/Stats/leetcode_logo.jpg",
      link: "https://leetcode.com/u/_ankur_77",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div
      id="cpstat"
      className={`py-12 ${mode === 'dark' ? 'bg-gradient-to-r from-blue-900 to-black text-white' : 'bg-gray-100 text-gray-800'} scroll-m-2`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">
          My Competitive Programming Journey
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`leading-[6rem] w-64 ${stat.color} text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="p-4">
                <div className="flex justify-center">
                  <img
                    src={stat.logo}
                    alt={stat.platform}
                    className="w-16 h-16 mb-4 rounded-full border-2 border-white"
                  />
                </div>
                <h2 className="text-xl font-bold mb-4">{stat.platform}</h2>
                <p className={`text-sm  'text-green-900' mb-4`}>
                  <span className="font-semibold">Max Rating:</span> {stat.maxRating}
                </p>
                <p className={`text-sm font-extrabold text-red-600 mb-4`}>
                  <span className="font-semibold">Title:</span> {stat.title}
                </p>
                <p className="text-sm mb-4">
                  <span className="font-semibold">Problems Solved:</span> {stat.problemsSolved}+
                </p>
                <p className="text-sm mb-4">
                  <span className="font-semibold">Contests Participated:</span> {stat.contestsParticipated}+
                </p>
                <a
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-200 transition-colors text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stat;
