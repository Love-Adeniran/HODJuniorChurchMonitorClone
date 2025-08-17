import { useState } from 'react'
import '../App.css'
import '../index.css'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import ThirdForm from './ThirdForm'


const TheForms = () => {
    const [activeTab, setActiveTab] = useState(0);

    const ActivateTab = (index) => {
        setActiveTab(index);
    }

    const tabs = [
        {
            label: "Parent Information (All fields are required unless specified optional)",
            content: (
                <FirstForm onNext={() => ActivateTab(activeTab + 1)} />
            ),
        },
        {
            label: "Child's Information (All fields are required unless specified optional)",
            content: (
                <SecondForm onPrevious={() => ActivateTab(activeTab - 1)} onNext={() => ActivateTab(activeTab + 1)} />
            ),
        },
        {
            label: "Care Giver (All fields are required unless specified optional)",
            content: (
                <ThirdForm onNext={() => ActivateTab(activeTab + 1)} />
            ),
        },

    ];
    return (
        <>
            <div className=" max-w-4xl mx-auto mt-8 ">
                {/* Tabs */}
                <div className="hidden md:flex justify-between mt-8 pt-4 ">
                    {tabs.map((tab, index) => (
                        <div key={index} className="flex flex-col items-center w-1/3 cursor-pointer font-(--MyFont) firsttext ">
                            {/* Red bar */}
                            <div
                                className={`w-full  h-1.5  ${activeTab === index ? "bg-[#AB0505]" : "bg-gray-200 border-[#bebdbd]"}`}
                            ></div>

                            {/* Red triangle pointer */}
                            {activeTab === index && (
                                <div
                                    className="w-0 h-0 border-l-4 border-r-5 border-[#F2F2F2] border-t-5 border-l-transparent border-r-transparent border-t-[#AB0505]"
                                ></div>
                            )}

                            {/* Tab label */}
                            <p className=" text-center text-[#5b5b5b] text-md my-2 font-[MyFont] firsttext">{tab.label}</p>
                        </div>
                    ))}
                </div>
                {/* Tab Content */}
                <div className="font-[MyFont] ">
                    {tabs[activeTab].content}
                </div>
            </div>
        </>
    )
}

export default TheForms