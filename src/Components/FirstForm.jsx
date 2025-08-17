import React, { useState } from 'react'
import { InboxIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const FirstForm = ({onNext}) => {
    const [MeansOfIdentification, setMeansOfIdentification] = useState('')
    let formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            role: '',
            phoneNumber: '',
            meansOfIdentification: '',
            NINumber: '',
            votersCard: '',
            DriversIDNumber: '',
            headShot: '',
            Address: '',
        },
        // validationSchema: Yup.object({
        //     firstName: Yup.string().required('Required'),
        //     lastName: Yup.string().required('Required'),
        //     email: Yup.string().email('Invalid email').required('Required'),
        //     gender: Yup.string().required('Required'),
        //     role: Yup.string().required('Required'),
        //     phoneNumber: Yup.string().required('Required'),
        //     meansOfIdentification: Yup.string(),
        //     NINumber: Yup.string().when('meansOfIdentification', {
        //         is: 'NIN',
        //         then: Yup.string().required('Required'),
        //     }),
        //     votersCard: Yup.string().when('meansOfIdentification', {
        //         is: 'VotersCard',
        //         then: Yup.string().required('Required'),
        //     }),
        //     DriversIDNumber: Yup.string().when('meansOfIdentification', {
        //         is: 'DriversID',
        //         then: Yup.string().required('Required'),
        //     }),
        //     headShot: Yup.object().shape({
        //         file: Yup.mixed(),
        //         url: Yup.string().url('Invalid URL'),
        //     }),
        //     Address: Yup.string().required('Required'),
        // }),
        onSubmit: (values) => {
            console.log(values);
            console.log(formik.errors);

            onNext();
        },
    });
    // console.log(formik);
    return (
        <>
            <div className='mt-4 my-2 form-wrapper'>
                <form onSubmit={formik.handleSubmit}>
                    <div className=''>
                        <legend className='font-bold'>Parent Full Name <span className='text-red-700 font-thin'>*</span></legend>
                        <div className='flex md:flex-row sm:flex-col space-x-2 justify-between my-2 w-[100%]'>
                            <div className=' w-[50%]  py-2'>
                                <input type="text" placeholder='First Name' onChange={formik.handleChange} name='firstName' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                            </div>
                            <div className='w-[50%] py-2'>
                                <input type="text" placeholder='Last Name' name='lastName' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Email <span className='text-red-700 font-thin'>*</span></legend>
                        <div className=' pe-2'>
                            <input type="email" onChange={formik.handleChange}  placeholder='Email' name='email' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Gender <span className='text-red-700 font-thin'>*</span></legend>
                        <div className='flex md:flex-row justify-between my-2 '>
                            <div className='w-full'>
                                <input type="checkbox" onChange={formik.handleChange} value='Female' name='gender' className='border border-[#BFBFBF] rounded outline-[#066AAB] mx-2 text-[#066AAB]' />
                                <span>Female</span>
                            </div>
                            <div className='w-full'>
                                <input type="checkbox" onChange={formik.handleChange} value='Male' name='gender' className='border border-[#BFBFBF] p-4 rounded outline-[#066AAB] mx-2' />
                                <span>Male</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <legend className='font-bold my-2'>Role in Church <span className='text-red-700 font-thin'>*</span></legend>
                        <div>
                            <select onChange={formik.handleChange} className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' name='role'>
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
                        <legend className='font-bold my-2'>Primary Phone Number <span className='text-red-700 font-thin'>*</span></legend>
                        <div className=' pe-2'>
                            <input type="text" onChange={formik.handleChange} placeholder='Primary phone number' name='phoneNumber' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Secondary Phone Number</legend>
                        <div className=' pe-2'>
                            <input type="text" onChange={formik.handleChange} placeholder='Secondary phone number' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]'name='secondaryPhoneNumber' />
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Means of Identification</legend>
                        <div>
                            <select className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]'  value={MeansOfIdentification} onChange={formik.handleChange} name='meansOfIdentification'>
                                <option value=" "> </option>
                                <option value="NIN">NIN</option>
                                <option value="Voter's Card">Voter's Card</option>
                                <option value="Driver's License">Driver's License</option>
                            </select>
                        </div>
                    </div>
                    {formik.values.meansOfIdentification === "NIN" && (
                        <div className='my-2 py-2'>
                            <legend className='font-bold my-2'>Identification Number <span className='text-red-700 font-thin'>*</span></legend>
                            <div className=' pe-2'>
                                <input type="text" onChange={formik.handleChange} placeholder='Identification Number'  name='NINumber' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                    )}

                    {formik.values.meansOfIdentification === "Driver's License" && (
                        <div className='my-2 py-2'>
                            <legend className='font-bold my-2'>Driver's Number <span className='text-red-700 font-thin'>*</span></legend>
                            <div className=' pe-2'>
                                <input type="text" onChange={formik.handleChange} name='DriversIDNumber' placeholder="Drivers Number" className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                    )}

                    {formik.values.meansOfIdentification === "Voter's Card" && (
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Upload Voter's Card</legend>
                        <div
                            className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-6 text-center cursor-pointer outline-[#066AAB ] transition ">
                                <input type="file" onChange={formik.handleChange} accept="image/*" name='votersCard' className="hidden" id="file-upload" />
                            <label htmlFor="file-upload" className="cursor-pointer items-center justify-center flex flex-col">
                                {/* Preview */}
                                <InboxIcon className="h-20 w-8  text-[#aeadad] " />
                                <p className="mt-2 text-gray-600">Click or drag a file to this area to upload</p>
                            </label>
                        </div>
                        {/* Help text */}
                        <p className="text-sm text-gray-500 mt-2">A clear shoot only</p>
                    </div>)}

                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Upload Parent Picture (A clear headshot Picture of parent)</legend>
                        <div
                            className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-6 text-center cursor-pointer outline-[#066AAB ] transition ">
                            <input type="file" accept="image/*" onChange={formik.handleChange} className="hidden" id="file-upload"/>
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
                            <input type="text" placeholder='No & Street' name='address' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                        </div>
                        <div className='flex md:flex-row sm:flex-col  justify-between my-2 '>
                            <div className='pe-2 w-[50%]  py-2'>
                                <input type="text" onChange={formik.handleChange} placeholder='Area' name='area' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                            </div>
                            <div className='pe-2 w-[50%]  py-2'>
                                <input type="text" onChange={formik.handleChange} placeholder='State/Country' name='stateCountry' className='border border-[#BFBFBF] w-full  p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                    </div>
                    <div className='my-2 py-2 flex flex-row space-x-2 items-center'>
                        <button type='submit'   className='hover:bg-[#055589] bg-[#066AAB] text-white py-2 px-6 my-2 rounded'>Next</button>
                        <div>
                            <p className='underline hover:underline-0 text-black font-thin'><Link to="/save">Save and Complete Later</Link></p>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}

export default FirstForm