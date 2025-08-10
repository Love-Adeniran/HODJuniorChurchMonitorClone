import React, { useState } from 'react'
import { InboxIcon } from '@heroicons/react/24/outline';

const FirstForm = () => {
    

    
    return (
        <>
            <div className=' '>
                <form action="">
                    <div className=''>
                        <legend className='font-bold'>Parent Full Name</legend>
                        <div className='flex md:flex-row sm:flex-col  justify-between my-2 '>
                            <div className='pe-2 w-[50%]  py-2'>
                                <input type="text" placeholder='First Name' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                            </div>
                            <div className='pe-2 w-[50%]  py-2'>
                                <input type="text" placeholder='Last Name' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Email</legend>
                        <div className=' pe-2'>
                            <input type="email"  placeholder='Email' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Gender</legend>
                        <div className='flex md:flex-row justify-between my-2 '>
                            <div className='w-full'>
                                <input type="checkbox" value='Female' className='border border-[#BFBFBF] rounded outline-[#066AAB] mx-2 text-[#066AAB]' />
                                <span>Female</span>
                            </div>
                            <div className='w-full'>
                                <input type="checkbox" value='Male' className='border border-[#BFBFBF] p-4 rounded outline-[#066AAB] mx-2' />
                                <span>Male</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <legend className='font-bold my-2'>Role in Church</legend>
                        <div>
                            <select className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]'>
                                <option value=" "></option>
                                <option value="Visitor">Visitor</option>
                                <option value="Member">Member</option>
                                <option value="Worker">Worker</option>
                                <option value="Assistant HOD">Assistant HOD</option>
                                <option value="HOD">HOD</option>
                                <option value="Director">Director</option>
                                <option value="Pastor">Pastor</option>
                            </select>
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Primary Phone Number</legend>
                        <div className=' pe-2'>
                            <input type="text" placeholder='Primary phone number' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Secondary Phone Number</legend>
                        <div className=' pe-2'>
                            <input type="text" placeholder='Secondary phone number' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Means of Identification</legend>
                        <div>
                            <select className='border border-[#BFBFBF] w-full p-2 rounded-lg outline-[#066AAB]'>
                                <option value=" "> </option>
                                <option value="NIN">NIN</option>
                                <option value="Voter's Card">Voter's Card</option>
                                <option value="Driver's License">Driver's License</option>
                            </select>
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Upload Parent Picture (A clear headshot Picture of parent)</legend>
                        <div
                            // onDrop={handleDrop}
                            // onDragOver={handleDragOver}
                            className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-6 text-center cursor-pointer outline-[#066AAB ] transition "
                        >
                            <input
                                type="file"
                                accept="image/*"
                                // onChange={handleFileChange}
                                className="hidden"
                                id="file-upload"
                            />
                            <label htmlFor="file-upload" className="cursor-pointer items-center justify-center flex flex-col">
                                {/* Preview */}

                                
                                <InboxIcon className="h-20 w-8  text-[#aeadad] " />
                                <p className="mt-2 text-gray-600">Click or drag a file to this area to upload</p>
                            </label>
                        </div>
                        
                        {/* Help text */}
                        <p className="text-sm text-gray-500 mt-2">A clear headshot Picture of Parent</p>
                    </div>
                    <div>
                        <legend className='font-bold my-2'>Address</legend>
                        <div className='pe-2'>
                            <input type="text" placeholder='No & Street' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                        </div>
                        <div className='flex md:flex-row sm:flex-col  justify-between my-2 '>
                            <div className='pe-2 w-[50%]  py-2'>
                                <input type="text" placeholder='Area' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                            </div>
                            <div className='pe-2 w-[50%]  py-2'>
                                <input type="text" placeholder='State/Country' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                    </div>
                    <div className='my-2 py-2 flex flex-row space-x-2 items-center'>
                        <div>
                            <Link to="/page2" className='bg-[#055589] text-white py-2 px-6 my-2 rounded'>Next</Link>
                        </div>
                        <div>
                            <p className='underline hover:underline-0 text-black font-thin'><a href="#">Save and Complete Later</a></p>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}

export default FirstForm