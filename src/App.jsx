import { useState } from 'react'
import './index.css'
import './App.css'
import logo from '../src/assets/images/hodlogo.webp'
import { BrowserRouter, Route, Routes } from 'react-router'
import SavePage from './Components/SavePage'
import TheForms from './Components/TheForms'
// import './assets/fonts/MyFont.ttf'


function App() {

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
                                                <p className=' text-md firsttext font-[MyFont]'>Dear Parent/Guardian, please do not register twice! To update your child's info reach out to the Tech Team via the link below: <a href="https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO" className='text-[#2900EE] firsttext underline underline-blue-700'> https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO</a></p>
                                            </div>
                                            <div className='my-8 '>
                                                <hr className='text-[#c0c0c0]' />
                                            </div>
                                        </div>
                                        <Routes>
                                            <Route path="/" element={<TheForms />} />,
                                            <Route path="/save" element={<SavePage />} />
                                        </Routes>
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
