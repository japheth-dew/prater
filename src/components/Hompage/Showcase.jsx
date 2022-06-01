import React from 'react'
import { motion } from 'framer-motion'
import "./Showcase.css"
import rhino from '../../images/rhino.png'

const Showcase = () => {
    return (
        <section id='showcase' className='p-[5rem] text-[#0f2a43]'>
            <div className='flex  md:flex-row flex-col items-center gap-[3rem] '>
                <div >
                    <p className='md:leading-[4rem] leading-[2.5rem]  text-[35px] md:text-[50px] font-[600]' >
                        Become a validator and help secure the future of Ethereum
                    </p>
                    <p className='text-[18px] mt-[2rem] font-[300] '>
                        Earn continuous rewards for providing a public good to the community.
                    </p>
                </div>

                <div className='flex flex-col items-center'>
                    <img className='md:w-[35rem] w-[50%]' src={rhino} alt="rhino" />
                </div>
            </div>

            <div className='flex md:flex-row flex-col gap-6 mt-[3rem]'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    style={{
                        backgroundImage: "linear-gradient(to right, rgb(253, 204, 211),rgb(252, 160, 154), rgb(255, 204, 158), rgb(152, 221, 173), rgb(129, 215, 236), rgb(145, 193, 237), rgb(160, 170, 237))"
                    }}
                    className='px-3 py-3 rounded-sm text-[18px] font-bold border-[1px] border-[#0f2a43]'
                >BECOME A VALIDATOR </motion.button>
                <motion.button

                    whileHover={{ scale: 1.1 }}
                    className='px-3 py-3 rounded-sm text-[18px] font-bold border-[1px] border-[#0f2a43]'
                >THINKING ABOUT STAKING </motion.button>
            </div>
        </section >
    )
}

export default Showcase