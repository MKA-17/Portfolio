import { techStack } from '@/utils/editableData';
import React from 'react';



export default function SkillsSection() {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-6 text-center underline">My Skills & Expertise</h2>
      <div className="mx-auto md:flex justify-center">
        <div className="category md:w-1/3 md:flex-shrink-0 p-4 border border-[#3939e2] m-2 hover:bg-blue-800">
          <h3 className="text-xl font-bold mb-2 md:mb-0 text-center">Frontend</h3>
          <div className="flex flex-wrap p-3 gap-1">
            {techStack.frontend.map((tech, index) => (
              <span
                key={index}
                className="bg-[#3939e2] p-2 rounded-full opacity-80 mb-2 inline-block hover:bg-blue-800 hover:cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="category md:w-1/3 md:flex-shrink-0 p-4 border border-[#3939e2] m-2 hover:bg-blue-800">
          <h3 className="text-xl font-bold mb-2 md:mb-0 text-center">Backend</h3>
          <div className="flex flex-wrap p-3 gap-1">
            {techStack.backend.map((tech, index) => (
              <span
                key={index}
                className="bg-[#3939e2] p-2 rounded-full opacity-80 mb-2 inline-block hover:bg-blue-800 hover:cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="category md:w-1/3 md:flex-shrink-0 p-4 border border-[#3939e2] m-2 hover:bg-blue-800">
          <h3 className="text-xl font-bold mb-2 md:mb-0 text-center">DevTools</h3>
          <div className="flex flex-wrap p-3 gap-1">
            {techStack.devtools.map((tech, index) => (
              <span
                key={index}
                className="bg-[#3939e2] p-2 rounded-full opacity-80 mb-2 inline-block hover:bg-blue-800 hover:cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
