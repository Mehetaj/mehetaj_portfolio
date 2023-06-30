import React from 'react';
import Swal from 'sweetalert2';

const Message = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const messages = form.message.value;
        const message = { name, email, messages }
        console.log(message);

        if (message) {
            form.reset()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Thanks for your Message',
                showConfirmButton: false,
                timer: 1500
            })
        }

    }
    return (
        <div className='mt-20' id='message'>
            <h1 className='text-4xl font-bold'>Contact Me</h1>
                <div className='lg:flex gap-40 divide-x-8'>
                    <form onSubmit={handleSubmit}>
                        <input className="block bg-[#00000054] mt-6 w-full md:w-[500px] px-6 py-2 rounded-lg" type="text" name='name' placeholder='Enter Your Name ' />
                        <input className="block bg-[#0000006f] mt-6 w-full md:w-[500px] px-6 py-2 rounded-lg" type="email" name='email' placeholder='Enter Email Address' />
                        <textarea className="block bg-[black]  mt-6 w-full md:w-[500px]  px-6 py-2  rounded-lg" name="message" placeholder='Description' cols="30" rows="10"></textarea>

                        <button className='mt-6'>
                            <input type="submit" value="Submit" />
                        </button>

                    </form>

                    <img className='lg:w-[460px] w-[300px] mt-10 md:mt-0 h-[300px] pl-12 rounded-full animate-pulse lg:h-[420px] ' src='https://iphone.giveawayoftheday.com/wp-content/plugins/gotd_appstore_plugin/images/2015/11/448049263_app_icon_big_1448004401.jpg' alt="" />
                </div>
                
            
        </div>
    );
};

export default Message;