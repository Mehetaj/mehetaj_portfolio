import React from 'react';

const Service = () => {
    return (
        <div id='service' className='mt-20'>
            <h1 className='text-4xl font-bold'>My Service <a href="https://www.fiverr.com/mehetajkhandake?public_mode=true">
                <small className='text-sm underline text-green-700'>order to fiver</small>
            </a> </h1>

            <div className='mt-12 grid grid-cols-1 md:grdi-cols-3 lg:flex gap-20'>
                <div className='ser p-4  w-[300px] border cb'>
                    <h1 className='text-3xl text-center font-bold'>Front-End Development</h1>
                    <p className='mt-6'>Will Develop your friendly user interface (UI) design with</p>
                    <ul className='p-6 list-decimal'>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className='ser p-4  w-[300px] border cb'>
                    <h1 className='text-3xl text-center font-bold'>Mern Stack Development</h1>
                    <p className='mt-6'>Will Develop your front-end user interface (UI) and back-end with</p>
                    <ul className=' p-6 list-decimal'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Tailwind css</li>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className='ser p-4  w-[300px] border cb'>
                    <h1 className='text-3xl text-center font-bold'>React js Development</h1>
                    <p className='mt-6'>Will Develop your front-end user interface (UI) with</p>
                    <ul className=' p-6 list-decimal'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Tailwind css</li>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>Context api</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Service;