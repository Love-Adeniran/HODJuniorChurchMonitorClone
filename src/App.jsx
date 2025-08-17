import { useState } from 'react'
import './index.css'
import './App.css'
import logo from '../src/assets/images/hodlogo.webp'
import { BrowserRouter, Route, Routes } from 'react-router'
import FirstForm from './Components/FirstForm'
import SecondForm from './Components/SecondForm'
import ThirdForm from './Components/ThirdForm'
import * as poppins from './assets/fonts/poppins.regular.ttf'
import SavePage from './Components/SavePage'
// import './assets/fonts/MyFont.ttf'


function App() {
    const [activeTab, setActiveTab] = useState(0);

    const ActivateTab = (index) => {
        setActiveTab(index);
    }

    const tabs = [
        {
            label: "Parent Information (All fields are required unless specified optional)",
            content: (
                <FirstForm  onNext={() => ActivateTab(activeTab + 1)} />
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
                <ThirdForm  onNext={() => ActivateTab(activeTab + 1)} />
            ),
        },

    ];
    return (
        <>
            <div className='bg-[#D6B4B4] h-full w-full  py-30'>

                <div className="md:px-14  font-[Poppins] ">
                    <div className='  md:mx-14 md:px-4'>
                        <div className='  md:px-12 mx-18'>
                            <div className='bg-[#fffffff0] pt-1 rounded-lg mix-blend isolate  md:mx-14 '>
                                <div className='px-6  shadow-neutral-500 shadow-2xl flex flex-col justify-center items-center  bg-white rounded-lg py-4'>
                                    <div className='text-white py-4'>
                                        <img src={logo} alt="" className='w-30' />
                                    </div>
                                    <div className='my-4 text-[#444444] mb-4 max-w-4xl md:px-4'>
                                        <div className=''>
                                            <p className='font-bold font-[MyFont] md:text-3xl text-sm text-[#444444]'>Junior church Monitor</p>
                                            <div className='my-2'>
                                                <p className=' text-md firsttext font-[MyFont]'>Dear Parent/Guardian, please do not register twice! To update your child's info reach out to the Tech Team via the link below: <a href="https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO" className='text-blue-700 firsttext underline underline-blue-700'> https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO</a></p>
                                            </div>
                                            <div className='my-8 '>
                                                <hr className='text-[#c0c0c0]' />
                                            </div>
                                        </div>
                                        <div className="max-w-4xl mx-auto mt-8">
                                            {/* Tabs */}
                                            <div className="flex justify-between mt-8 pt-4">
                                                {tabs.map((tab, index) => (
                                                    <div key={index} className="flex flex-col items-center  w-1/3 cursor-pointer font-(--MyFont) firsttext ">
                                                        {/* Red bar */}
                                                        <div
                                                            className={`w-full  h-1.5  sm:hidden md:block ${activeTab === index ? "bg-[#AB0505]" : "bg-gray-200 border-[#bebdbd]"}`}
                                                        ></div>

                                                        {/* Red triangle pointer */}
                                                        {activeTab === index && (
                                                            <div
                                                                className=" sm:hidden md:block w-0 h-0 border-l-4 border-r-5 border-[#F2F2F2] border-t-5 border-l-transparent border-r-transparent border-t-[#AB0505]"
                                                            ></div>
                                                        )}

                                                        {/* Tab label */}
                                                        <p className="sm:hidden md:block text-center text-[#5b5b5b] text-md my-2 font-[MyFont] firsttext">{tab.label}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tab Content */}
                                            <div className="font-[MyFont] bg-white mx-2">
                                                {tabs[activeTab].content}
                                            </div>
                                            {/* <BrowserRouter> */}
                                                <Routes>
                                                    <Route path="/save" element={<SavePage />} />
                                                </Routes>
                                            {/* </BrowserRouter> */}
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
                            <p className='text-sm'>Dear Parent/Guardian, please do not register twice! To update your child's info reach out to the Tech Team via the link below: <a  href="https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO"> https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO </a></p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default App
