import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TbWorld } from "react-icons/tb"
import { FaUserAlt } from 'react-icons/fa'
import WalletAddress from "../Hompage/WalletAddress"
// import { HiOutlineMenu } from "react-icons/hi"
import logo from '../../images/logo.svg'

const Nav = () => {
    const [showNav, setShowNav] = useState(true)
    const [showWallet, setShowWallet] = useState(false)

    const handleClick = () => (
        setShowNav(!showNav)
    )

    const handleWallet = () => (
        setShowWallet(!showWallet)
    )
    const links = [
        "Stacking Lunchpad", "FAQ", "What's Staking", "Terms of Service"
    ]
    return (

        <div className='w-full'>

            {/* desktop-------------------- */}

            <div className='md:flex hidden items-center justify-between '>
                <div className='flex gap-5 items-center'>
                    <img src={logo} alt="logo" />
                    <div className='flex gap-10 font-[300] text-[20px] '>

                        {links.map((link) => (
                            <p className='hover:font-semibold cursor-pointer'>{link}</p>
                        ))}
                    </div>
                </div>

                <div className=' flex gap-5 items-center'>
                    <div className=''>
                        <motion.button
                            whileHover={{ scale: 1.1 }}

                            style={{
                                backgroundImage: "linear-gradient(to right, rgb(253, 204, 211),rgb(252, 160, 154), rgb(255, 204, 158), rgb(152, 221, 173), rgb(129, 215, 236), rgb(145, 193, 237), rgb(160, 170, 237))"
                            }}
                            className='px-3 py-3 rounded-sm text-[18px] font-bold border-[1px] border-[#0f2a43]'
                        >CONNECT WALLET </motion.button>
                    </div>

                    <div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={handleWallet}
                            className='text-[1.5rem]'><FaUserAlt /></motion.button>
                    </div>
                </div>
            </div>
            {showWallet && (<WalletAddress />)}


            {/* ------mobile------------------ */}

            <div className='md:hidden flex items-center justify-between'>
                <div className=' gap-5 '>
                    <img src={logo} alt="logo" />

                </div>


                <div className=' flex gap-5 items-center'>
                    <div className=''>
                        <motion.button
                            whileHover={{ scale: 1.1 }}

                            style={{
                                backgroundImage: "linear-gradient(to right, rgb(253, 204, 211),rgb(252, 160, 154), rgb(255, 204, 158), rgb(152, 221, 173), rgb(129, 215, 236), rgb(145, 193, 237), rgb(160, 170, 237))"
                            }}
                            className='px-3 py-3 rounded-sm text-[18px] font-bold border-[1px] border-[#0f2a43]'
                        >CONNECT WALLET </motion.button>
                    </div>

                    <div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={handleWallet}
                            className='text-[1.5rem]'><FaUserAlt /></motion.button>
                    </div>
                    </div>


                <motion.p
                    onClick={handleClick}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    className='text-[2rem]'><TbWorld /> </motion.p>


                {!showNav && (<motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}

                    className='flex absolute bg-blue-200 w-[100%] sm:w-[70%] right-[0.6rem] top-[4rem]  items-center flex-col gap-5 font-[300] text-[20px]  py-[2rem]'>

                    {links.map((link) => (
                        <p className='hover:font-semibold cursor-pointer'>{link}</p>
                    ))}
                </motion.div>)
                }
            </div>
        </div>
    )
}

export default Nav