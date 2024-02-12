// LogoutComponent.js
import { useContext, useEffect } from 'react';
import { MyContext } from '../context/context.js';
const Logout = () => {
    const { setUser, setArtists, setIsLoggedIn } = useContext(MyContext);
    useEffect(() => {
        const handleLogout = () => {
            // Clear user data from local storage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setArtists(false);
            // Clear user data from context
            setUser(null);
            setIsLoggedIn(false);
            // Redirect to the login page or any desired page

            Logout();
        };

        window.addEventListener('beforeunload', handleLogout);

        return () => {
            window.removeEventListener('beforeunload', handleLogout);
        };
    }, []);

    return null;
};

export default Logout;
