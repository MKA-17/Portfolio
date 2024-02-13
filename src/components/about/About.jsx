import Link from 'next/link'
import React from 'react'
import SkillsSection from './SkillsSection'


// console.log(techStack)
export default function About() {
  return (
    <section id="about" className="py-20">
    <div className="container mx-auto flex flex-col items-center justify-center px-4  ">
        <h2 className="text-3xl text-white font-bold mb-6 text-center underline">
          About Me
        </h2>
      <div className="md:w-3/4 p-6   rounded-md ">
        <div className='flex flex-col'>

        <div className='basis-1/2 flex flex-col p-3 m-3'>
        <h2 className="text-2xl text-white font-bold mb-6 ">
        Get to know me!
          </h2>
          <p className="text-gray-300 leading-relaxed md:text-xl">
          Driven Electrical Engineer with a growing passion for web
          development. I enjoy bridging the gap between hardware knowledge and
          user needs, utilizing my analytical skills to build performant and
          engaging web experiences. Eager to join a team where I can learn and
          grow as a full-stack engineer.
        </p>
        </div>

    {/* {"skills "} */}
        <div className="basis-1/2 p-3 m-3">
          <SkillsSection/>  
        </div>
        </div>

      <Link download href={`${process.env.DOMAIN_NAME}/api/resume`} className='flex   p-3 m-3 rounded gap-1 font-bold hover:text-gray-500 sm:text-sm '>
      Download Résumé
 
    <div className='text-start'><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
      </div>
          </Link>
    </div>
      </div>
  </section>
  )
}
