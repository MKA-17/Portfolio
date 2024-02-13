import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function ProjectCard({
  title,
  url,
  image,
  description,
  techStack,
}) {
  return (
    <div className="p-4 shadow-2xl rounded-md relative m-5 hover:bg-blue-900">
      {url && (
        
        <Link
          href={url}
          passHref
          className=" flex mb-5 text-white-500 hover:text-gray-500  "
        >Visit the site
          <svg
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
        </Link>
      )}
      <Image
        src={image}
        alt="Project img"
        width={1280}
        height={720}
        layout="responsive"
        className="w-full h-32 object-cover mb-4 rounded-md "
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
      <div className="flex gap-2 mt-3 flex-wrap text-white text-s">
        {techStack?.map((e, i) => (
          <span key={i} className={`bg-[#3939e2] p-2 rounded-full opacity-80 ${!e?.trim() && "hidden"} `}>{e.trim()}</span>
        ))}
      </div>

      
    </div>
  );
}
