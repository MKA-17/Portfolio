"use client"

import React, { useState } from "react";
 
 

export default function Contact() {
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitMsg, setSubmitMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(contactForm.message)

        {
            setSubmitMsg("")
            setIsLoading(()=>true)
            fetch(`api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Setting the Content-Type header to JSON
            },
            body: JSON.stringify(contactForm), // Fix: Use contactForm instead of 'contactForm'
            cache: "no-cache",
        })
            .then(resp => resp.json())
            .then(data => {
                setSubmitMsg(data.message)
                setIsLoading(()=>false)
                if(data.success) setContactForm(()=>({
                    name: "",
                    email: "",
                    message: ""
                })) 
            })
            .catch(err => {
                console.error("err:",  );
                setSubmitMsg("Server Error"); // Fix: Correct the syntax for setting the error message
                setIsLoading(()=>false);
            });
        
}
        console.log(contactForm);
    };

    return (
        <div id="contact" className="container mx-auto my-28 text-center  py-20"  >
            <h2 className="text-3xl font-bold mb-6 underline">Contact Me</h2>
            <p className="text-lg mb-6">Let's connect and discuss your project.</p>
            <section className="py-16   text-white">
                <form
                    id="contactForm"
                    className="max-w-md mx-auto  rounded  md:ring-4 p-4 shadow-2xl"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-full">
                            <label htmlFor="name" className="block text-left mb-2">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Enter Your Name"
                                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                value={contactForm.name}
                                onChange={(e) =>
                                    setContactForm((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block text-left mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Enter Your Email"
                                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                value={contactForm.email}
                                onChange={(e) =>
                                    setContactForm((prev) => ({
                                        ...prev,
                                        email: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="message" className=" block text-left mb-2">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Send a Message."
                                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                value={contactForm.message}
                                onChange={(e) =>
                                    setContactForm((prev) => ({
                                        ...prev,
                                        message: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending..." :"Send"}
                        </button>

                    </div>
                    <span className="">{!!submitMsg && submitMsg}</span>
                </form>
            </section>
        </div>
    );
}
