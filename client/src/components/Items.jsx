import React, { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MyContext } from '../context/context.js';
import axios from 'axios';

const Items = () => {
    const { artists, setArtists, artist, setArtist, items, setItems } =
        useContext(MyContext);
    const userProfile = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const addItemsToArtist = (e) => {
        e.preventDefault();
        const item = {
            title: e.target.title.value,
            media: e.target.media.value,
            size: e.target.media.value,
            prise: e.target.prise.value,
            description: e.target.description.value,
            userId: userProfile.data._id,
        };

        // const data = new FormData();
        // data.append('my_file', file);
        axios
            .post('/items/newitem', JSON.stringify(item), {
                headers: { 'Content-Type': 'application/json' },
            })
            .then((res) => {
                setItems([...items, res.data.data]);

                navigate('/catalog');
            })
            .catch((err) => {
                console.log('Error ', err);
            });
    };
    useEffect(() => {
        axios
            .get('/items')
            .then((res) => {
                setItems(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log('Error ', err);
            });
    }, []);

    return (
        <>
            {userProfile.data?.role === 'admin' ? (
                <div>
                    Items
                    {items.map((item) => {
                        return <div key={item._id}>{item.title}</div>;
                    })}
                    <NavLink to='/profile'>back to profile</NavLink>
                    <form onSubmit={addItemsToArtist}>
                        <label>
                            Title
                            <input type='text' name='title' />
                        </label>
                        <label>
                            Media
                            <input type='text' name='media' />
                        </label>
                        <label>
                            Size
                            <input type='text' name='size' />
                        </label>
                        <label>
                            Prise
                            <input type='text' name='prise' />
                        </label>
                        <label>
                            Description
                            <textarea
                                name='description'
                                rows='5'
                                cols='33'
                            ></textarea>
                        </label>
                        {/* <label>
                    IMG
                    <input type='file' name='IMG' />
                </label> */}

                        <button>send item</button>
                    </form>
                </div>
            ) : (
                <p>no exist</p>
            )}
        </>
    );
};

export default Items;
