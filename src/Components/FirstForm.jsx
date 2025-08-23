import React, { useState } from 'react'
import { ExclamationTriangleIcon, InboxIcon } from '@heroicons/react/24/outline';
import { FiAlertTriangle } from 'react-icons/fi';
import { LuTriangleAlert } from 'react-icons/lu';
import '../assets/alert-triangle.svg'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';



const FirstForm = ({ onNext }) => {
    const [MeansOfIdentification, setMeansOfIdentification] = useState('')
    let formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            role: '',
            phoneNumber: '',
            secondaryPhoneNumber: '',
            meansOfIdentification: '',
            NINumber: '',
            votersCard: '',
            DriversIDNumber: '',
            headShot: '',
            Address: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('This is required!'),
            lastName: Yup.string().required('This is required!'),
            email: Yup.string().email('Invalid email').required('This is required!'),
            gender: Yup.string().required('This is required!'),
            role: Yup.string().required('This is required!'),
            phoneNumber: Yup.string().required('This is required!'),
            secondaryPhoneNumber: Yup.string(),
            meansOfIdentification: Yup.string(),
            NINumber: Yup.string().when('meansOfIdentification', {
                is: 'NIN',
                then: Yup.string()
            }),
                votersCard: Yup.string().when('meansOfIdentification', {
                    is: 'VotersCard',
                    then: Yup.string()
                }),
                DriversIDNumber: Yup.string().when('meansOfIdentification', {
                    is: 'DriversID',
                    then: Yup.string()
                }),
            //     headShot: Yup.object().shape({
            //         file: Yup.mixed(),
            //         url: Yup.string().url('Invalid URL'),
            //     }),
                Address: Yup.string().required('This is required!'),
        }
        ),
        onSubmit: (values) => {
            // console.log(values);
            if(!values.firstName || !values.lastName || !values.email || !values.gender || !values.role || !values.phoneNumber || !values.Address) {
                console.log(formik.errors);
            }
            else {
                console.log(values);
                onNext();

            }

            console.log(formik.errors.firstName);
        },
    });
    // console.log(formik);
    return (
        <>
            <div className='mt-4 my-2 form-wrapper'>
                <form onSubmit={formik.handleSubmit}>
                    <div className=''>
                        <legend className='font-bold'>Parent Full Name <span className='text-[#D63637] font-thin'>*</span></legend>
                        <div className='flex md:flex-row sm:flex-col space-x-2 justify-between my-2 w-[100%]'>
                            <div className=' w-[50%]  pt-2'>
                                <input type="text" placeholder='First Name' onChange={formik.handleChange} value={formik.values.firstName} name='firstName' onBlur={formik.handleBlur} className={`border  ${formik.errors.firstName ? 'border-[#D63637]' : 'border-[#BFBFBF]'} w-full  p-2 rounded outline-[#066AAB]`} />
                                {
                                    formik.errors.firstName ? (<div className='flex pt-2'>
                                        {/* <LuTriangleAlert className='w-5 h-5 text-white ' /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#D63637]">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>

                                        <span className=''>{formik.errors.firstName}</span></div>) : null
                                }
                            </div>
                            <div className='w-[50%] py-2'>
                                <input type="text" onChange={formik.handleChange} placeholder='Last Name' value={formik.values.lastName} onBlur={formik.handleBlur} name='lastName' className={`border  ${formik.errors.lastName ? 'border-[#D63637]' : 'border-[#BFBFBF]'}  w-full  p-2 rounded outline-[#066AAB]`} />
                                {
                                formik.errors.lastName ? (<div className='flex pt-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-[#D63637]">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    <span>{formik.errors.lastName}</span></div>) : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Email <span className='text-[#D63637] font-thin'>*</span></legend>
                        <div className=' '>
                            <input type="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} placeholder='Email' name='email' className={`border  ${formik.errors.email ? 'border-[#D63637]' : 'border-[#BFBFBF]'}  w-full p-2 rounded outline-[#066AAB]`}
                            />
                            {
                                formik.errors.email ? (<div className='flex pt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-[#D63637]">
                                        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                    </svg>
                                    <span>{formik.errors.email}</span></div>) : null
                            }
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Gender <span className='text-[#D63637] font-thin'>*</span></legend>
                        <div className='flex md:flex-row justify-between my-2 '>
                            <div className='w-full'>
                                <input type="checkbox" onChange={formik.handleChange} value='Female' onBlur={formik.handleBlur} name='gender' className='border border-[#BFBFBF]  rounded outline-[#066AAB] mx-2 text-[#066AAB]' />
                                <span>Female</span>
                            </div>
                            <div className='w-full'>
                                <input type="checkbox" onChange={formik.handleChange} value='Male' onBlur={formik.handleBlur} name='gender' className='border border-[#BFBFBF] p-4 rounded outline-[#066AAB] mx-2' />
                                <span>Male</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <legend className='font-bold my-2'>Role in Church <span className='text-[#D63637] font-thin'>*</span></legend>
                        <div className='pe-2'>
                            <select onChange={formik.handleChange} value={formik.values.role} onBlur={formik.handleBlur} className={`border  ${formik.errors.role ? 'border-red-700' : 'border-[#BFBFBF]'}  w-full p-2 rounded outline-[#066AAB]`} name='role'>
                                <option value=" "></option>
                                <option value="Visitor">Visitor</option>
                                <option value="Member">Member</option>
                                <option value="Worker">Worker</option>
                                <option value="Assistant HOD">Assistant HOD</option>
                                <option value="HOD">HOD</option>
                                <option value="Director">Director</option>
                                <option value="Pastor">Pastor</option>
                            </select>
                            {
                                formik.errors.role ? (<div className='flex pt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-[#D63637]">
                                        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                    </svg>
                                    <span>{formik.errors.role}</span></div>) : null
                            }
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Primary Phone Number <span className='text-[#D63637] font-thin'>*</span></legend>
                        <div className=' pe-2'>
                            <input type="text" onChange={formik.handleChange} value={formik.values.phoneNumber} placeholder='Primary phone number' name='phoneNumber' className={`border  ${formik.errors.phoneNumber ? 'border-[#D63637]' : 'border-[#BFBFBF]'}  w-full p-2 rounded outline-[#066AAB]`} />
                        </div>
                        {
                            formik.errors.phoneNumber ? (<div className='flex pt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-[#D63637]">
                                    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                </svg>
                                <span>{formik.errors.phoneNumber}</span></div>) : null
                        }
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Secondary Phone Number</legend>
                        <div className=' pe-2'>
                            <input type="text" onChange={formik.handleChange} value={formik.values.secondaryPhoneNumber} placeholder='Secondary phone number' className={`border  ${formik.errors.secondaryPhoneNumber ? 'border-[#D63637]' : 'border-[#BFBFBF]'}  w-full p-2 rounded outline-[#066AAB]`} name='secondaryPhoneNumber' />
                        </div>
                    </div>
                    <div className='my-2 py-2'>
                        <legend className='font-bold my-2'>Means of Identification</legend>
                        <div>
                            <select className={`border  ${formik.errors.meansOfIdentification ? 'border-[#D63637]' : 'border-[#BFBFBF]'}  w-full p-2 rounded outline-[#066AAB]`} onBlur={formik.handleBlur} value={formik.values.meansOfIdentification} onChange={formik.handleChange} name='meansOfIdentification'>
                                <option value=" "> </option>
                                <option value="NIN">NIN</option>
                                <option value="Voter's Card">Voter's Card</option>
                                <option value="Driver's License">Driver's License</option>
                            </select>
                        </div>
                    </div>
                    {formik.values.meansOfIdentification === "NIN" && (
                        <div className='my-2 py-2'>
                            <legend className='font-bold my-2'>Identification Number <span className='text-[#D63637] font-thin'>*</span></legend>
                            <div className=' pe-2'>
                                <input type="text" onChange={formik.handleChange} placeholder='Identification Number' name='NINumber' className='border border-[#BFBFBF] w-full p-2 rounded outline-[#066AAB]' />
                            </div>
                        </div>
                    )}

                    {formik.values.meansOfIdentification === "Driver's License" && (
                        <div className='my-2 py-2'>
                            <legend className='font-bold my-2'>Driver's Number <span className='text-[#D63637] font-thin'>*</span></legend>
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
                            <input type="file" accept="image/*" onChange={formik.handleChange} className="hidden" id="file-upload" />
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
                        <legend className='font-bold my-2'>Address<span className='text-[#D63637] font-thin'>*</span></legend>
                        <div className='pe-2'>
                            <input type="text" placeholder='No & Street' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.address} name='address' className={`border  ${formik.errors.address ? 'border-red-500' : 'border-[#BFBFBF]'}  w-full p-2 rounded outline-[#066AAB]`} />
                        </div>
                        <div className='flex md:flex-row sm:flex-col  justify-between my-2 '>
                            <div className='pe-2 w-[50%]  py-2'>
                                <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.area} placeholder='Area' name='area' className={`border  ${formik.errors.area ? 'border-red-500' : 'border-[#BFBFBF]'}  w-full p-2 rounded outline-[#066AAB]`} />
                            </div>
                            <div className='pe-2 w-[50%]  py-2'>
                                <input type="text" value={formik.values.stateCountry} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='State/Country' name='stateCountry' className={`border  ${formik.errors.stateCountry ? 'border-red-500' : 'border-[#BFBFBF]'}  w-full p-2 rounded outline-[#066AAB]`} />
                            </div>
                        </div>
                    </div>
                    <div className='my-2 py-2 flex flex-row space-x-2 items-center'>
                        <button type='submit' className='hover:bg-[#055589] bg-[#066AAB] text-white py-2 px-6 my-2 rounded'>Next</button>
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