import React from 'react'
import ProjectCard from './ProjectCard'


const fetchData = async () => {
  try {
    const response = await fetch(`${process.env.DOMAIN_NAME}/api/project`, {
      method: "GET",
      cache: "no-store"
    });

    if (!response.ok) {
      return  "Failed to fetch products";
    }

    const data = await response.json();


    return data; 
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return error;
  }
};





export default async function Projects() {
  const projectData = await fetchData();
  // console.log("projects: ", projectData)
  return (
    <>
  {
    !!projectData?.projects?.length && 
    <section id="project" className="  py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 underline">Projects</h2>
        {/* Add your portfolio items here */}
        <div className='flex'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {
          
          projectData?.projects?.map(e=>
                
                <ProjectCard {...e} id={e._id} key={e._id} /> 
              )
        }
          
        </div>
        </div>
      </div>
    </section>
  }
    </>

  )
}
