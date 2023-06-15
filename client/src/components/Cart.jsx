import React, { useContext } from 'react';
import { MyContext } from '../context/context.js';
import axios from 'axios';

export default function Cart() {
    const { cart, setCart } = useContext(MyContext);

    const checkOut = () => {
        axios
            .post('http://localhost:4000/items/order', cart, {
                headers: {
                    'Content-Type': 'application/json',
                    token: localStorage.getItem('token'),
                },
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    window.location.href = res.data.url;
                }
            });
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <div className='min-h-[90vh] mb-[100px]'>
            <h1>Cart Items</h1>
            {cart.map((item) => {
                return (
                    <div key={item._id}>
                        <h2>{item.title}</h2>
                        <h1>{item.prise}</h1>
                        <h2>quantity: {item.quantity}</h2>
                    </div>
                );
            })}

            {cart.length > 0 && (
                <div className=''>
                    <div className='my-10'>
                        <button onClick={checkOut}>Check Out</button>
                    </div>
                    <div>
                        <button onClick={clearCart}>Clear Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
}
