import React, { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MyContext } from '../context/context.js';
import axios from 'axios';

export const Home = () => {
    const { items, setItems, cart, setCart } = useContext(MyContext);

    // const navigate = useNavigate();
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
    console.log(items);

    return (
        <>
            <div
                className='p-[6rem] pt-[100px] '
                style={{
                    backgroundImage: "url('/logo4.png')",
                    backgroundSize: 'cover',
                }}
            >
                {/* <img
                    className=' '
                    src='http://localhost:5173/src/assets/logo4.png'
                    alt=''
                /> */}
                <div className=''>
                    <div className='text-left text-[100px] font-bold '>
                        <h1>Supporting </h1>
                        <h1>Window </h1>
                    </div>
                    <div className=' grid grid-row-3 gap-5'>
                        <div className='grid grid-cols-3 gap-3 '>
                            <img
                                className='slide-top'
                                src={items[0]?.img[0]}
                                alt=''
                            />
                            <img
                                className='slide-b'
                                src={items[1]?.img[0]}
                                alt=''
                            />

                            <img
                                className='slide-left-opacity100 w-[1000px]'
                                src={items[2]?.img[0]}
                                alt=''
                            />
                        </div>
                        <div className='grid grid-cols-4 gap-4 ' s>
                            <img
                                className='slide-opacity100'
                                src={items[3]?.img[0]}
                                alt=''
                            />
                            <img
                                className='slide-opacity'
                                src={items[4]?.img[0]}
                                alt=''
                            />
                            <img
                                className='slide-left'
                                src={items[5]?.img[0]}
                                alt=''
                            />
                            <img
                                className='slide'
                                src={items[5]?.img[0]}
                                alt=''
                            />
                        </div>
                        {/* <div className='grid grid-cols-2'>
                            <img
                                className='slide-b'
                                src={items[6]?.img[0]}
                                alt=''
                            />
                            <img
                                className='slide'
                                src={items[11]?.img[0]}
                                alt=''
                            />
                            <div
div
div
divimg
                                className='slide'
                                src={items[13]?.img[1]}
                                alt=''
                            />
                        </div> */}
                    </div>
                </div>

                <div
                    className='w-[100%] h-[300px] my-[150px] p-5 text-black text-justify compo border-2 bg-gray-100'
                    // style={{
                    //     backgroundImage:
                    //         "url('http://localhost:5173/src/assets/logo4.1.png')",
                    //     backgroundSize: 'contain',
                    //     backgroundRepeat: 'no-repeat',
                    // }}
                >
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus sequi exercitationem odio dolorum. Ipsam,
                        atque reprehenderit dolorum, hic eius id itaque beatae
                        vitae nisi fugit assumenda praesentium molestias, quo
                        facilis? Aut magni sunt laboriosam, veniam ut voluptate
                        architecto cum blanditiis, incidunt, excepturi eius
                        error sit? Dignissimos sit eveniet nobis pariatur
                        placeat, in incidunt reiciendis voluptas quam expedita
                        quasi perferendis, odit officia eligendi dolorem unde,
                        explicabo quod doloremque est! Porro nam in libero ipsa
                        tempora cupiditate adipisci voluptatum magni rerum,
                        voluptates non blanditiis consectetur optio incidunt.
                        Fugit laboriosam facilis consectetur modi nam iste sequi
                        amet debitis quas? Iste ratione ipsa iusto!
                    </h3>
                    <img src='' alt='' />

                    <div className='w-[80%]  m-auto mt-10 h-20 bg-white text-center '>
                        about
                    </div>
                </div>

                <div className='my-12  h-[300px] w-[100%] border-2 bg-black text-white'>
                    <h1>register </h1>
                    <div></div>
                </div>

                <div className='h-[300px] w-[100%] bg-gradient-to-r from-purple-500 to-pink-500 flex my-5  text-white justify-center items-center border-2   '>
                    <div className='special-ticker-wrapper w-[100%]'>
                        <div className='running-text-container w-[100%]'>
                            <span className='running-text'>
                                <p>
                                    website_under_contruction_website_under_contruction_website_under_contruction_website_under_contruction
                                </p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='my-5 border-2'>
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus sequi exercitationem odio dolorum. Ipsam,
                        atque reprehenderit dolorum, hic eius id itaque beatae
                        vitae nisi fugit assumenda praesentium molestias, quo
                        facilis? Aut magni sunt laboriosam, veniam ut voluptate
                        architecto cum blanditiis, incidunt, excepturi eius
                        error sit? Dignissimos sit eveniet nobis pariatur
                        placeat, in incidunt reiciendis voluptas quam expedita
                        quasi perferendis, odit officia eligendi dolorem unde,
                        explicabo quod doloremque est! Porro nam in libero ipsa
                        tempora cupiditate adipisci voluptatum magni rerum,
                        voluptates non blanditiis consectetur optio incidunt.
                        Fugit laboriosam facilis consectetur modi nam iste sequi
                        amet debitis quas? Iste ratione ipsa iusto!
                    </h3>
                    <img src='' alt='' />
                </div>
                <div
                    className='my-5 mt-[6rem]  flex flex-col justify-center items-center text-white border-2 bg-orange-300'
                    style={{ width: '100%', height: '300px' }}
                >
                    <h1>shop</h1>
                    <div className='flex  m-5 border-2'>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus sequi exercitationem odio dolorum.
                            Ipsam, atque reprehenderit dolorum, hic eius id
                            itaque beatae vitae nisi fugit assumenda praesentium
                            molestias, quo facilis? Aut magni sunt laboriosam,
                            veniam ut voluptate architecto cum blanditiis,
                            incidunt, excepturi eius error sit? Dignissimos sit
                            eveniet nobis pariatur placeat, in incidunt
                            reiciendis voluptas quam expedita quasi perferendis,
                            odit officia eligendi dolorem unde, explicabo quod
                            doloremque est! Porro nam in libero ipsa tempora
                            cupiditate adipisci voluptatum magni rerum,
                            voluptates non blanditiis consectetur optio
                            incidunt. Fugit laboriosam facilis consectetur modi
                            nam iste sequi amet debitis quas? Iste ratione ipsa
                            iusto!
                        </h3>
                        <img src='' alt='' />
                    </div>
                </div>

                <div></div>
            </div>
        </>
    );
};
