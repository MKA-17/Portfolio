"use client"

import ProjectsList from '@/components/CreateProject/ProjectsList';
import { useFileUploader } from '@/custom/useFirebaseHook';
import React, { useEffect, useState } from 'react';



export default function CreateProject() {

    const {uploadPercent, fileURL, setFile, file} = useFileUploader();
    const [password,  setPassword] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        url: "",
        image: "",
        description: "",
        techStack: [],
        rank: 0
      });
    const [isLoading, setIsLoading] = useState(false);
    const [submitMsg, setSubmitMsg] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [imagePreview, setImagePreview] = useState(null);

      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
    
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(()=>file);
        // setFormData(prevData => ({
        //   ...prevData,
        //   image: file
        // }));
        setFile(()=>file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
    
        if (file) {
          reader.readAsDataURL(file);
        } else {
          setImagePreview(null);
        }

      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        // You can handle the form submission logic here
        console.log("Form submitted with data:", formData, imageFile);
        if(!formData.image) return setSubmitMsg(()=>"image not uploaded")
        setIsLoading(()=>true)
        fetch(`/api/project`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Setting the Content-Type header to JSON
        },
        body: JSON.stringify({...formData, password}), // Fix: Use contactForm instead of 'contactForm'
        cache: "no-cache",
    })
        .then(resp => resp.json())
        .then(data => {
            setSubmitMsg(data.message)
            setIsLoading(()=>false)
            // if(data.success) setFormData(()=>({
            //     title: "",
            //     url: "",
            //     image: "",
            //     description: "",
            //     techStack: []
            // })) 
        })
        .catch(err => {
            console.error("err:",  );
            setSubmitMsg("Server Error"); // Fix: Correct the syntax for setting the error message
            setIsLoading(()=>false);
        });
        
      };

      useEffect(() => {
        // if (imgFile)
        //  UploadFileToFirebase(imgFile, "image");
        console.log("uploading file info: ", [uploadPercent, fileURL])
      }, [uploadPercent, fileURL]);
      useEffect(()=>{
        if(fileURL)
          setFormData(prev=>({
          ...prev, image: fileURL}))
        // console.log("catData: ", getCategorysData?.categories)
      }, [fileURL])
  return (
    <div className='text-black'>
      
 <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-gray-200 rounded-md">
 <label className="block mb-4">
        <span className="text-gray-700 text-3xl">Create Project</span>
      </label>
    <label className="block mb-4">
        <span className="text-gray-700">Password:</span>
        <input required type='password' name="password" value={password} onChange={e=>setPassword(()=>e.target.value)} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Title:</span>
        <input required type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
      </label>
      
      <label className="block mb-4">
        <span className="text-gray-700">Rank:</span>
        <input required type="number" name="rank" value={formData.rank} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">URL:</span>
        <input   type="text" name="url" value={formData.url} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Image:</span>
        <input required type="file" accept="image/*" onChange={handleImageChange} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
        {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 max-w-full h-auto" />}
        {uploadPercent && <span>Upload: {uploadPercent}</span>}
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Description:</span>
        <textarea name="description" value={formData.description} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Tech Stack:</span>
        <textarea name="description" value={formData.techStack.join(",")} onChange={(e)=>{
            setFormData(prev=>({
                ...prev,
                techStack: e.target.value.split(",") 
            }))
        }} 
        className="mt-1 p-2 block w-full rounded-md border-gray-300" />

      </label>

      <button type="submit" disabled={isLoading} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Submit</button>
    <span className=''>
        {!!submitMsg && submitMsg}
    </span>
    </form>
    <div className='  mt-44 flex flex-col item-center justify-center gap-10 '>
        <span className='bg-gray-800 text-white text-5xl p-10 text-center'> projectList</span>
        <div>
            <ProjectsList/>
        </div>
    </div>
   </div>
  )
}

 