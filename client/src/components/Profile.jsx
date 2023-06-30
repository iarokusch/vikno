import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/context.js';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Profile() {
    const { setUser, user, artists, setArtists, setIsLoggedIn } =
        useContext(MyContext);
    const [isDel, setIsDel] = useState(false);
    // const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`/artists`)
            .then((res) => {
                if (res.data.success) {
                    setArtists(res.data.data);
                }
            })
            .catch((err) => {
                console.log('Error ', err);
            });
    }, [isDel]);

    const uploadImg = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        axios
            .patch('/users/upload', data, {
                headers: { token: localStorage.getItem('token') },
            })
            .then((res) => {
                if (res.data.success) {
                    setUser(res.data.data);
                }
            });
    };
    const handleLogout = () => {
        // Clear user data from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setArtists(false);
        // Clear user data from context
        setUser(null);
        setIsLoggedIn(false);
        // Redirect to the login page or any desired page
        navigate('/login');
    };

    return (
        <div className=' min-h-[100vh] mt-[150px]'>
            YOUR PROFILE
            <div className='bg-gray-100 mt-[30px] py-[30px]'>
                <div className='max-w-lg mx-auto bg-white rounded-lg shadow-md p-5  '>
                    <p className=' mtext-center text-xl font-semibold mt-3'>
                        <span className=' text-gray-800 mt-1'>First name:</span>{' '}
                        {user?.firstName}
                    </p>
                    <p className='mb-10 text-gray-600 mt-1'>
                        <span className=' text-gray-800 mt-1'>Last name:</span>{' '}
                        {user?.lastName}
                    </p>
                    <div className='flex place-content-end'>
                        <button
                            onClick={handleLogout}
                            className='gap-x-1 text-gray-900'
                        >
                            Logout
                        </button>
                    </div>
                    <img
                        className='w-32 h-32 rounded-full border-2 mx-auto object-cover '
                        src={user?.profileImage}
                        alt='Profile picture'
                    ></img>
                    <form onSubmit={uploadImg} encType='multipart/form-data'>
                        <input type='file' name='profileImg' />
                        <button>Upload Photo</button>
                    </form>

                    <div className='mt-20'>
                        <div className='text-gray-600 mt-2'>
                            {user?.role === 'admin' && user.isArtist ? (
                                <div>
                                    {' '}
                                    <NavLink to='/artistregister'>
                                        artist application
                                    </NavLink>
                                    {/* <div
                                        onClick={() => {
                                            navigate(
                                                `/artists/${user?.userArtist._id}`
                                            );
                                        }}
                                    >
                                        {user?.userArtist.workingName}
                                    </div> */}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
