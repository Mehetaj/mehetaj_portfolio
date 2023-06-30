import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import img from '../../../assets/fiver.webp'


const Banner = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    const handleDownloadResume = () => {
        const url = '/public/mehetaj_resume.pdf';
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = 'mehetaj_resume.pdf';
        anchor.click()
    }



    return (
        <div className='lg:flex mt-10 justify-between items-center'>
            <div className=''>
                <h1 className='text-5xl my-4 font-bold'>Hi, I am <span data-aos="fade-left" className='cc'>Mehetaj</span></h1>
                <p className='text-lg md:text-sm md:w-[70%] mb-6'>
                    I will develop your full stack web application using mern stack and frinedly user interface
                </p>

                <button onClick={handleDownloadResume}>Download Resume</button>

                <div className='mt-6 fixed grid grid-cols-1 gap-y-4 '>
                    <a target='_blank' href="https://www.facebook.com/profile.php?id=100083754050543"><span className='bg-black social py-2 px-5 rounded-e-full w-[200px]'><span className='w-20 mr-6'>Facebook</span><FaFacebook          className='w-8  inline text-[#0C86EE]  h-8 rounded-full' /></span></a>
                    <a target='_blank' href="https://www.instagram.com/bensonxsx/"><span className='bg-black social py-2 px-5 rounded-e-full w-[200px]'><span className='w-20 mr-5'>Instagram</span><FaInstagramSquare  className='w-8  inline text-red-700   h-8 rounded-full' /></span></a>
                    <a target='_blank' href="https://www.linkedin.com/in/mehetaj-khandaker/"><span className='bg-black social py-2 px-5 rounded-e-full w-[200px]'><span className='w-20 mr-[29px]'>Linkedin</span><FaLinkedin     className='w-8  inline text-[#0274B3] h-8 rounded-full' /></span></a>
                    <span className='bg-black social py-2 px-5 rounded-e-full w-[200px]'><a target='_blank' href="https://www.fiverr.com/mehetajkhandake?public_mode=true"><span className='w-20 mr-[48px]'>Fiverr</span></a><img className='w-8  inline text-[#0274B3] h-8 rounded-full ' src={img} alt="" /></span>
                </div>

            </div>
            <div className='mt-10 md:mt-0' data-aos="fade-down">
                <img id='video' src="banner.png"></img>
            </div>

        </div>
    );
};

export default Banner;