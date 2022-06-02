import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowLeftRight } from "react-icons/bs"
import { BsCheckSquareFill } from "react-icons/bs"
import ethhsm from '../../images/ethhsm.png'
import usdt from '../../images/usdt.png'

const Beacon = () => {
    return (
        <section id='showcase' className='md:p-[5rem] p-[1rem] text-[#0f2a43] bg-red-100 md:m-0 m-[1rem] rounded-md'>
            <div>
                <p className='text-[32px] font-semibold mb-[1.5rem]'>Staking Option</p>

                <div className='grid md:grid-cols-3 gap-4'>
                    <div className='rounded-sm p-2 border-[1px] border-[#0f2a43] flex flex-col gap-3'>

                        <div>
                            <div className='mb-[.5rem]'>
                                <div className='flex items-center gap-2'>
                                    <div className='flex gap-1 items-center'>
                                        <img className='w-[1.3rem]' src={ethhsm} alt="ethsm" />
                                        <p className='text-[.8rem]'><BsArrowLeftRight /></p>
                                        <img className='w-[1.3rem]' src={usdt} alt="usdt" />
                                    </div>

                                    <p className='font-bold text'>Ethereum <span className='font-[300] text-[11px]'>/USDT</span></p>
                                </div>
                                <p className='font-[500] text-[14px] '>500 - 4,999 USDT</p>
                            </div>
                            <hr className='border-[1px]' />
                            <div className='my-[.5rem] text-[.9rem]'>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Staking for <b>3 days</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Daily Return <b>1.1% - 1.3%</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Custody Fee <b>0.5%</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Verifying 1 Node</p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>131,554 Validators</p>
                                </div>
                            </div>
                            <hr className='border-[1px]' />
                            <div className='flex flex-col gap-2 my-[.5rem]'>
                                <input className='px-2 py-1 rounded-md' type="text" placeholder='USDT Amount' />
                                <motion.button
                                    whileHover={{ scale: .95 }}
                                    className='bg-red-500 py-2 text-white text-bold text-[13px] rounded-md '>Stake Now</motion.button>
                            </div>

                        </div>
                    </div>

                    {/* ------------     2---------- */}
                    <div className='rounded-sm p-2 border-[1px] border-[#0f2a43] flex flex-col gap-3'>

                        <div>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <div className='flex gap-1 items-center'>
                                        <img className='w-[1.3rem]' src={ethhsm} alt="ethsm" />
                                        <p className='text-[.8rem]'><BsArrowLeftRight /></p>
                                        <img className='w-[1.3rem]' src={usdt} alt="usdt" />
                                    </div>

                                    <p className='font-bold text'>Ethereum <span className='font-[300] text-[11px]'>/USDT</span></p>
                                </div>
                                <p className='font-[500] text-[14px] '>500 - 4,999 USDT</p>
                            </div>

                            <div className='mt-[1.8rem] text-[.9rem]'>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Staking for <b>3 days</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Daily Return <b>1.1% - 1.3%</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Custody Fee <b>0.5%</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Verifying 1 Node</p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>131,554 Validators</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----------------------3--------------- */}

                    <div className='rounded-sm p-2 border-[1px] border-[#0f2a43] flex flex-col gap-3'>

                        <div>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <div className='flex gap-1 items-center'>
                                        <img className='w-[1.3rem]' src={ethhsm} alt="ethsm" />
                                        <p className='text-[.8rem]'><BsArrowLeftRight /></p>
                                        <img className='w-[1.3rem]' src={usdt} alt="usdt" />
                                    </div>

                                    <p className='font-bold text'>Ethereum <span className='font-[300] text-[11px]'>/USDT</span></p>
                                </div>
                                <p className='font-[500] text-[14px] '>500 - 4,999 USDT</p>
                            </div>

                            <div className='mt-[1.8rem] text-[.9rem]'>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Staking for <b>3 days</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Daily Return <b>1.1% - 1.3%</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Custody Fee <b>0.5%</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Verifying 1 Node</p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>131,554 Validators</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------------------4--------------------- */}

                    <div className='rounded-sm p-2 border-[1px] border-[#0f2a43] flex flex-col gap-3'>

                        <div>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <div className='flex gap-1 items-center'>
                                        <img className='w-[1.3rem]' src={ethhsm} alt="ethsm" />
                                        <p className='text-[.8rem]'><BsArrowLeftRight /></p>
                                        <img className='w-[1.3rem]' src={usdt} alt="usdt" />
                                    </div>

                                    <p className='font-bold text'>Ethereum <span className='font-[300] text-[11px]'>/USDT</span></p>
                                </div>
                                <p className='font-[500] text-[14px] '>500 - 4,999 USDT</p>
                            </div>

                            <div className='mt-[1.8rem] text-[.9rem]'>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Staking for <b>3 days</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Daily Return <b>1.1% - 1.3%</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Custody Fee <b>0.5%</b></p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>Verifying 1 Node</p>
                                </div>
                                <div className='flex gap-1 items-center '>
                                    <p className=' text-lime-600'><BsCheckSquareFill /></p>
                                    <p>131,554 Validators</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Beacon