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

    const isActive = (match, location) => {
        if (match) {
            return true;
        } else if (
            linksMenuWithProfile.some((item) =>
                location.pathname.includes(item.href)
            )
        ) {
            return true;
        } else {
            return false;
        }
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
                className='absolute pt-8 top-0 left-0 right-0 mb-9 text-xl flex justify-between pl-[300px] pr-[200px] h-[100px] bg-black bg-right-bottom'
                style={{
                    backgroundImage:
                        "url('http://localhost:5173/src/assets/logo4.2.png')",

                    backgroundRepeat: 'no-repeat',
                }}
                // style={{ backgroundColor: 'rgb(178, 34, 34)' }}
            >
                <div className='menu-section'>
                    <div className='relative'>
                        <button
                            className='flex outline-0 items-center gap-x-1 leading-6 text-white'
                            onClick={toggleMenu}
                        >
                            <span>
                                <h1 style={{ color: 'white' }}>Menu</h1>
                            </span>
                        </button>

                        {isOpen && (
                            <div className='absolute left-0 z-10 mt-5 flex w-screen max-w-max translate-x-0'>
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
                <NavLink to='/about'>
                    <div className='relative color-black top-[-15px] h-[70px] w-[70px] flex'>
                        <img src='http://localhost:5173/src/assets/logo6.png' />
                        {/* <div className='text-left ml-3'>
                        <p>LOCAL</p>
                        <p>SUPPORT</p>
                        <p>UKRAINIAN</p>
                    </div> */}
                    </div>
                </NavLink>
                <div className='flex gap-20 '>
                    <NavLink to='/' isActive={isActive}>
                        <h1 style={{ color: 'white' }}>Home</h1>
                    </NavLink>
                    <NavLink to='/login'>
                        <h1 style={{ color: 'white' }}>Sing In</h1>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
