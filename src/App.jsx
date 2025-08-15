import { useState } from 'react'
import './index.css'
import './App.css'
import logo from '../src/assets/images/hodlogo.webp'
import { BrowserRouter, Route, Routes } from 'react-router'
import FirstForm from './Components/FirstForm'
import Footer from './Components/Footer'
import SecondForm from './Components/SecondForm'
import ThirdForm from './Components/ThirdForm'

function App() {
    const [activeTab, setActiveTab] = useState(0);
    // const [TabIndex,setTabIndex] = useState(0)

    const ActivateTab = (index) => {
        setActiveTab(index);
    }

    const tabs = [
        {
            label: "Parent Information (All fields are required unless specified optional)",
            content: (
                <FirstForm index={activeTab} onClick={ActivateTab} />
            ),
        },
        {
            label: "Child's Information (All fields are required unless specified optional)",
            content: (
                <SecondForm index={activeTab} onClick={ActivateTab} />
            ),
        },
        {
            label: "Care Giver (All fields are required unless specified optional)",
            content: (
                <ThirdForm index={activeTab} onClick={ActivateTab} />
            ),
        },
    ];
    return (
        <>
            <div className='bg-[#D6B4B4] h-full w-full  py-30'>

                <div className="md:px-14  font-[MyFont] ">
                    <div className='  md:mx-14 md:px-4'>
                        <div className='  md:px-12 md:mx-18'>
                            <div className='bg-[#fffffff0] pt-1 rounded-lg mix-blend isolate  md:mx-14 '>
                                <div className='px-9  shadow-neutral-500 shadow-2xl flex flex-col justify-center items-center  bg-white rounded-lg py-4'>
                                    <div className='text-white py-4'>
                                        <img src={logo} alt="" className='w-30' />
                                    </div>
                                    <div className='my-4 text-[#444444] mx-2 mb-4'>
                                        <p className='font-bold md:text-3xl text-[#444444]'>Junior church Monitor</p>
                                        <p className=' firsttext font-thin'>Dear Parent/Guardian, please do not register twice! To update your child's info reach out to the Tech Team via the link below: <a href="https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO" className='text-blue-700'>https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO</a></p>
                                        <div className='my-8 '>
                                            <hr className='text-[#c0c0c0]' />
                                        </div>
                                        <div className="max-w-4xl mx-auto mt-8">
                                            {/* Tabs */}
                                            <div className="flex justify-between mt-8 pt-8">
                                                {tabs.map((tab, index) => (
                                                    <div key={index} className="flex flex-col items-center  w-1/3 cursor-pointer">
                                                        {/* Red bar */}
                                                        <div
                                                            className={`w-full  h-1.5  ${activeTab === index ? "bg-[#AB0505]" : "bg-gray-200 border-[#bebdbd]"}`}
                                                        ></div>

                                                        {/* Red triangle pointer */}
                                                        {activeTab === index && (
                                                            <div
                                                                className="w-0 h-0 border-l-4 border-r-4 border-[#F2F2F2] border-t-4 border-l-transparent border-r-transparent border-t-[#AB0505]"
                                                            ></div>
                                                        )}

                                                        {/* Tab label */}
                                                        <p className="text-center text-black text-md ">{tab.label}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tab Content */}
                                            <div className="bg-white mx-2">
                                                {tabs[activeTab].content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center relative mb-6'>
                    <div className='bg-gradient from-[#D6B4B4] to-transparent text-center text-[#C5A7A7] absolute w-full top-15 '>
                        <div className='  text-center py-4'>
                            <p className='text-sm'>Dear Parent/Guardian, please do not register twice! To update your child's info reach out to the Tech Team via the link below: <a href="https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO">https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO</a></p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default App
