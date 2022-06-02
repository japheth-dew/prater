import React from 'react'

const Beacon = () => {
    return (
        <section className='p-[5rem] text-[#0f2a43] bg-red-100 md:m-0 m-[1rem] rounded-md'>
            <div>
                <p className='text-[32px] font-semibold mb-[3rem]'>The Beacon Chain</p>

                <div className='grid md:grid-cols-3 gap-4'>
                    <div className='rounded-sm p-8 border-[1px] border-[#0f2a43] flex flex-col gap-3'>
                        <p className='font-semibold text-[30px] '>Total ETH staked</p>
                        <p className='text-green-400 text-[20px] font-bold'>13,328,728 ETH</p>
                    </div>
                    <div className='rounded-sm p-8 border-[1px] border-[#0f2a43] flex flex-col gap-3'>
                        <p className='font-semibold text-[30px] '>Total ETH staked</p>
                        <p className='text-green-400 text-[20px] font-bold'>13,328,728 ETH</p>
                    </div>
                    <div className='rounded-sm p-8 border-[1px] border-[#0f2a43] flex flex-col gap-3'>
                        <p className='font-semibold text-[30px] '>Total ETH staked</p>
                        <p className='text-green-400 text-[20px] font-bold'>13,328,728 ETH</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Beacon