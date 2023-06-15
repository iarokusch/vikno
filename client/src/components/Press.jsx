import React from 'react';

export default function Press() {
    return (
        <div className='min-h-[100vh] mt-[150px]'>
            <div className='left right block'></div>
            <div>
                <h1>container with info</h1>
                <div className='special-ticker-wrapper mt-20'>
                    <div
                        className='running-text-container w-[100vw] mt-[20px]'
                        style={{ backgroundColor: 'rgb(34, 178, 34)' }}
                    >
                        <span className='running-text'>
                            <p>
                                website_under_contruction_website_under_contruction_website_under_contruction_website_under_contruction
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
