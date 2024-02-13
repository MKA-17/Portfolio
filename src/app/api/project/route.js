import { projectModel } from "@/app/models/projectModel";
import { DBConnection } from "@/utils/DB";
import { NextResponse } from "next/server";

export const POST = async (req)=>{
    try{
        await DBConnection();
        const body = await req.json();
        if(body.password !== process.env.PASSWORD)
            return NextResponse.json({message: "You are not authorized for this action!", success: false}, {status: 401});

        console.log("ProjectData: ", body);
        const isProject = await projectModel.findOne({title: body.title});
        if(isProject)
            return NextResponse.json({message: "The Project with this title already exists!", success: true}, {status: 200});
        
        const newProject = await projectModel.create({...body});
        return NextResponse.json({message: "Created the new project!", success: true, project: newProject}, {status: 201})

    }
    catch(e){
        NextResponse.json({message: "Server Error!", success: false, error: e}, {status: 500})
    }
}

export const GET = async (req)=>{
    try{
        await DBConnection();

        const projects = await projectModel.find().sort({rank: 1});

        return NextResponse.json({message: "Fetching projects!", success: true, projects}, {status: 200})

    }
    catch(e){
        NextResponse.json({message: "Server Error!", success: false, error: e}, {status: 500})
    }
}