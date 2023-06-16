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
        <div className='mt-[150px] mx-[12rem] min-h-[100vh]'>
            <div>
                <h2>Edit Item</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='media'>Media</label>
                        <input
                            type='text'
                            id='media'
                            name='media'
                            value={media}
                            onChange={handleMediaChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='size'>Size</label>
                        <input
                            type='text'
                            id='size'
                            name='size'
                            value={size}
                            onChange={handleSizeChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='price'>Price</label>
                        <input
                            type='text'
                            id='price'
                            name='price'
                            value={price}
                            onChange={handlePriceChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='description'>Description</label>
                        <input
                            type='text'
                            id='description'
                            name='description'
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </div>
                    {/* Other form fields */}
                    {/* ... */}
                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    );
}
