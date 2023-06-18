import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/context.js';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function ArtistRegistr() {
    const { user, setUser, setArtists } = useContext(MyContext);

    const [error, setError] = useState('');
    const userProfile = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    // console.log(userProfile);
    const [fileData, setFiledata] = useState({
        url: '',
        file: null,
    });
    const handleImageChange = (e) => {
        console.log(
            ':rocket: ~ handleImageChange ~ e',
            e.currentTarget.files[0]
        );
        setFiledata({
            url: URL.createObjectURL(e.currentTarget.files[0]),
            file: e.currentTarget.files[0],
        });
    };

    const artistRegister = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        // const artist = {
        //     workingName: e.target.title.value,
        //     title: e.target.title.value,
        //     skills: e.target.skills.value,
        //     medium: e.target.medium.value,
        //     projectRoles: e.target.projectRoles.value,
        // };
        // console.log(userProfile.data._id);
        axios
            .post('/artists/newartist', data, {
                headers: { token: localStorage.getItem('token') },
            })
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data);
                    setArtists(res.data.data);
                    navigate('/itemregister', { state: res.data.data });
                } else {
                    setError(res.data.msg);
                }
            });
    };
    console.log(user);
    useEffect(() => {
        axios
            .get(`/users/${userProfile.data._id}`)
            .then((res) => {
                if (res.data.success) {
                    setUser(res.data);
                }
            })
            .catch((err) => {
                console.log('Error ', err);
            });
    }, []);
    return (
        <form
            className='mt-[200px] min-h-[100vh] mx-[6rem]'
            onSubmit={artistRegister}
            encType='multi-part/formdata'
        >
            <div className=' space-y-12'>
                <div className='border-b border-gray-900/10 pb-12'>
                    <div className=' grid grid-cols-1  gap-x-6 gap-y-8 sm:grid-cols-6 '>
                        <div className='sm:col-span-4'>
                            <label
                                htmlFor='workingName'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Name<span className='text-red-500'>*</span>
                            </label>
                            <div className='mt-2'>
                                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                    <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                                        expl: Name/ Working Name / Position etc.
                                    </span>
                                    <input
                                        type='text'
                                        name='workingName'
                                        id='workingName'
                                        autoComplete='workingName'
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                        placeholder=''
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label
                                htmlFor='title'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Title<span className='text-red-500'>*</span>
                            </label>
                            <div className='mt-2'>
                                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                    <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                                        expl: Creative Director / Art Director /
                                        Copywriter etc.
                                    </span>
                                    <input
                                        type='text'
                                        name='title'
                                        id='title'
                                        autoComplete='title'
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                        placeholder=''
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label
                                htmlFor='skills'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Skills<span className='text-red-500'>*</span>
                            </label>
                            <div className='mt-2'>
                                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                    <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                                        expl: Digital, Experiential,
                                        Language,Adobe InDesign etc.
                                    </span>
                                    <input
                                        type='text'
                                        name='skills'
                                        id='skills'
                                        autoComplete='skills'
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                        placeholder='write here all your skills'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='sm:col-span-4'>
                            <label
                                htmlFor='medium'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Medium<span className='text-red-500'>*</span>
                            </label>
                            <div className='mt-2'>
                                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                    <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                                        expl: Presentations, Short
                                        Films,Personal Project, etc.
                                    </span>
                                    <input
                                        type='text'
                                        name='medium'
                                        id='medium'
                                        autoComplete='medium'
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                        placeholder=''
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='col-span-full'>
                            <label
                                htmlFor='projectRoles'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                About / Project Roles
                                <span className='text-red-500'>*</span>
                            </label>
                            <div className='mt-2'>
                                <textarea
                                    id='projectRoles'
                                    name='projectRoles'
                                    rows={3}
                                    className='bif (res.data.success)lock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    defaultValue={''}
                                />
                            </div>
                            <p className='mt-3 text-sm leading-6 text-gray-600'>
                                Write a few sentences about yourself.
                            </p>
                        </div>

                        <div>
                            <div className='col-span-full'>
                                <label
                                    htmlFor='photo'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Cover Photo
                                </label>
                                <div className='mt-2 flex items-center gap-x-3'>
                                    <label className='cursor-pointer'>
                                        Select artist profile image
                                        <input
                                            name='artist_profile_img'
                                            type='file'
                                            className='hidden'
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                    <img
                                        className='w-[300px] h-[300px] rounded-md object-cover'
                                        src={fileData.url}
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* part */}
            </div>

            <div className='my-6 flex items-center justify-end gap-x-6'>
                <button
                    onClick={() => navigate('/')}
                    type='button'
                    className='text-sm font-semibold leading-6 text-gray-900'
                >
                    Cancel
                </button>
                <button
                    type='submit'
                    className='rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                    Save
                </button>
            </div>
        </form>
    );
}

