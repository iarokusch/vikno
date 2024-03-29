import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/context';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BsArrowLeftShort } from 'react-icons/bs';

const ArtistPage = () => {
    const [isDel, setIsDel] = useState(false);
    const [artist, setArtist] = useState(null);
    const { items, setItems, user, isLoggedIn, setIsLoggedIn } =
        useContext(MyContext);
    const userProfile = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`/artists/${id}`)
            .then((res) => {
                if (res.data.success) {
                    setArtist(res.data.data);
                    console.log(res.data.data);
                }
            })
            .catch((err) => {
                console.log('Error ', err);
            });
        axios
            .get(`/items`)
            .then((res) => {
                if (res.data.success) {
                    setItems(res.data.data);
                    if (localStorage.getItem('token')) {
                        setIsLoggedIn(true);
                    }
                    console.log(res.data.data);
                }
            })
            .catch((err) => {
                console.log('Error ', err);
            });
    }, [isDel]);

    const deleteItem = async (itemId) => {
        try {
            const res = await axios.delete(`/items/${itemId}`, {
                headers: { token: localStorage.getItem('token') },
            });
            if (res.data.success) {
                // Item deleted successfully, perform any necessary actions
                console.log('Item deleted');
                setIsDel(true);
            }
        } catch (error) {
            console.log('Error deleting item', error);
        }
    };

    return (
        <div className='bg-black '>
            <div className='flex justify-around py-5'>
                <div className='flex flex-start '>
                    <button onClick={() => navigate(-1)}>
                        <h3 className='flex justify-center text-white items-center text-xl'>
                            <BsArrowLeftShort size={24} />
                            back
                        </h3>
                    </button>
                </div>
                <div className='text-white text-xl mt-2'>
                    {user?.role === 'admin' &&
                        user?.userArtist?._id === artist?._id ? (
                        <NavLink to='/itemregister' state={artist}>
                            {`add a project to the artist : ${artist?.workingName}`}
                        </NavLink>
                    ) : null}
                </div>
            </div>

            <div className='w-xl min-w-l mx-auto  bg-white rounded-lg shadow-md p-5'>
                <div className='flex items-center place-content-around my-[3rem] '>
                    <div className='left side'>
                        <div className='flex items-center m-auto'>
                            <img
                                className='w-32 h-32 rounded-full border-2 object-cover'
                                src={artist?.profileImage}
                                alt='Profile picture'
                            />
                            <div className='w-auto'>
                                <h2 className='text-center  text-2xl font-semibold mt-3'>
                                    {artist?.workingName}
                                </h2>
                                <h4 className='text-center text-gray-600 mt-1'>
                                    {artist?.title}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='right side'>
                        <div className='text-gray-600 mt-2 max-w-[500px]'>
                            <h4>
                                <p>{artist?.projectRoles}</p>
                            </h4>
                        </div>
                    </div>
                </div>

                <span>
                    {/* <button onClick={uploadFoto}>upload foto</button> */}
                </span>
                <div className='grid grid-cols-3 gap-4'>
                    {items.map((item) => (
                        <div
                            key={item._id}
                            className='bg-gray-100 text-left underline decoration-1'
                        >
                            <div className='py-5 px-2'>
                                <h4> title : {item.title}</h4>
                                <h4>description : {item.description}</h4>
                                <h4>media : {item.media} </h4>
                                <h4>size : {item.size}</h4>
                            </div>

                            <Link to={`/fullitem`} state={item}>
                                <Carousel showThumbs={false}>
                                    {item.img.map((el, index) => (
                                        <div key={index}>
                                            <img
                                                src={el}
                                                alt={`Image ${index}`}
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </Link>

                            {/* Buttons for edit, delete, and save */}
                            {user?.role === 'admin' &&
                                isLoggedIn &&
                                user?.userArtist?._id === artist?._id ? (
                                <div className='flex justify-end mt-2'>
                                    <NavLink
                                        to='/changeitemdata'
                                        state={item}
                                        className=' hover:bg-yellow-300  font-bold py-2 px-4 mr-2'
                                    >
                                        Edit
                                    </NavLink>
                                    <button
                                        className=' hover:bg-yellow-300 font-bold py-2 px-4 mr-2'
                                        onClick={() => deleteItem(item._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtistPage;
