import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";



const Hero = () => {

    const config = {
        subtitle: 'Front-end Developer',
        social: {
            github: 'https://github.com/saagarprasad?tab=repositories',
            behance: 'https://www.behance.net/saagarprasad',
            linkedin: 'https://www.linkedin.com/in/saagar-prasad-v-10692824b/'
        }
    }


    return (
        <>
            <section className='flex flex-col md:flex-row px-5 py-32 bg-black justify-center'>
                <div className='md:w-1/2 flex flex-col'>
                    <h1 className=' text-white text-6xl'>Hi, <br /> Im <span className='text-white'>Saagar Prasad</span>
                        <p className=' text-[#b8b8b8] font-medium text-2xl mt-3'>{config.subtitle}</p>
                    </h1>
                    <div className='flex py-5'>
                        <a href={config.social.github} className='pr-5 text-white hover:text-[#5182e3]'><FaGithub size={40} /></a>
                        <a href={config.social.linkedin} className='pr-5 text-white hover:text-[#5182e3]'><AiOutlineLinkedin size={40} /></a>
                        <a href={config.social.behance} className='text-white hover:text-[#5182e3]'><FaBehance size={40} /></a>
                    </div>
                </div>
                <img className='md:w-1/3' src='./images/hero.png' />
            </section>
        </>
    )
}

export default Hero