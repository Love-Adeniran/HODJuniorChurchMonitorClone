import { InboxIcon } from '@heroicons/react/24/outline'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ThirdForm = () => {
    const [NumOfPeople, setNumOfPeople] = useState('')
    const [CaregiverRole, setCaregiverRole] = useState('')
    let formik = useFormik({
        initialValues: {
            numOfPeople: '',
            caregivers: [
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    gender: '',
                    cgRole: '',
                    cgPrimaryPhone: '',
                    cgSecondaryPhone: '',
                    cgPicture: '',
                    singleLineText: '',
                },
                
            ],
        },
        // validationSchema: Yup.object({
        //     numOfPeople: Yup.number().min(0).required('Required'),
        //     caregivers: Yup.array().of(
        //         Yup.object().shape({
        //             firstName: Yup.string().required('Required'),
        //             lastName: Yup.string().required('Required'),
        //             email: Yup.string().email('Invalid email').required('Required'),
        //             gender: Yup.string().required('Required'),
        //             cgRole: Yup.string().required('Required'),
        //             cgPrimaryPhone: Yup.string().required('Required'),
        //             cgSecondaryPhone: Yup.string(),
        //             cgPicture: Yup.string().required('Required'),
        //             singleLineText: Yup.string(),
        //         })
        //     ),
        // }),
        onSubmit: (values) => {
            console.log(values);
            localStorage.setItem('caregivers', JSON.stringify(values.caregivers));
            localStorage.setItem('numOfPeople', JSON.stringify(values.numOfPeople));
        },
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} >
                <div className='my-4 py-2 text-black'>
                    <legend className=' font-black my-2'>How many other people would you Love to Help bring or get your child when you are not around? <span className='text-red-700'>*</span></legend>
                    <div>
                        <select className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' values={NumOfPeople} name='numOfPeople' onChange={formik.handleChange} required>
                            <option value=""></option>
                            <option value="0">0</option>
                            <option value="1" >1</option>
                            <option value="2" >2</option>
                        </select>
                    </div>
                    {/* <p className='text-red-500 text-sm'>{ErrorMsg}</p> */}
                </div>



                {Array.from({ length: formik.values.numOfPeople }, (_, index) => (
                    <div key={index}>
                        <div className=''>
                            <legend className='font-bold'>{index +1 === 1? 'First' :  'Second' } Care Giver</legend>
                            <div className='flex md:flex-row sm:flex-col  justify-between my-2 '>
                                <div className='pe-2 w-[50%]  py-2'>
                                    <input type="text"  name='firstName' onChange={formik.handleChange} placeholder='First Name' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                                </div>
                                <div className='pe-2 w-[50%]  py-2'>
                                    <input type="text" name='lastName' onChange={formik.handleChange}    placeholder='Last Name' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                                </div>
                            </div>
                        </div>
                        <div className='my-2 py-2'>
                            <legend className='font-bold my-2'>Email of {index + 1 === 1 ? 'First' : 'Second'} CG</legend>
                            <div className=' pe-2'>
                                <input type="email" name='email' onChange={formik.handleChange}  placeholder='Email' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                        <div className='my-2 py-2'>
                            <legend className='font-bold my-2'>Gender of {index + 1 === 1 ? 'First' : 'Second'} CG</legend>
                            <div className='flex md:flex-row justify-between my-2 '>
                                <div className='w-full'>
                                    <input type="checkbox" value='Female' name='gender' onChange={formik.handleChange} className='px-4 border  rounded outline-[#066AAB] mx-2 text-[#066AAB]' />
                                    <span>Female</span>
                                </div>
                                <div className='w-full'>
                                    <input type="checkbox" value='Male' name='gender' onChange={formik.handleChange} className='border border-[#BFBFBF] p-4 rounded outline-[#066AAB] mx-2' />
                                    <span>Male</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <legend className='font-bold my-2'> {index + 1 === 1 ? 'First' : 'Second'} CG's Role in Church</legend>
                            <div>
                                <select name='cgRole' values={CaregiverRole} onChange={formik.handleChange} className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]'>
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
                                <input type="text" name='cgPrimaryPhone' onChange={formik.handleChange} placeholder='Primary phone number' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                        <div className='my-2 py-2'>
                            <legend className='font-bold my-2'>{index + 1 === 1 ? 'First' : 'Second'} CG's Secondary Phone Number</legend>
                            <div className=' pe-2'>
                                <input type="text" name='cgSecondaryPhone' onChange={formik.handleChange} placeholder='Secondary phone number' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                        <div className='my-2 py-2'>
                            <legend className='font-bold my-2'>Upload {index + 1 === 1 ? 'First' : 'Second'} CG's Picture (A clear headshot Picture of CG)</legend>
                            <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-6 text-center cursor-pointer outline-[#066AAB ] transition "
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={formik.handleChange}
                                    className="hidden"
                                    id="file-upload"
                                    name='cgPicture'
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
                        <input type="text" placeholder='' name='singleLineText' onChange={formik.handleChange} className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                    </div>
                </div>
                <div className='my-2 py-2 flex flex-row space-x-2 items-center'>
                    <div>
                        <button type="submit" className='hover:bg-[#055589] bg-[#066AAB] text-white py-2 px-4 my-2 rounded'>Submit</button>
                    </div>
                    <div>
                        <p className='underline hover:underline-0 text-black font-thin'><Link to="/save">Save and Complete Later</Link></p>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ThirdForm