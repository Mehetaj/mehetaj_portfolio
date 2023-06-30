import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'



const Intro = () => {
    
    useEffect(() => {
        Aos.init()
    }, [])
    
    

    return (
        <div id='skills' data-aos="fade-down" className='mt-40 '>
            <h1>INTRODUCTION</h1>
            <h1 className='text-4xl my-6 font-bold' >Overview</h1>
            <p data-aos="fade-down" className='w-full md:w-[50%] text-justify'>I'm professional Mern Stack Developer. As a Mern ( MongoDB, Express js, React js, Node js)Stack Developer. I possess a wide range of skills and expertise that enable me to create robust and dynamic web applications. With Experience in each components of Mern Stack, I am proficient in both front-end and back-end development, allowing me to build full stack applications with efficiency and precision</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-10'>
                <div data-aos="fade-left" className='cad  cb'>
                    <div className='flex items-center justify-center m-6'>
                        <img className='w-[100px] h-[100px] rounded-full' src="https://abdullahnoman.netlify.app/assets/backend-565fc01f.png" alt="" />
                    </div>
                    <p className=''>MongoDB</p>
                </div>
                <div data-aos="fade-top" className='cad cb'>
                    <div className='flex items-center justify-center m-6'>
                        <img className='w-[100px] h-[100px] rounded-full' src="https://abdullahnoman.netlify.app/assets/web-0d05165f.png" alt="" />
                    </div>
                    <p className=''>Express js</p>
                </div>
                <div data-aos="fade-right" className='cad cb'>
                    <div className='flex items-center justify-center m-6'>
                        <img className='w-[100px] h-[100px] rounded-full' src="https://abdullahnoman.netlify.app/assets/mobile-896ef2f5.png" alt="" />
                    </div>
                    <p className=''>React js</p>
                </div>
                <div data-aos="fade-right" className='cad cb'>
                    <div className='flex items-center justify-center m-6'>
                        <img className='w-[100px] h-[100px] rounded-full' src="https://abdullahnoman.netlify.app/assets/creator-dbbffaec.png" alt="" />
                    </div>
                    <p className=''>Node js</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;