import React from 'react';

import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        to: '',
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const destinationEmail = 'iarokusch@gmail.com';
        // Send form data to server or email service provider
        // Example: Using Axios to make an HTTP POST request
        axios
            .post('/send-email', { ...formData, to: destinationEmail })
            .then((response) => {
                // Handle successful email submission
                console.log('Email sent:', response);
            })
            .catch((error) => {
                // Handle error
                console.error('Error sending email:', error);
            });
    };
    return (
        <div className='pt-[12rem]'>
            <h1>Contact form</h1>
            <div className='flex min-h-[90vh] pt-[6rem]  justify-center'>
                <div className='mx-auto w-full max-w-[550px]'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-5'>
                            <label
                                htmlFor='name'
                                className='mb-3 block text-base font-medium text-[#07074D]'
                            >
                                Full Name
                            </label>
                            <input
                                onChange={handleChange}
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Full Name'
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                            />
                        </div>
                        <div className='mb-5'>
                            <label
                                htmlFor='email'
                                className='mb-3 block text-base font-medium text-[#07074D]'
                            >
                                Email Address
                            </label>
                            <input
                                onChange={handleChange}
                                type='email'
                                name='email'
                                id='email'
                                placeholder='example@domain.com'
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                            />
                        </div>
                        <div className='mb-5'>
                            <label
                                htmlFor='subject'
                                className='mb-3 block text-base font-medium text-[#07074D]'
                            >
                                Subject
                            </label>
                            <input
                                onChange={handleChange}
                                type='text'
                                name='subject'
                                id='subject'
                                placeholder='Enter your subject'
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                            />
                        </div>
                        <div className='mb-5'>
                            <label
                                htmlFor='message'
                                className='mb-3 block text-base font-medium text-[#07074D]'
                            >
                                Message
                            </label>
                            <textarea
                                onChange={handleChange}
                                rows='4'
                                name='message'
                                id='message'
                                placeholder='Type your message'
                                className='w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='hover:shadow-form rounded-md bg-yellow-300 hover:bg-yellow-300 py-3 px-8 text-base font-semibold  outline-none'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
