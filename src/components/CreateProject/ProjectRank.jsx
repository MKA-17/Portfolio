"use client"

import React, { useState } from 'react'

export default function ProjectRank({rank, id}) {
    console.log(rank)
    const [rankVal, setRankVal] = useState(rank);
    const [isLoading, setIsLoading] = useState(false);
    const [submitMsg, setSubmitMsg] = useState("");
    const [password,  setPassword] = useState("");


    const handleUpdateRank = (e)=>{

        e.preventDefault();
        setIsLoading(()=>true)
        fetch(`/api/project/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({rank: rankVal , password}), 
        cache: "no-cache",
    })
        .then(resp => resp.json())
        .then(data => {
            setSubmitMsg(data.message)
            setIsLoading(()=>false)
            
        })
        .catch(err => {
            console.error("err:",  err);
            setSubmitMsg("Server Error"); 
            setIsLoading(()=>false);
        });
        

    }

    const handleDelete = (e)=>{
        e.preventDefault();
        const isConfirmed = window.confirm('Are you sure you want to perform this action?');

        if (isConfirmed)
        {
            setIsLoading(()=>true)
        fetch(`/api/project/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({password}), 
        cache: "no-cache",
    })
        .then(resp => resp.json())
        .then(data => {
            setSubmitMsg(data.message)
            setIsLoading(()=>false)
            
        })
        .catch(err => {
            console.error("err:",  err);
            setSubmitMsg("Server Error"); 
            setIsLoading(()=>false);
        });
    }
        

    }
  return (
    <div className='flex flex-col border ring-4 p-3 text-black gap-3'>
            <button type="submit" disabled={isLoading} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700" onClick={handleUpdateRank }>Update Rank</button>

              <button type="submit" disabled={isLoading} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700" onClick={handleDelete}>Delete</button>

  <span className='bg-gray-800 rounded-full text-white'>
        {!!submitMsg && `Message: ${submitMsg}`}
    </span>
         <label className="block mb-4">
        <span className="text-gray-700">Password:</span>
        <input required type='password' name="password" value={password} onChange={e=>setPassword(()=>e.target.value)} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
      </label>
         <label className="text-black">
    <span className="text-gray-700">Rank:</span>
    <input required type="number" name="rank" value={rankVal} onChange={(e)=>setRankVal(()=>e.target.value)} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
  </label>
  </div>
  )
}
