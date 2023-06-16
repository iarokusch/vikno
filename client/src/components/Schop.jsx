import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link, Navigate, useNavigate } from 'react-router-dom';
import { MyContext } from '../context/context.js';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { SlBasket } from 'react-icons/sl';
const Shop = () => {
    const navigate = useNavigate();
    const { items, setItems, cart, setCart, isLoggedIn, setIsLoggedIn } =
        useContext(MyContext);
    const [selectedItem, setSelectedItem] = useState(null);

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

    const addItemInCart = (item) => {
        if (!isLoggedIn) {
            navigate('/login');
            alert('Please log in to add items to the cart.');
            return;
        }

        const foundItem = cart.find((elm) => elm._id === item._id);
        if (foundItem) {
            foundItem.quantity++;
            setCart([...cart]);
        } else {
            item.quantity = 1;
            setCart([...cart, item]);
        }
    };

    const handleCloseFullScreen = () => {
        setSelectedItem(null);
    };
    // const handleSelectItem = (item) => {
    //     setSelectedItem(item);
    //     navigate('/fullitem');
    // };

    // axios
    //     .post('http://localhost:4000/items/order', cart, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             token: localStorage.getItem('token'),
    //         },
    //     })
    //     .then((res) => {
    //         console.log(res.data);
    //         if (res.data.success) {
    //             window.location.href = res.data.url;
    //         }
    //     });

    return (
        <div className='mt-[150px] min-h-[100vh]'>
            <h1>Shop</h1>
            <div className='absolute right-[40px]'>
                {/* {cart.map((item) => {
                    return (
                        <div key={item._id}>
                            <h2>quantity: {item.quantity}</h2>
                        </div>
                    );
                })} */}

                <NavLink to='/cart'>
                    <div className='rounded-full w-[100px] h-[100px] border-[2px] border-black text-white bg-black p-4'>
                        <h1>Cart Items</h1>
                        <div className='flex px-1 pt-1 gap-5'>
                            <div>
                                <SlBasket size={24} />
                            </div>
                            <div> {cart.length}</div>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className='flex m-3 justify-center px-12 pt-[6rem]'>
                <div className='grid grid-cols-3 gap-6 mb-[6rem]'>
                    {items
                        .filter((itemPrise) => itemPrise.price)
                        .map((item) => (
                            <div key={item._id} className='bg-white p-4 shadow'>
                                <h2 className='text-xl mb-2'>{item.title}</h2>
                                <h3>{item.description}</h3>
                                <h1 className='text-lg mb-2'>{item.price}</h1>
                                <Link to={`/fullitem`} state={item}>
                                    <Carousel showThumbs={false}>
                                        {item.img.map((image, index) => (
                                            <div
                                                key={index}
                                                // onClick={() =>
                                                //     handleSelectItem(item)
                                                // }
                                            >
                                                <img src={image} alt='' />
                                            </div>
                                        ))}
                                    </Carousel>
                                </Link>
                                <button
                                    onClick={() => addItemInCart(item)}
                                    className='bg-green-500 text-white py-2 px-4 rounded'
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                </div>
            </div>
            {selectedItem && (
                <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black'>
                    <Carousel showThumbs={false}>
                        {selectedItem.img.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt='' />
                            </div>
                        ))}
                    </Carousel>
                    <button
                        className='absolute top-4 right-4 bg-white text-black py-2 px-4 rounded'
                        onClick={handleCloseFullScreen}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default Shop;
