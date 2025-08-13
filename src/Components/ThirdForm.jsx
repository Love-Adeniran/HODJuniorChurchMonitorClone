import { InboxIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

const ThirdForm = () => {
    const [NumOfPeople, setNumOfPeople] = useState('')
    return (
        <>
            <div>
                <div className='my-4 py-2 text-black'>
                    <legend className=' font-black my-2'>How many other people would you Love to Help bring or get your child when you are not around? <span className='text-red-700'>*</span></legend>
                    <div>
                        <select className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' value={NumOfPeople} onChange={(e) => setNumOfPeople(e.target.value)} required>
                            <option value=""></option>
                            <option value="0">0</option>
                            <option value="1" >1</option>
                            <option value="2" >2</option>
                        </select>
                    </div>
                    {/* <p className='text-red-500 text-sm'>{ErrorMsg}</p> */}
                </div>



                {Array.from({ length: NumOfPeople }, (_, index) => (
                    <div key={index}>
                        <div className=''>
                            <legend className='font-bold'>{index +1 === 1? 'First' :  'Second' } Care Giver</legend>
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
                            <legend className='font-bold my-2'>Email of {index + 1 === 1 ? 'First' : 'Second'} CG</legend>
                            <div className=' pe-2'>
                                <input type="email" placeholder='Email' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                        <div className='my-2 py-2'>
                            <legend className='font-bold my-2'>Gender of {index + 1 === 1 ? 'First' : 'Second'} CG</legend>
                            <div className='flex md:flex-row justify-between my-2 '>
                                <div className='w-full'>
                                    <input type="checkbox" value='Female' className='px-4 border  rounded outline-[#066AAB] mx-2 text-[#066AAB]' />
                                    <span>Female</span>
                                </div>
                                <div className='w-full'>
                                    <input type="checkbox" value='Male' className='border border-[#BFBFBF] p-4 rounded outline-[#066AAB] mx-2' />
                                    <span>Male</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <legend className='font-bold my-2'> {index + 1 === 1 ? 'First' : 'Second'} CG's Role in Church</legend>
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
                            <legend className='font-bold my-2'>{index + 1 === 1 ? 'First' : 'Second'} CG's Primary Phone Number</legend>
                            <div className=' pe-2'>
                                <input type="text" placeholder='Primary phone number' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                        <div className='my-2 py-2'>
                            <legend className='font-bold my-2'>{index + 1 === 1 ? 'First' : 'Second'} CG's Secondary Phone Number</legend>
                            <div className=' pe-2'>
                                <input type="text" placeholder='Secondary phone number' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                        <div className='my-2 py-2'>
                            <legend className='font-bold my-2'>Upload {index + 1 === 1 ? 'First' : 'Second'} CG's Picture (A clear headshot Picture of CG)</legend>
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
                            <p className="text-sm text-gray-500 mt-2">A clear headshot Picture of CG</p>
                        </div>

                    </div>
                ))
                }

                <div className='my-2 '>
                    <legend className='font-extrabold text-black my-2'>Single Line Text</legend>
                    <div className=' py-2'>
                        <input type="text" placeholder='' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                    </div>
                </div>
                <div className='my-2 py-2 flex flex-row space-x-2 items-center'>
                    <div>
                        {/* <Link to="/" className='hover:bg-[#055589] bg-[#066AAB] text-white py-2 px-6 my-2 rounded'>Submit</Link> */}
                        <input type="submit" value="Submit" className='hover:bg-[#055589] bg-[#066AAB] text-white py-2 px-4 my-2 rounded' />
                    </div>
                    <div>
                        <p className='underline hover:underline-0 text-black font-thin'><a href="#">Save and Complete Later</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdForm