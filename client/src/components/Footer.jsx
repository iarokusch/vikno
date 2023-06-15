import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdOutgoingMail } from 'react-icons/md';
import { MdPrivacyTip } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='relative py-5 flex justify-around bg-black bg-slate-100 border-2 border-black'>
            <div className='container mx-auto flex flex-col items-center '>
                <div className='flex gap-9'>
                    <div className='flex flex-col'>
                        <h2 className='text-lg mb-2'>Social Media</h2>
                        <div className='flex flew-row justify-around'>
                            <a href='http://www.instagram.com'>
                                <AiOutlineInstagram size={24} />
                            </a>
                            <a href='http://www.linkedin.com/in/iaroslavilica/'>
                                <AiFillLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-lg mb-2'>Contact</h2>
                        <div className='flex justify-center'>
                            <NavLink to={'/contact'}>
                                <MdOutgoingMail size={24} />
                            </NavLink>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-lg mb-2'>Privacy Policy</h2>
                        <div className='flex justify-center'>
                            <NavLink to={'/privacypolicy'}>
                                <MdPrivacyTip size={24} />
                            </NavLink>
                        </div>
                    </div>
                    {/* <div className='flex flex-col'>
                        <h2 className='text-lg  mb-2'>Impressum</h2>
                     
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
