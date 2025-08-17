import { InboxIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { Link } from 'react-router';


const SecondForm = ({ onPrevious, onNext }) => {
    const [NumOfChildren, setNumOfChildren] = useState("")
    const [AgeGroup, setAgeGroup] = useState("")
    const [SelectedRelationShip, setSelectedRelationShip] = useState(" ")
    const [SelectedSpecRelationship, setSelectedSpecRelationship] = useState(" ")
    let ErrorMsg = ""

    let formik = useFormik({
        initialValues: {
            numOfChildren: '',
            children: [
                {
                    firstName: '',
                    lastName: '',
                    dobMonth: '',
                    dobDay: '',
                    dobYear: '',
                    ageGroup: '',
                    gender: '',
                    image: '',
                    relationship: '',
                    specificRelationship: '',
                    specialNeed: ''
                }
            ]
        },
        validationSchema: Yup.object({
            numOfChildren: Yup.number().required('Required'),
            children: Yup.array().of(
                Yup.object().shape({
                    firstName: Yup.string().required('Required'),
                    lastName: Yup.string().required('Required'),
                    dob: Yup.date().required('Required'),
                    ageGroup: Yup.string().required('Required'),
                    gender: Yup.string().required('Required'),
                    image: Yup.string(),
                    relationship: Yup.string().required('Required'),
                    specificRelationship: Yup.string().required('Required'),
                    specialNeed: Yup.string()
                })
            )
        }),
        onSubmit: (values) => {
            console.log(values);
            localStorage.setItem('children', JSON.stringify(values.children));
            localStorage.setItem('numOfChildren', JSON.stringify(values.numOfChildren));
            onNext(); // Call the onNext function passed as a prop to move to the next step
        }
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div className='my-4 py-2 text-black'>
                        <legend className=' font-black my-2'>How Many Children?</legend>
                        <div>
                            <select values={NumOfChildren} onChange={formik.handleChange} name='numOfChildren' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' >
                                <option value=" "> </option>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                            </select>
                        </div>
                        {/* <p className='text-red-500 text-sm'>{formik.errors}</p> */}
                    </div>

                        <>
                            {Array.from({ length: formik.values.numOfChildren },(_, i) => (
                                <div className='text-black' key={i} >
                                    <div className=''>
                                        <legend className='font-bold'>Full Name of Child {i + 1} <span className='text-red-700'>*</span></legend>
                                        <div className='flex md:flex-row sm:flex-col  space-x-2 my-2 '>
                                            <div className=' w-[50%] py-2'>
                                                <input type="text"  name='firstName' onChange={formik.handleChange} placeholder='First Name' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                                            </div>
                                            <div className=' w-[50%]  py-2'>
                                                <input type="text" placeholder='Last Name'  name='lastName' onChange={formik.handleChange} className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                                            </div>
                                        </div>

                                        <div className='my-2 text-black'>
                                            <legend className='font-bold'>Date of Birth of Child {i + 1} <span className='text-red-700'>*</span></legend>
                                            <div className='flex flex-row  justify-between my-2'>
                                                <div>
                                                    <input type="number" placeholder='MM' name='dobMonth' onChange={formik.handleChange} min={1} max={12} className='border border-[#BFBFBF] w-50  py-2 px-8 rounded outline-[#066AAB]' />
                                                </div>
                                                <div>
                                                    <input type="number" placeholder='DD' name='dobDay' onChange={formik.handleChange} min={1} max={31} className='border border-[#BFBFBF] w-50  py-2 px-8 rounded outline-[#066AAB]' />
                                                </div>
                                                <div>
                                                    <input type="number" placeholder='YYYY' name='dobYear' onChange={formik.handleChange} min={1900} max={2026} className='border border-[#BFBFBF] w-50  py-2 px-8 rounded outline-[#066AAB]' />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-4 text-black'>
                                        <legend className=' font-black my-2'>Age Group Child {i + 1} <span className='text-red-700'>*</span></legend>
                                        <div>
                                            <select values={AgeGroup} onChange={formik.handleChange} name='ageGroup' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB] my-2'  >
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
                                                <input type="checkbox" value='Female' name='gender' onChange={formik.handleChange} className='border border-[#BFBFBF] rounded outline-[#066AAB] mx-2 text-[#066AAB]' />
                                                <span>Female</span>
                                            </div>
                                            <div className='w-full'>
                                                <input type="checkbox" value='Male' name='gender' onChange={formik.handleChange} className='border border-[#BFBFBF] p-4 rounded outline-[#066AAB] mx-2' />
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
                                                names='image'
                                                values={formik.values.image}
                                                onChange={formik.handleChange}
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
                                            <select values={SelectedRelationShip} name='relationship' onChange={formik.handleChange} className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]'>
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
                                                <select className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' values={SelectedSpecRelationship} onChange={formik.handleChange} name='specificRelationship'>
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
                                                    <select className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' values={SelectedSpecRelationship} onChange={formik.handleChange} name='specificRelationship'    >
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
                                            <input type="text" placeholder='Special need' name='specialNeed' onChange={formik.handleChange} className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                            }
                        </>
                    

                    <div className='my-3 py-2 flex flex-row space-x-2 items-center'>
                        <div>
                            <button  onClick={() => onPrevious()} className='hover:bg-[#055589] bg-[#066AAB] text-white py-2 px-6 my-2 rounded'>Previous</button>
                        </div>
                        <div>
                            <button type='submit' className='hover:bg-[#055589] bg-[#066AAB] text-white py-2 px-6 my-2 rounded'>Next</button>
                        </div>
                        <div>
                            <p className='underline hover:underline-0 text-black font-thin'><Link to="/save">Save and Complete Later</Link></p>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}
export default SecondForm