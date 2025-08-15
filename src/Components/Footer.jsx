// import React from 'react'

import React, { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";

const Footer = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            label: "Parent Information (All fields are required unless specified optional)",
            content: (
                <FirstForm/>
            ),
        },
        {
            label: "Child's Information (All fields are required unless specified optional)",
            content: (
                <SecondForm/>
            ),
        },
        {
            label: "Care Giver (All fields are required unless specified optional)",
            content: (
                <ThirdForm/>
            ),
        },
    ];
    return (
        <>
            <div className="max-w-4xl mx-auto">
                {/* Tabs */}
                <div className="flex justify-between border-b border-gray-200">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-1/3 cursor-pointer"
                            onClick={() => setActiveTab(index)}
                        >
                            {/* Red bar */}
                            <div
                                className={`w-full h-1 ${activeTab === index ? "bg-red-700" : "bg-transparent"
                                    }`}
                            ></div>

                            {/* Red triangle pointer */}
                            {activeTab === index && (
                                <div
                                    className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-red-700"
                                ></div>
                            )}

                            {/* Tab label */}
                            <p className="text-center text-sm p-2">{tab.label}</p>
                        </div>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white border border-gray-200 rounded-b-md shadow-sm">
                    {tabs[activeTab].content}
                </div>
            </div>
        </>
    );
};


export default Footer