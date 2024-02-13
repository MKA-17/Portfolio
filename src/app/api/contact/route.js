import { NextResponse } from "next/server";
import  nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_ACCOUNT,//generate appPassword from the gmail account
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const POST = async (req)=>{
    try{
        const body = await req.json();
        const info = await transporter.sendMail({
            from: body.email, // sender address
            to: "m.khizar.aslam17@gmail.com", // list of receivers
            subject: "Contacting Via Portfolio", // Subject line
             html: ` <html>
             <head>
                 <style>
                     body {
                         font-family: Arial, sans-serif;
                     }
                     h3 {
                         color: #007bff;
                     }
                     p {
                         margin-bottom: 10px;
                     }
                 </style>
             </head>
             <body>
                 <h3>New Contact Form Submission</h3>
                 <p><strong>Sender Name:</strong> ${body.name}</p>
                 <p><strong>Sender Email:</strong> ${body.email}</p>
                 <p><strong>Message:</strong></p>
                 <p>${body.message}</p>
             </body>
         </html>`
          });
           
        return NextResponse.json({message: "Sent the Mail!", success: true, info, body}, {status: 200})

    }
    catch(e){
        NextResponse.json({message: "Server Error!", success: false, error: e}, {status: 500})
    }
}