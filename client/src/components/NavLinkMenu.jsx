import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinkMenu({ toggleMenu, item }) {
    return (
        <NavLink
            key={item.name}
            to={item.href}
            className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50'
            onClick={toggleMenu}
        >
            <div>
                <span className='font-semibold text-gray-900'>
                    {item.name}
                    <span className='absolute inset-0' />
                </span>
                <p className='mt-1 text-gray-600'>{item.description}</p>
            </div>
        </NavLink>
    );
}

export default NavLinkMenu;
