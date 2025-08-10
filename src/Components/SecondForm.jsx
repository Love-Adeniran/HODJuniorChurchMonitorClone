import React from 'react';
import { Link } from 'react-router-dom';

export default SecondForm = () =>{

    return(
        <>
            <div>
                <div>
                    <div></div>
                    <div className='my-2 py-2 flex flex-row space-x-2 items-center'>
                        <div>
                            <Link to="/" className='bg-[#055589] text-white py-2 px-6 my-2 rounded'>Previous</Link>
                        </div>
                        <div>
                            <Link to="/page3" className='bg-[#055589] text-white py-2 px-6 my-2 rounded'>Next</Link>
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