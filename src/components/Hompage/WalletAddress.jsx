import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { FaEthereum } from 'react-icons/fa'
import { motion } from 'framer-motion'
import eth from '../../images/ethereum.png'
import usdc from '../../images/usdc.png'

const WalletAddress = () => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, duration: 1000 }}
            exit={{ scale: 0, opacity: 0 }}

            className=' absolute right-0
        bg-red-100 md:w-[30rem] w-[95%] p-5 rounded-md md:m-[2rem] overflow-auto h-screen top-[5rem] shadow-md'>
            <div className='flex gap-10 items-center '>
                <div className='flex flex-col items-center'>
                    <div className='bg-white w-[4rem] h-[4rem] rounded-full relative'></div>
                    <p className='relative -top-[1rem] bg-red-200 text-white text-[.8rem] font-bold px-5 text-center rounded-full'>512</p>
                </div>

                <div>
                    <p className='text-[16px] font-semibold '>Wallet Address</p>
                    <p className='text-[16px]'>0x2165...............6545</p>
                </div>
            </div>

            <div>
                <div className='mt-[1rem] '>
                    <div className='p-4 px-10 rounded-t-[2rem] w-full bg-white shadow-xl'>
                        <p className='font-bold '>Staking Quantity</p>
                        <div className='flex gap-2 items-center my-4'>
                            <img className='w-[2.2rem]' src={eth} alt="eth" />
                            <p className='font-bold '>163.154131</p>
                        </div>
                    </div>
                    <div className='p-4 px-10 rounded-b-[2rem] w-full bg-white shadow-xl mt-[.2rem] flex justify-between'>

                        <div>
                            <p className='font-bold '>Staking Revenue</p>
                            <div className='flex gap-2 items-center my-4'>
                                <img className='w-[2.2rem]' src={eth} alt="eth" />
                                <p className='font-bold '>163.154131</p>
                            </div>

                        </div>

                        <div>

                            <p className='font-bold '>Balance</p>
                            <div className='flex gap-2 items-center my-1'>
                                <img className='w-[2.2rem]' src={eth} alt="eth" />
                                <p className='font-bold '>163.154131</p>
                            </div>
                            <div className='flex gap-2 items-center my-1'>
                                <img className='w-[2.5rem]' src={usdc} alt="eth" />
                                <p className='font-bold '>163.154131</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col  items-center mt-[1rem]'>
                        <button className='font-bold text-white py-1 px-4 bg-red-200 rounded-full'>
                            WITHDRAW
                        </button>
                    </div>
                </div>

                <div className='mt-[2rem] '>
                    <div className='p-4 px-10 rounded-t-[2rem] w-full bg-white shadow-xl'>
                        <p className='font-bold text-center my-[.5rem]'>Ethernet Exchange</p>

                    </div>
                    <div className='p-4 px-10 rounded-b-[2rem] w-full bg-white shadow-xl mt-[.2rem] '>
                        <div>
                            <div>
                                <div className='flex gap-2 items-center my-4'>
                                    <img className='w-[2.2rem]' src={eth} alt="eth" />
                                    <p className='font-bold'>ETH</p>
                                    <p className='font-bold px-2 border-[1px] border-red-300 rounded-full text-[12px] text-red-300'>max</p>
                                </div>
                                <div className='bg-red-300 px-3 py-2 rounded-md'>
                                    <p className='font-bold '>163.154131</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-center my-2'>
                                <p className='text-[1.7rem] text-red-300 '><BsFillArrowDownCircleFill /></p>
                            </div>
                            <div>
                                <div className='flex gap-2 items-center my-4'>
                                    <img className='w-[2.2rem]' src={usdc} alt="eth" />
                                    <p className='font-bold'>USDC</p>
                                    <p className='font-bold px-2 border-[1px] border-red-300 rounded-full text-[12px] text-red-300'>max</p>
                                </div>
                                <div className='bg-red-300 px-3 py-2 rounded-md'>
                                    <p className='font-bold '>163.154131</p>
                                </div>
                                <div className='flex flex-col  items-center mt-[1rem]'>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        className='font-bold text-white py-1 px-4 bg-red-300 rounded-full'>
                                        CONNECT
                                    </motion.button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='mt-[2rem] '>
                    <div className='p-4 px-10 rounded-[2rem] w-full bg-white shadow-xl'>


                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='font-bold'>My Invitation</p>
                                <div className='flex gap-2 items-center'>
                                    <p><FaUserAlt /></p>
                                    <p className='font-bold'>163</p>
                                </div>
                            </div>
                            <div>
                                <p className='font-bold'>Team Income</p>
                                <div className='flex gap-2 items-center'>
                                    <p><FaEthereum /></p>
                                    <p className='font-bold'>163.754131</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='flex flex-col  items-center mt-[1rem]'>
                        <button className='font-bold text-white py-1 px-4 bg-red-300 rounded-full'>
                            INVITE USERS 
                        </button>
                    </div>

                </div>

            </div>
        </motion.div>
    )
}

export default WalletAddress