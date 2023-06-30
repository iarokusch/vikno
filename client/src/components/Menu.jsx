import React, { Fragment, useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { MyContext } from '../context/context.js';
import NavLinkMenu from './NavLinkMenu.jsx';

const linksMenuWithProfile = [
    {
        name: 'Catalog',
        description: '',
        href: '/catalog',
    },
    {
        name: 'Participation',
        href: '/participation',
    },
    {
        name: 'Shop',
        href: '/shop',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
    {
        name: 'Profile',
        href: '/profile',
    },
    {
        name: 'Cart',
        href: '/cart',
    },
];

const linksMenu = [
    {
        name: 'Catalog',
        description: '',
        href: '/catalog',
    },
    {
        name: 'Participation',
        href: '/participation',
    },
    {
        name: 'Shop',
        href: '/shop',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
    {
        name: 'Cart',
        href: '/cart',
    },
];

export default function Menu() {
    const { cart, setUser, setIsLoggedIn, isLoggedIn } = useContext(MyContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLoggedIn(true);
        }
        if (isLoggedIn) {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);

    return (
        <>
            <div
                onClick={() => {
                    if (isOpen) {
                        setIsOpen(false);
                    }
                }}
                className='absolute  top-0 left-0 right-0 mb-9 text-xl flex justify-between items-center pl-[100px] pr-[180px] h-[100px] bg-black bg-right-bottom'
                style={{
                    backgroundImage: "url('/assets/logo4.2.png')",

                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex gap-x-[10px]'>
                    <NavLink to='/about'>
                        <div className='relative color-black w-[70px]'>
                            <img src='/assets/logo6.png' />
                            {/* <div className='text-left ml-3'>
                        <p>LOCAL</p>
                        <p>SUPPORT</p>
                        <p>UKRAINIAN</p>
                    </div> */}
                        </div>
                    </NavLink>
                    <div className='text-xl text-white text-left'>
                        <p>VIKNO</p>
                        <p>INTO</p>
                        <p>CREATIVITY</p>
                    </div>
                </div>
                <div className='menu-section pl-[50px]'>
                    <div className='relative'>
                        <button
                            className='flex outline-0 items-center gap-x-1 leading-6 text-white'
                            onClick={toggleMenu}
                        >
                            <span>
                                <h1 style={{ color: 'white' }}>MENU</h1>
                            </span>
                        </button>

                        {isOpen && (
                            <div className='absolute left-0 z-10 mt-5 flex w-screen max-w-max ml-[-120px] translate-x-0'>
                                <div className='w-full px-[5rem] md:max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-lg leading-6 shadow-lg ring-1 ring-gray-900/5'>
                                    <div className='p-4'>
                                        {isLoggedIn
                                            ? linksMenuWithProfile.map(
                                                  (item) => (
                                                      <NavLinkMenu
                                                          toggleMenu={
                                                              toggleMenu
                                                          }
                                                          item={item}
                                                          key={item.href}
                                                      />
                                                  )
                                              )
                                            : linksMenu.map((item) => (
                                                  <NavLinkMenu
                                                      toggleMenu={toggleMenu}
                                                      item={item}
                                                      key={item.href}
                                                  />
                                              ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='flex gap-20 '>
                    <NavLink to='/'>
                        <h1 style={{ color: 'white' }}>HOME</h1>
                    </NavLink>
                    <NavLink to='/login'>
                        <h1 style={{ color: 'white' }}>SING IN</h1>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
