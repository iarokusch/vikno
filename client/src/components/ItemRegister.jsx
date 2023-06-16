import React, { useContext, useState } from 'react';
import { MyContext } from '../context/context.js';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FiX } from 'react-icons/fi';

const ItemRegister = () => {
    const { state } = useLocation();
    const [fileData, setFiledata] = useState([]);

    const { user, setUser } = useContext(MyContext);
    const userProfile = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const allImages = Array.from(e.target.files).map((file) => ({
            url: URL.createObjectURL(file),
            file: file,
        }));
        setFiledata([...fileData, ...allImages]);
    };

    const addItemsToArtist = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append('artistId', state._id);

        axios
            .post('/items/newitem', data, {
                headers: { token: localStorage.getItem('token') },
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    setUser(res.data.data);
                    navigate('/profile');
                } else {
                    alert(res.data.msg);
                }
            })
            .catch((err) => {
                console.log('Error ', err);
            });
    };

    const removeImage = (index) => {
        const updatedFileData = [...fileData];
        updatedFileData.splice(index, 1);
        setFiledata(updatedFileData);
    };

    return (
        <div className='mt-[150px]  min-h-[100vh]'>
            <h4 className='pb-[30px]'>
                Item / Object / Works registartion form
            </h4>
            <form
                className='max-w-7xl m-auto'
                onSubmit={addItemsToArtist}
                encType='multi-part/formdata'
            >
                <div className='space-y-12'>
                    <div className='flex flex-row mt-10  border-b border-gray-900/10 pb-12'>
                        <div className=' grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
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
                                            Name of project/
                                        </span>
                                        <input
                                            type='text'
                                            name='title'
                                            id='title'
                                            autoComplete='title'
                                            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder='required'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='sm:col-span-4'>
                                <label
                                    htmlFor='media'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Media
                                </label>
                                <div className='mt-2'>
                                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                        <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                                            expl: Painting / Copywriter etc.
                                        </span>
                                        <input
                                            type='text'
                                            name='media'
                                            id='media'
                                            autoComplete='media'
                                            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder=''
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='sm:col-span-4'>
                                <label
                                    htmlFor='size'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Size
                                </label>
                                <div className='mt-2'>
                                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                        <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                                            Optional/
                                        </span>

                                        <input
                                            type='text'
                                            name='size'
                                            id='size'
                                            autoComplete='size'
                                            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder='write here all your skills'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='sm:col-span-4'>
                                <label
                                    htmlFor='price'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Price
                                </label>
                                <div className='mt-2'>
                                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                        <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                                            Optional/
                                        </span>
                                        <input
                                            type='text'
                                            name='price'
                                            id='price'
                                            autoComplete='price'
                                            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder='write here all your skills'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='sm:col-span-4'>
                                <label
                                    htmlFor='description'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Description
                                    <span className='text-red-500'>*</span>
                                </label>
                                <div className='mt-2'>
                                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                        <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                                            Write here information about your
                                            project/art-work/
                                        </span>
                                        <input
                                            type='text'
                                            name='description'
                                            id='description'
                                            autoComplete='description'
                                            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder='required'
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* <div className='col-span-full'>
                        <label
                            htmlFor='about'
                            className='block text-sm font-medium leading-6 text-gray-900'
                        >
                            About
                        </label>
                        <div className='mt-2'>
                            <textarea
                                id='about'
                                name='about'
                                rows={3}
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                defaultValue={''}
                            />
                        </div>
                        <p className='mt-3 text-sm leading-6 text-gray-600'>
                            Write a few sentences about art work.
                        </p>
                    </div> */}

                            {/* <div className='col-span-full'>
                        <label
                            htmlFor='photo'
                            className='block text-sm font-medium leading-6 text-gray-900'
                        >
                            Photo
                        </label>
                        <div className='mt-2 flex items-center gap-x-3'>
                            <UserCircleIcon
                                className='h-12 w-12 text-gray-300'
                                aria-hidden='true'
                                src={artists?.profileImage}
                                alt='Profile picture'
                            />
                            <button
                                type='button'
                                className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                            >
                                Change
                            </button>
                        </div>
                    </div> */}
                        </div>

                        <div className='col-span-full '>
                            <label
                                htmlFor=''
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Images<span className='text-red-500'>*</span>
                            </label>

                            <div className='w-100px mt-2 p-5 border-2 gap-x-3'>
                                <label className='cursor-pointer'>
                                    Select image
                                    <input
                                        multiple={'multiple'}
                                        name='item_img'
                                        type='file'
                                        className='hidden'
                                        onChange={handleImageChange}
                                    />
                                </label>
                                {fileData.map((item, index) => (
                                    <div key={index} className='relative'>
                                        <img
                                            className='w-max-100px h-[300px] rounded-md object-cover'
                                            src={item.url}
                                            alt=''
                                        />
                                        <button
                                            className='absolute top-2 right-2 bg-white rounded-full p-1.5 text-gray-600 '
                                            onClick={() => removeImage(index)}
                                        >
                                            <FiX className='h-4 w-4' />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-6 flex items-center justify-end gap-x-6'>
                    <button
                        onClick={() => navigate('/')}
                        type='button'
                        className='text-sm font-semibold leading-6 text-gray-900'
                    >
                        Cancel
                    </button>
                    <button
                        type='submit'
                        className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ItemRegister;
