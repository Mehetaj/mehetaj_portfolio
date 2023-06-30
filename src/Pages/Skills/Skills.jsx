import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Skills = () => {
    useEffect(() => {
        Aos.init()
    })
    return (
        <div data-aos="fade-up" className='mt-10'>
            <h1 className='text-4xl font-bold my-10'>Skills</h1>
            <div data-aos="fade-right" className='lg:flex gap-10 lg:gap-20'>
                <div className=''>
                    <p>HTML</p>
                    <progress className="progress bg-white progress-secondary w-full md:w-[600px]" value="90" max="100"></progress>
                </div>
                <div>
                    <p>CSS</p>
                    <progress className="progress  bg-white progress-secondary w-full md:w-[600px]" value="90" max="100"></progress>
                </div>
            </div>
            <div data-aos="fade-right" className='lg:flex gap-10 lg:mt-4 lg:gap-20'>
                <div className=''>
                    <p>BOOTSTRAP</p>
                    <progress className="progress bg-white progress-secondary w-full md:w-[600px]" value="80" max="100"></progress>
                </div>
                <div>
                    <p>TAILWIND CSS</p>
                    <progress className="progress  bg-white progress-secondary w-full md:w-[600px]" value="80" max="100"></progress>
                </div>
            </div>
            <div data-aos="fade-right" className='lg:flex gap-10 lg:mt-4 lg:gap-20'>
                <div className=''>
                    <p>JAVASCRIPT</p>
                    <progress className="progress bg-white progress-secondary w-full md:w-[600px]" value="75" max="100"></progress>
                </div>
                <div>
                    <p>REACT JS</p>
                    <progress className="progress  bg-white progress-secondary w-full md:w-[600px]" value="75" max="100"></progress>
                </div>
            </div>
            <div data-aos="fade-right" className='lg:flex gap-10 lg:mt-4 lg:gap-20'>
                <div className=''>
                    <p>NODE JS</p>
                    <progress className="progress bg-white progress-secondary w-full md:w-[600px]" value="40" max="100"></progress>
                </div>
                <div>
                    <p>EXPRESS JS</p>
                    <progress className="progress  bg-white progress-secondary w-full md:w-[600px]" value="60" max="100"></progress>
                </div>
            </div>
            <div data-aos="fade-right" className='lg:flex gap-10 lg:mt-4 lg:gap-20'>
                <div className=''>
                    <p>MONGODB</p>
                    <progress className="progress bg-white progress-secondary w-full md:w-[600px]" value="70" max="100"></progress>
                </div>
                <div>
                    <p>FIREBASE</p>
                    <progress className="progress  bg-white progress-secondary w-full md:w-[600px]" value="75" max="100"></progress>
                </div>
            </div>
            <h1 className='mt-10 mb-6 text-4xl font-bold'>Languages</h1>
            <div className='lg:flex gap-10 lg:mt-4 lg:gap-20'>
                <div className=''>
                    <p>BANGLA</p>
                    <progress className="progress bg-white progress-secondary w-full md:w-[600px]" value="100" max="100"></progress>
                </div>
                <div>
                    <p>ENGLISH</p>
                    <progress className="progress  bg-white progress-secondary w-full md:w-[600px]" value="75" max="100"></progress>
                </div>
            </div>
            <div className='lg:flex gap-10 lg:mt-4 lg:gap-20'>
                <div className=''>
                    <p>HINDI</p>
                    <progress className="progress bg-white progress-secondary w-full md:w-[600px]" value="75" max="100"></progress>
                </div>
                <div>
                    <p>URDU</p>
                    <progress className="progress  bg-white progress-secondary w-full md:w-[600px]" value="75" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;