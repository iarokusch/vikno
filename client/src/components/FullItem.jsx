import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FullItem = () => {
    const { id } = useParams();
    const [itemData, setItemData] = useState([]);
    const [artist, setArtist] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`/items/fullitem/${id}`)
            .then((res) => {
                if (res.data.success) {
                    setItemData(res.data.data);
                    console.log(res.data.data);
                }
            })
            .catch((err) => {
                console.log('Error ', err);
            });
    }, [id]);

    useEffect(() => {
        axios
            .get(`/artists`)
            .then((res) => {
                if (res.data.success) {
                    setArtist(res.data.data);
                    console.log(res.data.data);
                }
            })
            .catch((err) => {
                console.log('Error ', err);
            });
    }, []);

    const handleGoBack = () => {
        navigate('/shop');
    };

    return (
        <div className='mt-[100px]'>
            <div className='mt-5 fixed left-[30px]'>
                <div
                    className=' hover:bg-red-700 hover:text-white text-lg  py-2 px-4 rounded'
                    onClick={handleGoBack}
                >
                    To Shop
                </div>
            </div>
            <div className='flex flex-column m-auto h-min[90%] w-[900PX] p-10'>
                {itemData && (
                    <div className='flex-column' key={itemData._id}>
                        <div className='text-xl border-2 py-5'>
                            <h3>Title: {itemData.title}</h3>
                            <h4>Description: {itemData.description}</h4>
                        </div>

                        {itemData.img && (
                            <img
                                className='item-image'
                                src={itemData.img[0]}
                                alt={itemData.title}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FullItem;
