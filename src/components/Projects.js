import React from 'react'

const Projects = () => {

    const config = {
        projects: [
            {
                image: './images/dstarvewebsite.jpg',
                description: 'A Food Ordering Website. Built with React.js and Firebase.',
                link: 'https://github.com/jvlcode/jvlcart',
                websitelink: 'https://dstarve-cb4ec.web.app/'
            },
            {
                image: './images/myportfolio.jpg',
                description: 'My Portfolio website. Built with React.js and Tailwind css.',
                link: 'https://github.com/saagarprasad/MyPortfolio',
                websitelink: ''
            }
        ]
    }

    return (
        <section id='projects' className="flex  flex-col pt-10 pb-20 px-5 justify-center bg-[#141414] text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col gap-10 md:flex-row px-10 justify-between'>
                    {config.projects.map((project) => (
                        <div className='relative'>
                            <img className='h-[300px] w-[500px] rounded-md' src={project.image} />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex gap-5 justify-center'>
                                    <a className='btn' target='_blank' href={project.websitelink}>View website</a>
                                    <a className='btn' target='_blank' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Projects