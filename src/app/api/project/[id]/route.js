import { projectModel } from "@/app/models/projectModel";
import { DBConnection } from "@/utils/DB";
import { NextResponse } from "next/server";

export const PUT = async (req, {params})=>{
    try{
        await DBConnection();
        const body = await req.json();
        console.log(body, params)
        if(body.password !== process.env.PASSWORD)
            return NextResponse.json({message: "You are not authorized for this action!", success: false}, {status: 401});

        console.log("ProjectData: ", body);
        const updatedProject = await projectModel.findByIdAndUpdate(
            params.id,
            { rank: body.rank },  
            { new: true } 
          );        
        return NextResponse.json({message: "The Project rank is updated!", success: true, updatedProject}, {status: 200});
        
        
    }
    catch(e){
        NextResponse.json({message: "Server Error!", success: false, error: e}, {status: 500})
    }
}

export const DELETE = async (req, {params})=>{
    try{
        await DBConnection();
        const body = await req.json();
        console.log(body, params)
        if(body.password !== process.env.PASSWORD)
            return NextResponse.json({message: "You are not authorized for this action!", success: false}, {status: 401});

        // console.log("ProjectData: ", body);
        const project = await projectModel.findByIdAndDelete(
            params.id,
            { new: true } 
          );        
        return NextResponse.json({message: "The Project is Deleted!", success: true}, {status: 200});
        
        
    }
    catch(e){
        NextResponse.json({message: "Server Error!", success: false, error: e}, {status: 500})
    }
}