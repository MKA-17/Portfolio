"use client"

import React, { useEffect, useState } from 'react'
import ProjectCard from '../Projects/ProjectCard'
import ProjectRank from './ProjectRank';

export default function ProjectsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [submitMsg, setSubmitMsg] = useState("");
    const [projectsList, setProjectList] = useState([]);

    useEffect(()=>{
        fetch(`/api/project`, {
            method: "GET",
            cache: "no-cache",
        })
            .then(resp => resp.json())
            .then(data => {
                setSubmitMsg(data.message)
                setIsLoading(()=>false)
                console.log("projectList: ", data)
                if(data.success) setProjectList(()=>data.projects) 
                console.log()
            })
            .catch(err => {
                console.error("err:",  );
                setSubmitMsg("Server Error"); // Fix: Correct the syntax for setting the error message
                setIsLoading(()=>false);
            });
    }, []);


  return (

    <div>
        <section id="portfolio" className="  py-16 text-white">
    <div className="container mx-auto text-center">
      <div className='flex'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      
        {isLoading && "Loading..."}
        {
            !!projectsList?.length &&
                projectsList?.map(e=>
                    <div key={e._id} className='flex flex-col'>
                     <ProjectRank rank={e.rank} id={e._id}/>
                     <ProjectCard {...e} id={e._id} /> 
                    </div>
                    )
        }
      </div>
      </div>
    </div>
  </section> 
    </div>
  )
}
