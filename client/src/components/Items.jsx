import React, { useContext, useEffect } from 'react';
import { MyContext } from '../context/context.js';
import axios from 'axios';

const Items = () => {
    const { items, setItems } = useContext(MyContext);

    useEffect(() => {
        axios
            .get('/items')
            .then((res) => {
                if (res.data.success) {
                    setItems(res.data.data);
                    console.log(res.data.data);
                }
            })
            .catch((err) => {
                console.log('Error ', err);
            });
    }, []);

    console.log(items);

    return (
        <div className='min-h-[100vh] mt-[150px]'>
            {items.map((item) => (
                <div className='w-[20%] m-auto' key={item.id}>
                    <h3>{item.name}</h3>
                    {item.img.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={item.name} />
                    ))}
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Items;
