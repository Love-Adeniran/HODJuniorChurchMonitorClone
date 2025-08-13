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
    return (
        <>
            <div className='bg-[#D6B4B4] h-full w-full  py-30'>

                <div className="md:px-14  font-[MyFont] ">
                    <div className='  md:mx-14 md:px-4'>
                        <div className='  md:px-12 md:mx-18'>
                            <div className='bg-[#fffffff0] pt-1 rounded-lg mix-blend isolate  md:mx-14 '>
                                <div className='md:px-10 px-10  shadow-neutral-500 shadow-2xl flex flex-col justify-center items-center  bg-white rounded-lg py-4'>
                                    <div className='text-white py-4'>
                                        <img src={logo} alt="" className='w-30' />
                                    </div>
                                    <div className='my-4 text-[#444444] firsttext mb-4'>
                                        <p className='font-semibold md:text-3xl text-[#444444]'>Junior church Monitor</p>
                                        <p>Dear Parent/Guardian, please do not register twice! To update your child's info reach out to the Tech Team via the link below: <a href="https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO" className='text-blue-700'>https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO</a></p>
                                        <div className='my-8'>
                                            <hr className='text-[#c0c0c0]' />
                                        </div>
                                        <BrowserRouter className=''>
                                            <Routes>
                                                <Route path='/' element={<FirstForm />} />
                                                <Route path='/page2' element={<SecondForm />} />
                                                <Route path='/page3' element={<ThirdForm     />} />
                                            </Routes>
                                        </BrowserRouter>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center relative mb-6'>
                    {/* <Footer /> */}
                    <div className='bg-gradient from-[#D6B4B4] to-transparent text-center text-[#C5A7A7] absolute w-full top-15 '>
                        <div className='  text-center py-4'>
                            <p className='text-sm'>Dear Parent/Guardian, please do not register twice! To update your child's info reach out to the Tech Team via the link below: <a href="https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO">https://chat.whatsapp.com/BMuwF2ACLkdBTMxCLBB1pO</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='text-red-400'>kdfhdsh</div> */}



        </>
    )
}

export default App
