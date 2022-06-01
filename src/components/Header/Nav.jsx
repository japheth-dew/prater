import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TbWorld } from "react-icons/tb"
import { HiOutlineMenu } from "react-icons/hi"
import logo from '../../images/logo.svg'

const Nav = () => {
    const [showNav, setShowNav] = useState(true)

    const handleClick = () => (
        setShowNav(!showNav)
    )
    const links = [
        "Stacking Lunchpad", "Deposit", "Clients", "Checklist", "FAQ", "Top Up"
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

                <div className='flex gap-6 items-center'>
                    <p className='  font-[300] text-[20px] hover:font-semibold cursor-pointer'>Languages</p>

                    <div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className='flex items-center border border-black boder-1 px-4 py-1 rounded-md  font-[400] text-[20px]' id='button'>Mainnet <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></motion.button>
                    </div>
                </div>
            </div>


            {/* ------mobile------------------ */}

            <div className='md:hidden flex items-center justify-between'>
                <div className=' gap-5 '>
                    <img src={logo} alt="logo" />

                </div>

                <div className=' flex gap-6 items-center'>
                    <motion.p
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className='text-[2rem]'><TbWorld /> </motion.p>
                    <motion.p
                        onClick={handleClick}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className='text-[2rem]'><HiOutlineMenu /> </motion.p>

                </div>
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