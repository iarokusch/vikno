import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const [fileData, setFiledata] = useState({
        url: '',
        file: null,
    });
    const handleImageChange = (e) => {
        console.log(
            ':rocket: ~ handleImageChange ~ e',
            e.currentTarget.files[0]
        );
        setFiledata({
            url: URL.createObjectURL(e.currentTarget.files[0]),
            file: e.currentTarget.files[0],
        });
    };
    const registerUser = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        // const user = {
        //     firstName: e.target.firstName.value,
        //     lastName: e.target.lastName.value,
        //     email: e.target.email.value,
        //     password: e.target.password.value,
        //     // profileImage: e.target.profileImage.value,
        // };

        axios
            .post('/users/newuser', data)
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data);
                    // navigate user to login page
                    navigate('/login');
                } else {
                    setError(res.data.message[0].undefined);
                    alert(res.data.message[0].undefined);
                    // setErr({ ...err, ...response.data.message[0] });
                    /*  setTimeout( ()=>{
          setErr({firstName:"", lastName:"", email:"",password:""})
        },2000) */
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
            <div className='flex min-h-full  flex-1 flex-col justify-center mt-[50px] px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-2xl  leading-9 tracking-tight text-gray-900'>
                        Register form
                    </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form
                        className='space-y-6'
                        onSubmit={registerUser}
                        encType='multi-part/formdata'
                    >
                        <div>
                            <label
                                htmlFor='firstName'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                First Name
                                <span className='text-red-500'>*</span>
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='firstName'
                                    name='firstName'
                                    type='firstName'
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor='lastName'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Last Name<span className='text-red-500'>*</span>
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='lastName'
                                    name='lastName'
                                    type='lastName'
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor='email'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Email address
                                <span className='text-red-500'>*</span>
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor='password'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Password
                                <span className='text-red-500'>*</span>
                            </label>

                            <div className='mt-2'>
                                <input
                                    id='password'
                                    name='password'
                                    type='password'
                                    autoComplete='current-password'
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>
                        <div>
                            <div className='col-span-full'>
                                <label
                                    htmlFor='photo'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Photo
                                </label>
                                <div className='mt-2 flex items-center gap-x-3'>
                                    <label className='cursor-pointer'>
                                        Select your profile image
                                        <input
                                            name='profile_img'
                                            type='file'
                                            className='hidden'
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                    <img
                                        className='w-[300px] h-[300px] rounded-md object-cover'
                                        src={fileData.url}
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <button
                                type='submit'
                                className='flex  justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm bg-yellow-300 hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                                send form
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Register() {
//     const navigate = useNavigate();
//     // const [err, setErr] = useState({
//     //     firstName: '',
//     //     lastName: '',
//     //     email: '',
//     //     password: '',
//     // });
//     const [error, setError] = useState('');
//     const registerUser = (e) => {
//         e.preventDefault();
//         /* const data = new FormData(e.target) */
//         const user = {
//             firstName: e.target.firstName.value,
//             lastName: e.target.lastName.value,
//             email: e.target.email.value,
//             password: e.target.password.value,
//         };

//         axios
//             .post('/users/newuser', JSON.stringify(user), {
//                 headers: { 'Content-Type': 'application/json' },
//             })
//             .then((res) => {
//                 if (res.data.success) {
//                     console.log(res.data);
//                     // navigate user to login page
//                     navigate('/login');
//                 } else {
//                     setError(res.data.msg);
//                     // setErr({ ...err, ...response.data.message[0] });
//                     /*  setTimeout( ()=>{
//           setErr({firstName:"", lastName:"", email:"",password:""})
//         },2000) */
//                 }
//             });
//     };
//     return (
//         <div>
//             <h1>Register</h1>
//             {error && <p>{error}</p>}
//             <form onSubmit={registerUser}>
//                 {/* {err.firstName &&
//                 (
//                     <p style={{ border: '2px solid red' }}> {err.firstName} </p>
//                 )} */}
//                 <label htmlFor=''>
//                     First Name <input type='text' name='firstName' />
//                 </label>
//                 <br />
//                 {/* {err.lastName && (
//                     <p style={{ border: '2px solid red' }}> {err.lastName} </p>
//                 )} */}
//                 <label htmlFor=''>
//                     Last Name <input type='text' name='lastName' />
//                 </label>
//                 <br />
//                 {/* {err.email && (
//                     <p style={{ border: '2px solid red' }}> {err.email} </p>
//                 )} */}
//                 <label htmlFor=''>
//                     Email <input type='email' name='email' />
//                 </label>
//                 <br />
//                 {/* {err.password && (
//                     <p style={{ border: '2px solid red' }}> {err.password} </p>
//                 )} */}
//                 <label htmlFor=''>
//                     Password{' '}
//                     <input
//                         // onFocus={() => setErr({ ...err, password: '' })}
//                         type='password'
//                         name='password'
//                     />
//                 </label>
//                 <br />
//                 <button>Register</button>
//             </form>
//         </div>
//     );
// }
