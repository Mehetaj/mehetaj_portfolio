import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import img1 from '../../../assets/ass-1.png'
import img2 from '../../../assets/assi-2.png'
import img3 from '../../../assets/ass-3.png'

const Projects = () => {
    useEffect(() => {
        Aos.init()
    }, [])


    return (
        <div data-aos="fade-left" id='projects' className='mt-20'>
            <h1 className='text-4xl font-bold my-2'>Projects</h1>
            <p className='md:w-1/2 my-6'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>

            <div className='md:flex  bg-[black] md:p-10 rounded-ee-full rounded-ss-full mt-20 gap-20'>
                <div className='w-full md:w-[350px]'>
                    <div className='border border-red-500 h-full md:h-[500px] overflow-y-scroll w-full md:w-[350px]'>
                        <div className=''>
                            <div className='md:h-[100px]'>
                                <img className='' src={img1} alt="" />
                            </div>

                        </div>
                    </div>

                </div>
                <div className='mt-4'>
                    <h1 className='text-2xl font-bold mb-4'>1. Music Hub <p className='text-sm inline underline'>
                        <a target='_blank' href="https://summer-camp-school-d65d7.web.app/">Live </a>
                        |
                        <a target='_blank' href="https://github.com/Mehetaj/summer-camp-client"> Client </a>
                        |
                        <a target='_blank' href="https://github.com/Mehetaj/summer-camp-server"> Server</a>

                    </p> </h1>
                    <p>That's a educational platform. Here student purchase and learn their favorite topic . Gain There Knowledge .</p>

                    <div className='md:flex gap-20'>
                        <div className='mt-6'>
                            <h1 className='my-6 font-bold text-2xl'>Technology Used: </h1>
                            <div>
                                <p>1. Tailwind CSS and DaisyUI used for ui design</p>
                                <p>2. React slider / swiper in Banner</p>
                                <p>3. Framer Motion for smooth animation</p>
                                <p>4. Firebase used to User authentication or authorization</p>
                                <p>5. Imgbb used to upload photo</p>
                                <p>6. React router dom used for routing system</p>
                                <p>7. Axios for secure data</p>
                                <p>8. Tanstack query used for specific user data</p>
                                <p>9. React stripe js used for payment system</p>
                                <p>10. MongoDb used as Database and Backend code done by Express js</p>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <h1 className='my-6 font-bold text-2xl'>Features : </h1>

                            <div>
                                <p>1. There are three Dashboard for student, instructor and admin</p>
                                <p>2. Students can add class in dashboard selected classes</p>
                                <p>3. Pay for Class by stripe</p>
                                <p>4. Without login student can add or pay any class</p>
                                <p>5. Payment history in payment history page on dashboard</p>
                                <p>6. Instructor Can add a class and see thier total classes</p>
                                <p>7. If admin approve instructor's class then that's class will be show in classes page</p>
                                <p>8. Admin can make an user admin or instructor</p>
                                <p>9. admin or instructor cann't select any class to cart</p>
                                <p>10. payment system isn't gained for admin or instructor</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='md:flex  bg-[black] md:p-10 rounded-ee-full rounded-ss-full mt-20 gap-20'>
                <div className='w-[350px]'>
                    <div className='border border-red-500 h-[500px] overflow-y-scroll w-[350px]'>
                        <div className=''>
                            <div className='h-[100px]'>
                                <img className='' src={img2} alt="" />
                            </div>

                        </div>
                    </div>

                </div>
                <div className='mt-4'>
                    <h1 className='text-2xl font-bold mb-4'>2. Toggi Toys 
                        <p className='text-sm inline underline'>
                            <a target='_blank' href="https://toy-market-23c9c.web.app/"> Live </a>
                            |
                            <a target='_blank' href="https://github.com/Mehetaj/toys-market-client"> Client </a>
                            |
                            <a target='_blank' href="https://github.com/Mehetaj/toy-market-server"> Server</a>

                        </p>
                    </h1>
                    <p>That's an e-commerce platform. Here user cen purchase and Enjoy .</p>

                    <div className='md:flex gap-20'>
                        <div className='mt-6'>
                            <h1 className='my-6 font-bold text-2xl'>Technology Used: </h1>
                            <div>
                                <p>1. Tailwind CSS and DaisyUI used for ui design</p>
                                <p>2. Aos Pack for smooth animation</p>
                                <p>3. Firebase used to User authentication or authorization</p>
                                <p>4. React router dom used for routing system</p>
                                <p>5. React stripe js used for payment system</p>
                                <p>6. Backend done by Express js </p>
                                <p>7. MongoDb used as Database </p>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <h1 className='my-6 font-bold text-2xl'>Features : </h1>

                            <div>
                                <p>1. There are three Dashboard for student, instructor and admin</p>
                                <p>2. customer can add toy in dashboard selected toys</p>
                                <p>3. Pay for Class by stripe</p>
                                <p>4. Without login customer can add or pay any toys</p>
                                <p>5. Payment history in payment history page on dashboard</p>
                                <p>6. Admin can make an user admin</p>
                                <p>7. admin can not select any toys to cart</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='md:flex  bg-[black] md:p-10 rounded-ee-full rounded-ss-full mt-20 gap-20'>
                <div className='w-[350px]'>
                    <div className='border border-red-500 h-[500px] overflow-y-scroll w-[350px]'>
                        <div className=''>
                            <div className='h-[100px]'>
                                <img className='' src={img3} alt="" />
                            </div>

                        </div>
                    </div>

                </div>
                <div className='mt-4'>
                    <h1 className='text-2xl font-bold mb-4'>2. Recipe Hunter 
                        <p className='text-sm inline underline'>
                            <a target='_blank' href="https://6454c37858c93a7bbdc29537--ubiquitous-daifuku-6971ba.netlify.app/"> Live </a>
                            |
                            <a target='_blank' href="https://github.com/Mehetaj/recipies-client"> Client </a>
                            |
                            <a target='_blank' href="https://github.com/Mehetaj/recipies-server"> Server</a>

                        </p>
                    </h1>
                    <p>That's an e-commerce platform. Here user cen purchase and Enjoy .</p>

                    <div className='md:flex gap-20'>
                        <div className='mt-6'>
                            <h1 className='my-6 font-bold text-2xl'>Technology Used:

                            </h1>
                            <div>
                                <p>1. Tailwind CSS and DaisyUI used for ui design</p>
                                <p>2. Aos Pack for smooth animation</p>
                                <p>3. Firebase used to User authentication or authorization</p>
                                <p>4. React router dom used for routing system</p>
                                <p>5. Backend done by Express js </p>
                                <p>6. MongoDb used as Database </p>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <h1 className='my-6 font-bold text-2xl'>Features : </h1>

                            <div>
                                <p>1. customer can add favorite items</p>
                                <p>2. Without login customer can not  add favorite any item</p>
                                <p>3. Read cooking method</p>
                                <p>4. Made all Recipes by experienced Chefs</p>
                                <p>5. By clicking favorite button then the button is disabled </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Projects;