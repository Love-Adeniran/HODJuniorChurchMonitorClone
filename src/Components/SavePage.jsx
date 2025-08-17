import React from 'react'
import '../index.css'
import '../App.css'
import { Link } from 'react-router-dom'

const SavePage = () => {
    return (
        <div className='font-[MyFont]  text-[#492626] savetext mt-14 font-normal'>
            <p>Heads up! Saving your progress now will store a copy of your entry on this server and the Tech Team may have access to it. For security reasons, sensitive information such as addresses, along with file uploads will have to be re-entered when you resume.</p>
            <div className='flex space-x-6 items-center'>
                <div className='pt-4'>
                    <button className='hover:bg-[#055589] bg-[#066AAB] text-white py-2 px-3 my-2 rounded '>Continue</button>
                </div>
                <div className='underline hover:underline-0 pt-4'>
                    <Link to="/" >Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default SavePage