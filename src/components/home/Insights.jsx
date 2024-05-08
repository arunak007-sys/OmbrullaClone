import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Insights() {
    return (
        <div className="flex flex-col p-5 md:p-10">

            <div>
                <p className="font-bold text-center">AI INSIGHTS</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-3 sm:mt-5 font-bold text-center">To Read</h1>
            </div>

            <hr className="mt-8" />

            <div className="w-full mt-5 md:mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Grid layout with 1 column on small screens and up to 3 columns on larger screens */}

                {/* Card 1 */}
                <div className="p-5">
                    <img className="rounded-xl mb-5" src="https://blog.ombrulla.com/wp-content/uploads/2024/04/AI-Visual-Inspection-in-Maritime-Industry.png" alt="" />

                    <p className="text-lg font-bold text-left">Transforming Maritime Inspections with AI Visual Inspection</p>
                    <p className="text-lg text-gray-700 mt-2 text-left">Explore how pioneering AI-driven inspections in the maritime industry are revolutionizing asset monitoring with improved ...</p>

                    <div className="flex items-center mt-4">
                        <FaUserCircle className="text-gray-400 text-4xl mr-2" />
                        <div>
                            <p className="font-bold text-sm text-left">Zara Elizabeth</p>
                            <p className="text-xs text-gray-600">April 29, 2024. 6 min read</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="p-5">
                    <img className="rounded-xl mb-5" src="https://blog.ombrulla.com/wp-content/uploads/2024/04/Use-Case-of-AI-Visual-Inspection.png" alt="" />
                    <p className="text-lg font-bold text-left">AI Visual Inspection & #038; its Use Cases</p>
                    <p className="text-lg text-gray-700 mt-2 text-left">AI-based visual inspection utilizes artificial intelligence algorithms to analyze visual data, enabling automated detect ...</p>

                    <div className="flex items-center mt-10">
                        <FaUserCircle className="text-gray-400 text-4xl mr-2" />
                        <div>
                            <p className="font-bold text-sm text-left">Zara Elizabeth</p>
                            <p className="text-xs text-gray-600">April 5, 2024. 7 min read</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="p-5">
                    <img className="rounded-xl mb-5" src="https://blog.ombrulla.com/wp-content/uploads/2024/03/ai-visual-inspection-in-quality-control.png" alt="" />
                    <p className="text-lg font-bold text-left">How to Include AI Visual Inspection in Quality Control Process</p>
                    <p className="text-lg text-gray-700 mt-2 text-left">Explore how pioneering AI-driven inspections in the maritime industry are revolutionizing asset monitoring with improved ...</p>

                    <div className="flex items-center mt-4">
                        <FaUserCircle className="text-gray-400 text-4xl mr-2" />
                        <div>
                            <p className="font-bold text-sm text-left">Zara Elizabeth</p>
                            <p className="text-xs text-gray-600">April 29, 2024. 6 min read</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
