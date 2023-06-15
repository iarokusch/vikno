import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MyContext } from './context.js';
// import axios from 'axios';

export default function Container({ children }) {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [artists, setArtists] = useState([]);
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [itemData, setItemData] = useState({});
    useEffect(() => {
        axios
            .get(`/users/refresh`, {
                headers: {
                    token: localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => {
                console.log('Error ', err);
            });
    }, []);

    return (
        <MyContext.Provider
            value={{
                user,
                setUser,
                artists,
                setArtists,
                items,
                setItems,
                cart,
                setCart,
                isLoggedIn,
                setIsLoggedIn,
                itemData,
                setItemData,
            }}
        >
            {children}
        </MyContext.Provider>
    );
}
