import React from "react";
import { EDUCATION } from "../constants";

const Experience = () =>{
    return (
        <div className="borde-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Education</h2>
            <div>
                {EDUCATION.map((education, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{education.degree}</h6>
                            <h6 className="text-sm text-purple-100">{education.school}</h6>
                            <p className="mb-4 text-neutral-400">{education.description}</p>
                            {education.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience

