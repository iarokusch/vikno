import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ChangeItemData() {
    const location = useLocation();
    const item = location.state;
    const navigate = useNavigate();

    // Access the data from the item object
    const {
        _id: itemId,
        title: initialTitle,
        media: initialMedia,
        size: initialSize,
        price: initialPrice,
        description: initialDescription,
    } = item;

    // Define state variables for the form inputs
    const [title, setTitle] = useState(initialTitle);
    const [media, setMedia] = useState(initialMedia);
    const [size, setSize] = useState(initialSize);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    // Change handlers for input fields
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleMediaChange = (e) => {
        setMedia(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    // Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create an object with the updated data
        const updatedItem = {
            title,
            media,
            size,
            price,
            description,
        };
        console.log(updatedItem);
        try {
            // Send a PUT request to update the item
            const response = await axios.patch(
                `/items/${itemId}`,
                updatedItem,
                {
                    headers: { token: localStorage.getItem('token') },
                }
            );
            console.log(response.data);
            navigate('/profile'); // Handle the response as needed
        } catch (error) {
            console.log(error); // Handle the error
        }
    };

    return (
        <div className='flex justify-center mt-[150px] min-h-[100vh]'>
            <div className='w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-4'>Edit Item</h2>
                <form
                    onSubmit={handleSubmit}
                    className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
                >
                    <div className='mb-4'>
                        <label
                            htmlFor='title'
                            className='block text-gray-700 text-sm font-bold mb-2'
                        >
                            Title
                        </label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            value={title}
                            onChange={handleTitleChange}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='media'
                            className='block text-gray-700 text-sm font-bold mb-2'
                        >
                            Media
                        </label>
                        <input
                            type='text'
                            id='media'
                            name='media'
                            value={media}
                            onChange={handleMediaChange}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='size'
                            className='block text-gray-700 text-sm font-bold mb-2'
                        >
                            Size
                        </label>
                        <input
                            type='text'
                            id='size'
                            name='size'
                            value={size}
                            onChange={handleSizeChange}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='price'
                            className='block text-gray-700 text-sm font-bold mb-2'
                        >
                            Price
                        </label>
                        <input
                            type='text'
                            id='price'
                            name='price'
                            value={price}
                            onChange={handlePriceChange}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='description'
                            className='block text-gray-700 text-sm font-bold mb-2'
                        >
                            Description
                        </label>
                        <input
                            type='text'
                            id='description'
                            name='description'
                            value={description}
                            onChange={handleDescriptionChange}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            type='submit'
                            className=' hover:bg-red-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
