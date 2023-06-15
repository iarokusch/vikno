// import React, { useContext, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { MyContext } from '../context/context.js';
// import axios from 'axios';

// export default Orders = () => {
//     const { items, setItems, cart, setCart } = useContext(MyContext);

//     // const navigate = useNavigate();
//     useEffect(() => {
//         axios
//             .get('/items')
//             .then((res) => {
//                 setItems(res.data.data);
//                 console.log(res.data.data);
//             })
//             .catch((err) => {
//                 console.log('Error ', err);
//             });
//     }, []);
//     console.log(items);
//     const addItemInCart = (item) => {
//         const foundItem = cart.find((elm) => elm._id === item._id);
//         if (foundItem) {
//             foundItem.quantity++;
//             setCart([...cart]);
//         } else {
//             item.quantity = 1;
//             setCart([...cart, item]);
//         }
//     };
//     return (
//         <div>
//             Orders
//             <div className='shop_items'>
//                 <div className='items'>
//                     {items
//                         .filter((itemPrise) => itemPrise.prise)
//                         .map((item) => {
//                             return (
//                                 <div key={item._id}>
//                                     <h2>{item.title}</h2>
//                                     <h1>{item.prise}</h1>
//                                     <button onClick={() => addItemInCart(item)}>
//                                         add to cart
//                                     </button>
//                                 </div>
//                             );
//                         })}
//                 </div>
//             </div>
//             //{' '}
//             <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12'>
//                 //{' '}
//                 <article>
//                     //{' '}
//                     <h2 className='text-2xl font-extrabold text-gray-900'>
//                         // OUR COURSES //{' '}
//                     </h2>
//                     //{' '}
//                     <section className='mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8'>
//                         //{' '}
//                         <article className='bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200'>
//                             //{' '}
//                             <div className='relative w-full h-80 md:h-64 lg:h-44'>
//                                 //{' '}
//                                 <img
//                                     src='https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg'
//                                     alt='Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
//                                     className='w-full h-full object-center object-cover'
//                                 ></img>
//                             </div>
//                             <div className='px-3 py-4'>
//                                 <h3 className='text-sm text-gray-500 pb-2'>
//                                     <a
//                                         className='bg-indigo-600 py-1 px-2 text-white rounded-lg'
//                                         href='#'
//                                     >
//                                         <span className='absolute inset-0'></span>
//                                         Basic Level
//                                     </a>
//                                 </h3>
//                                 <p className='text-base font-semibold text-gray-900 group-hover:text-indigo-600'>
//                                     Lorem Ipsum is simply dummy text of the
//                                     printing and typesetting industry.
//                                 </p>
//                             </div>
//                         </article>
//                         <article className='bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200'>
//                             <div className='relative w-full h-80 md:h-64 lg:h-44'>
//                                 <img
//                                     src='https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg.jpg'
//                                     alt='Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
//                                     className='w-full h-full object-center object-cover'
//                                 ></img>
//                             </div>
//                             <div className='px-3 py-4'>
//                                 <h3 className='text-sm text-gray-500 pb-2'>
//                                     <a
//                                         className='bg-indigo-600 py-1 px-2 text-white rounded-lg'
//                                         href='#'
//                                     >
//                                         <span className='absolute inset-0'></span>
//                                         Basic Level
//                                     </a>
//                                 </h3>
//                                 <p className='text-base font-semibold text-gray-900 group-hover:text-indigo-600'>
//                                     Lorem Ipsum is simply dummy text of the
//                                     printing and typesetting industry.
//                                 </p>
//                             </div>
//                         </article>
//                         <article className='bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200'>
//                             <div className='relative w-full h-80 md:h-64 lg:h-44'>
//                                 <img
//                                     src='https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg'
//                                     alt='Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
//                                     className='w-full h-full object-center object-cover'
//                                 ></img>
//                             </div>
//                             <div className='px-3 py-4'>
//                                 <h3 className='text-sm text-gray-500 pb-2'>
//                                     <a
//                                         className='bg-indigo-600 py-1 px-2 text-white rounded-lg'
//                                         href='#'
//                                     >
//                                         <span className='absolute inset-0'></span>
//                                         Intermediate Level
//                                     </a>
//                                 </h3>
//                                 <p className='text-base font-semibold text-gray-900 group-hover:text-indigo-600'>
//                                     Lorem Ipsum is simply dummy text of the
//                                     printing and typesetting industry.
//                                 </p>
//                             </div>
//                         </article>
//                         <article className='bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200'>
//                             <div className='relative w-full h-80 md:h-64 lg:h-44'>
//                                 <img
//                                     src='https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg'
//                                     alt='Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
//                                     className='w-full h-full object-center object-cover'
//                                 ></img>
//                             </div>
//                             <div className='px-3 py-4'>
//                                 <h3 className='text-sm text-gray-500 pb-2'>
//                                     <a
//                                         className='bg-indigo-600 py-1 px-2 text-white rounded-lg'
//                                         href='#'
//                                     >
//                                         <span className='absolute inset-0'></span>
//                                         Advanced Level
//                                     </a>
//                                 </h3>
//                                 <p className='text-base font-semibold text-gray-900 group-hover:text-indigo-600'>
//                                     Lorem Ipsum is simply dummy text of the
//                                     printing and typesetting industry.
//                                 </p>
//                             </div>
//                         </article>
//                     </section>
//                 </article>
//             </section>
//             ;
//         </div>
//     );
// };
import React from 'react';

export default function Orders() {
    return <div>Orders</div>;
}
