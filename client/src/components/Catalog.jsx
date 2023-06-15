import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../context/context.js';
import axios from 'axios';

const Catalog = () => {
    const { artists, setArtists } = useContext(MyContext);

    useEffect(() => {
        axios
            .get('/artists')
            .then((res) => {
                setArtists(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log('Error', err);
            });
    }, []);
    // console.log(artists[6].items[0].img[0]);
    return (
        <div className='min-h-[100vh] pt-[12rem] px-12 flex flex-wrap justify-between gap-6'>
            {artists.length > 0 ? (
                artists.map((artist) => (
                    <NavLink
                        key={artist._id}
                        to={`/artists/${artist._id}`}
                        className='flex flex-col w-[30%] h-[30vh] border-2 rounded-lg overflow-hidden'
                        style={{
                            backgroundImage: `url(${artist?.items[0]?.img[0]})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className='artist-card'>
                            <div className='artist-profileImage'>
                                <img
                                    src={artist.profileImage}
                                    alt={artist.title}
                                    className='rounded-full m-2 object-cover border-2 w-[70px] h-[70px]'
                                />
                            </div>
                            <div className='artist-info flex justify-center items-center'>
                                <div className='bg-[rgb(0,0,0,0.8)] w-[50%]'>
                                    <h2 className='text-white text-xl'>
                                        {artist.title}
                                    </h2>
                                    <h2 className='text-white font text-lg italic'>
                                        {artist.medium}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                ))
            ) : (
                <div>No artists found</div>
            )}
        </div>
    );
};

export default Catalog;

// import React, { useContext, useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { MyContext } from '../context/context.js';
// import axios from 'axios';

// const Catalog = () => {
//     const { artists, setArtists } = useContext(MyContext);

//     useEffect(() => {
//         axios
//             .get('/artists')
//             .then((res) => {
//                 setArtists(res.data.data);
//                 console.log(res.data.data);
//             })
//             .catch((err) => {
//                 console.log('Error', err);
//             });
//     }, []);

//     return (
//         <div className=''>
//             {/* <NavLink to='/profile'>to profile</NavLink> */}
//             <div className='flex gap-20'>
//                 {artists.length > 0 ? (
//                     artists.map((artist) => (
//                         <NavLink
//                             className='flex block border-2 w-[50%] h-[200px]  '
//                             key={artist._id}
//                             to={`/artists/${artist._id}`}
//                             style={{
//                                 backgroundImage:
//                                     'url(https://www.artmajeur.com/medias/hd/b/o/borjamarquez96/artwork/14671496_inbound6043847574601330059.jpg)',
//                                 backgroundPosition: 'center',
//                                 backgroundSize: 'cover',
//                             }}
//                         >
//                             <div className='artist-card'>
//                                 <div className='artist-profileImage'>
//                                     <img
//                                         src={artist.profileImage}
//                                         alt={artist.title}
//                                         className='rounded-full border-2 w-[50px]'
//                                     />
//                                 </div>
//                                 <div className='artist-info'>
//                                     <div>
//                                         <h2>{artist.title}</h2>
//                                         <h2 className='text-gray-600 font text-sm italic'>
//                                             {artist.medium}
//                                         </h2>
//                                     </div>

//                                     {/* <div>
//                                         {artist?.items.map((item) => (
//                                             <div key={item._id}>
//                                                 {item.title}
//                                             </div>
//                                         ))}
//                                     </div> */}
//                                 </div>
//                             </div>
//                         </NavLink>
//                     ))
//                 ) : (
//                     <div>No artists found</div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Catalog;