{
    /* <div className='border-b border-gray-900/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-900'>
                        Notifications
                    </h2>
                    <p className='mt-1 text-sm leading-6 text-gray-600'>
                        We'll always let you know about important changes, but
                        you pick what else you want to hear about.
                    </p>

                    <div className='mt-10 space-y-10'>
                        <fieldset>
                            <legend className='text-sm font-semibold leading-6 text-gray-900'>
                                By Email
                            </legend>
                            <div className='mt-6 space-y-6'>
                                <div className='relative flex gap-x-3'>
                                    <div className='flex h-6 items-center'>
                                        <input
                                            id='comments'
                                            name='comments'
                                            type='checkbox'
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                    </div>
                                    <div className='text-sm leading-6'>
                                        <label
                                            htmlFor='comments'
                                            className='font-medium text-gray-900'
                                        >
                                            Comments
                                        </label>
                                        <p className='text-gray-500'>
                                            Get notified when someones posts a
                                            comment on a posting.
                                        </p>
                                    </div>
                                </div>
                                <div className='relative flex gap-x-3'>
                                    <div className='flex h-6 items-center'>
                                        <input
                                            id='candidates'
                                            name='candidates'
                                            type='checkbox'
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                    </div>
                                    <div className='text-sm leading-6'>
                                        <label
                                            htmlFor='candidates'
                                            className='font-medium text-gray-900'
                                        >
                                            Candidates
                                        </label>
                                        <p className='text-gray-500'>
                                            Get notified when a candidate
                                            applies for a job.
                                        </p>
                                    </div>
                                </div>
                                <div className='relative flex gap-x-3'>
                                    <div className='flex h-6 items-center'>
                                        <input
                                            id='offers'
                                            name='offers'
                                            type='checkbox'
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                    </div>
                                    <div className='text-sm leading-6'>
                                        <label
                                            htmlFor='offers'
                                            className='font-medium text-gray-900'
                                        >
                                            Offers
                                        </label>
                                        <p className='text-gray-500'>
                                            Get notified when a candidate
                                            accepts or rejects an offer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className='text-sm font-semibold leading-6 text-gray-900'>
                                Push Notifications
                            </legend>
                            <p className='mt-1 text-sm leading-6 text-gray-600'>
                                These are delivered via SMS to your mobile
                                phone.
                            </p>
                            <div className='mt-6 space-y-6'>
                                <div className='flex items-center gap-x-3'>
                                    <input
                                        id='push-everything'
                                        name='push-notifications'
                                        type='radio'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                    <label
                                        htmlFor='push-everything'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        Everything
                                    </label>
                                </div>
                                <div className='flex items-center gap-x-3'>
                                    <input
                                        id='push-email'
                                        name='push-notifications'
                                        type='radio'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                    <label
                                        htmlFor='push-email'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        Same as email
                                    </label>
                                </div>
                                <div className='flex items-center gap-x-3'>
                                    <input
                                        id='push-nothing'
                                        name='push-notifications'
                                        type='radio'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                    <label
                                        htmlFor='push-nothing'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        No push notifications
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div> */
}
