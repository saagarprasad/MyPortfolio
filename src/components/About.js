import React from 'react'

const About = () => {

    const config  = {
        line1: 'Hi, I’m Saagar Prasad, a Front-end Web Developer specializing in building responsive, high-performance websites using React.js, Tailwind CSS, and modern web technologies. I excel at creating clean, reusable code and delivering scalable applications with a strong focus on functionality and user experience.',
        line2: 'With additional experience in UI prototyping using tools like Figma, I ensure designs are effectively translated into seamless web interfaces. I’m passionate about staying updated with the latest front-end trends to deliver innovative solutions.',
        line3: 'I’m passionate about leveraging the latest front-end tools and frameworks to solve real-world problems. My ability to adapt quickly and collaborate effectively makes me a valuable asset to any development team.'
    }


    return (
        <section className='flex flex-col md:flex-row bg-[#141414] px-5' id='about'>
            <div className='py-5 md:w-1/2'>
                <img src = './images/about.png' />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='pb-5'>{config.line3}</p>
                </div>
            </div>
        </section>
    )
}

export default About