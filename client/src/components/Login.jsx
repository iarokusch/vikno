import React, { useContext } from 'react';
import { MyContext } from '../context/context.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function login() {
    const navigate = useNavigate();
    const { setUser, isLoggedIn, setIsLoggedIn } = useContext(MyContext);
    const loginUser = (e) => {
        e.preventDefault();
        //authentication
        axios
            .post(
                '/users/login',
                JSON.stringify({
                    email: e.target.email.value,
                    password: e.target.password.value,
                }),
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.headers.token);
                    setUser(res.data.data);
                    console.log(res.data);

                    localStorage.setItem('user', JSON.stringify(res.data));
                    setIsLoggedIn(true);
                    navigate('/profile');
                } else {
                    alert(res.data.message);
                }
            });
    };
    return (
        <>
            <div className='flex min-h-[90vh] mt-[50px] flex-1 flex-col justify-center  lg:px-8 '>
                <div className='m-auto border border-black w-[30%] py-10 '>
                    <div className='sm:mx-auto sm:w-full sm:max-w-sm '>
                        <h2 className='text-center text-2xl  leading-9 tracking-tight text-gray-900 '>
                            Welcome back. Sign into your account.
                        </h2>
                    </div>

                    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                        <form className='space-y-6' onSubmit={loginUser}>
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Email address
                                </label>
                                <div className='mt-2'>
                                    <input
                                        id='email'
                                        name='email'
                                        type='email'
                                        autoComplete='email'
                                        required
                                        className='block w-full rounded-md border-6 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label
                                        htmlFor='password'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className='mt-2'>
                                    <input
                                        id='password'
                                        name='password'
                                        type='password'
                                        autoComplete='current-password'
                                        required
                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    />
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <button
                                    type='submit'
                                    className='flex justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 bg-yellow-300   shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        {/* <div className='text-sm'>
                        <a
                            href='#'
                            className='font-semibold text-indigo-600 hover:text-indigo-500'
                        >
                            Forgot password?
                        </a>
                    </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
