import { InboxIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SecondForm = () => {
    const [NumOfChildren, setNumOfChildren] = useState()
    const [SelectedNumber, setSelectedNumber] = useState("")
    const [SelectedOption, setSelectedOption] = useState(" ")
    const [isEmpty, setisEmpty] = useState(true);
    const [SelectedRelationShip, setSelectedRelationShip] = useState(" ")
    const [SelectedSpecRelationship, setSelectedSpecRelationship] = useState(" ")
    let ErrorMsg = ""
    let value

    const handleNumChange = (e) => {
        setSelectedNumber(e.target.value);
        value = SelectedNumber;
        if (value === " ") {
            ErrorMsg = "Please select the number of children";
            isEmpty = true;
        } else {
            setisEmpty(false);
            console.log(value);
            setNumOfChildren(value);
            ErrorMsg = "";

        }
    }





    return (
        <>
            <div>
                <div>
                    <div className='my-4 py-2 text-black'>
                        <legend className=' font-black my-2'>How Many Children?</legend>
                        <div>
                            <select className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' value={SelectedOption} onChange={handleNumChange}>
                                <option value=" "> </option>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                            </select>
                        </div>
                        <p className='text-red-500 text-sm'>{ErrorMsg}</p>
                    </div>
                    {/* hidden */}
                    {!isEmpty &&
                        // generate div using a for loop
                        <>
                            {Array.from({ length: SelectedNumber }, (_, i) => (
                                <div className='text-black' key={i} >
                                    <div className=''>
                                        <legend className='font-bold'>Full Name of Child {i + 1} <span className='text-red-700'>*</span></legend>
                                        <div className='flex md:flex-row sm:flex-col  space-x-2 my-2 '>
                                            <div className=' w-[50%] py-2'>
                                                <input type="text" placeholder='First Name' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                                            </div>
                                            <div className=' w-[50%]  py-2'>
                                                <input type="text" placeholder='Last Name' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                                            </div>
                                        </div>

                                        <div className='my-2 text-black'>
                                            <legend className='font-bold'>Date of Birth of Child {i + 1} <span className='text-red-700'>*</span></legend>
                                            <div className='flex flex-row  justify-between my-2'>
                                                <div>
                                                    <input type="number" placeholder='MM' min={1} max={12} className='border border-[#BFBFBF] w-50  py-2 px-8 rounded outline-[#066AAB]' />
                                                </div>
                                                <div>
                                                    <input type="number" placeholder='DD' min={1} max={31} className='border border-[#BFBFBF] w-50  py-2 px-8 rounded outline-[#066AAB]' />
                                                </div>
                                                <div>
                                                    <input type="number" placeholder='YYYY' min={1900} max={2026} className='border border-[#BFBFBF] w-50  py-2 px-8 rounded outline-[#066AAB]' />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-4 text-black'>
                                        <legend className=' font-black my-2'>Age Group Child {i + 1} <span className='text-red-700'>*</span></legend>
                                        <div>
                                            <select className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB] my-2'  >
                                                <option value=" "> </option>
                                                <option value="Creche (6months to 1 year)" >Creche (6months to 1 year)</option>
                                                <option value="Age 1 to 3" >Age 1 to 3</option>
                                                <option value="Age 4 to 5" >Age 4 to 5</option>
                                                <option value="Age 6 to 8" >Age 6 to 8</option>
                                                <option value="Age 9 to 12" >Age 9 to 12</option>
                                            </select>
                                        </div>
                                        {/* <p className='text-red-500 text-sm'>{ErrorMsg}</p> */}
                                    </div>

                                    <div className='my-2  text-black'>
                                        <legend className='font-bold my-2'>Gender of Child {i + 1} <span className='text-red-700'>*</span></legend>
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
                                    <div className='my-2  text-black'>
                                        <legend className='font-bold my-2'>Upload Picture of Child {i + 1} <span className='text-red-700'>*</span></legend>
                                        <div
                                            className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-6 text-center cursor-pointer outline-[#066AAB ] transition "
                                        >
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden my-4"
                                                id="file-upload"
                                            />
                                            <label htmlFor="file-upload" className="cursor-pointer items-center justify-center flex flex-col">
                                                <InboxIcon className="h-20 w-8  text-[#aeadad] " />
                                                <p className="mt-2 text-gray-600">Click or drag a file to this area to upload</p>
                                            </label>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2">A clear headshot Picture of Child {i + 1}</p>
                                    </div>

                                    <div className='my-4  text-black'>
                                        <legend className=' font-black my-2'>Relationship of Child {i + 1} <span className='text-red-700'>*</span></legend>
                                        <div>
                                            <select className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' value={SelectedRelationShip} onChange={(e) => setSelectedRelationShip(e.target.value)}>
                                                <option value=" "> </option>
                                                <option value="Parent" >Parent</option>
                                                <option value="Guardian" >Guardian</option>
                                            </select>
                                        </div>
                                        {/* <p className='text-red-500 text-sm'>{ErrorMsg}</p> */}
                                    </div>

                                    {SelectedRelationShip == "Parent" && <div>
                                        <div className='my-4  text-black'>
                                            <legend className=' font-black my-2'>Specify Relationship (Parent) for Child {i + 1} <span className='text-red-700'>*</span></legend>
                                            <div>
                                                <select className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' value={SelectedSpecRelationship} onChange={(e) => setSelectedSpecRelationship(e.target.value)}>
                                                    <option value=" "> </option>
                                                    <option value="Father" >Father</option>
                                                    <option value="Mother" >Mother</option>
                                                </select>
                                            </div>
                                            {/* <p className='text-red-500 text-sm'>{ErrorMsg}</p> */}
                                        </div>
                                    </div>}
                                    <div>
                                        {SelectedRelationShip == "Guardian" && <div>
                                            <div className='my-4  text-black'>
                                                <legend className=' font-black my-2'>Specify Relationship (Guardian) for Child {i + 1} <span className='text-red-700'>*</span></legend>
                                                <div>
                                                    <select className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' value={SelectedSpecRelationship} >
                                                        <option value=" "> </option>
                                                        <option value="Grand Dad" >Grand Dad</option>
                                                        <option value="Grand Mom" >Grand Mom</option>
                                                        <option value="Brother" >Brother</option>
                                                        <option value="Sister" >Sister</option>
                                                        <option value="Uncle" >Uncle</option>
                                                        <option value="Aunt" >Aunt</option>
                                                        <option value="Other" >Other</option>
                                                    </select>
                                                </div>
                                                {/* <p className='text-red-500 text-sm'>{ErrorMsg}</p> */}
                                            </div>
                                        </div>}
                                    </div>

                                    <div className='my-2 '>
                                        <legend className='font-extrabold text-black my-2'>Special Need of Child {i + 1} (any special type of care for the child)</legend>
                                        <div className=' py-2'>
                                            <input type="text" placeholder='Special need' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                            }
                        </>
                    }

                    <div className='my-3 py-2 flex flex-row space-x-2 items-center'>
                        <div>
                            <Link to="/" className='hover:bg-[#055589] bg-[#066AAB] text-white py-2 px-4 my-2 rounded'>Previous</Link>
                        </div>
                        <div>
                            <Link to="/page3" className='hover:bg-[#055589] bg-[#066AAB] text-white py-2 px-6 my-2 rounded'>Next</Link>
                        </div>
                        <div>
                            <p className='underline hover:underline-0 text-black font-thin'><a href="#">Save and Complete Later</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SecondForm