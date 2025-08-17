import React from 'react'

const Buttons = ({ index, onClick }) => {
    return (
        <>
            <div className='my-2 py-2 flex flex-row space-x-2 items-center'>
                <button type='button'  onClick={() => onClick(index + 1)} className='hover:bg-[#055589] bg-[#066AAB] text-white py-2 px-6 my-2 rounded'>Next</button>
                <div>
                    <p className='underline hover:underline-0 text-black font-thin'><a href="#">Save and Complete Later</a></p>
                </div>
            </div>
        </>
    )
}

export default Buttons