import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaLaravel } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoAndroid } from "react-icons/io";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-blue-300"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-300"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsFiletypeSql className="text-7xl"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-orange-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-7xl text-blue-600"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-300"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaLaravel className="text-7xl text-red-700" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAngular className="text-7xl text-red-700" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoAndroid className="text-7xl text-lime-500" />
                </div>
            </div>
        </div>
    )
};

export default Technologies;