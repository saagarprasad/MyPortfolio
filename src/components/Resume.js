import React from 'react'

const Resume = () => {

    const config = {
        link: '/Resume_Saagar_2024.pdf'
    }


    return (
        <section id='resume' className='flex flex-col md:flex-row bg-black px-5 py-11'>
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img className='w-[300px] h-[380px]' src='./images/resume.jpg' />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                    <p className='pb-5'>You can view my resume <a className='btn' href={config.link} download> Download</a></p>
                </div>
            </div>
        </section>
    )
}

export default Resume