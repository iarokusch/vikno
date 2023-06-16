import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function ChangeUserData() {
    const location = useLocation();
    const user = location.state;
    const navigate = useNavigate();

    // Access the data from the user object
    const {
        _id: userId,
        firstName: initialfirstName,
        lastName: initiallastName,
    } = user;

    // Define state variables for the form inputs
    const [firstName, setfirstName] = useState(initialfirstName);
    const [lastName, setlastName] = useState(initiallastName);

    // Change handlers for input fields
    const handlefirstNameChange = (e) => {
        setfirstName(e.target.value);
    };

    const handlelastNameChange = (e) => {
        setlastName(e.target.value);
    };

    // Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create an object with the updated data
        const updateduser = {
            firstName,
            lastName,
        };
        console.log(updateduser);
        try {
            // Send a PUT request to update the user
            const response = await axios.patch(
                `/users/${userId}`,
                updateduser,
                {
                    headers: { token: localStorage.getItem('token') },
                }
            );
            console.log(response.data);
            navigate('/catalog'); // Handle the response as needed
        } catch (error) {
            console.log(error); // Handle the error
        }
    };

    return (
        <div className='mt-[150px] mx-[12rem] min-h-[100vh]'>
            <div>
                <h2>Edit user</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='firstName'>firstName</label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            value={firstName}
                            onChange={handlefirstNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='lastName'>lastName</label>
                        <input
                            type='text'
                            id='lastName'
                            name='lastName'
                            value={lastName}
                            onChange={handlelastNameChange}
                        />
                    </div>

                    {/* Other form fields */}
                    {/* ... */}
                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    );
}
