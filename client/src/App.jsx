import './App.css';
import { useEffect } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Catalog from './components/Catalog.jsx';
import Shop from './components/Schop';
import Users from './components/Users';
import Register from './components/Registration';
// import ArtistRegistr from './components/ArtistRegistr';
// import ItemRegister from './components/ItemRegister';
import Profile from './components/Profile';
// import ArtistPage from './components/ArtistPage';
import Orders from './components/Orders';
import Press from './components/Press';
import Contact from './components/Contact';
import { Home } from './components/Home';
import Menu from './components/Menu';
import Items from './components/Items';
import Cart from './components/Cart';

import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import FullItem from './components/FullItem';

// import ChangeItemData from './components/ChangeItemData';

function App() {
    const location = useLocation();

    const shouldRenderMenu = !location.pathname.startsWith('/artists');

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

    return (
        <>
            {shouldRenderMenu && <Menu />}

            <Routes>
                <Route path='/items' element={<Items />} />
                {/* <Route path='/artists/:id' element={<ArtistPage />} /> */}

                <Route path='/' element={<Home />} />
                {/* <Route path='/artispage' element={<ArtistPage />} /> */}
                <Route path='/about' element={<About />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/users' element={<Users />} />
                <Route path='/users/newuser' element={<Register />} />
                <Route path='/login' element={<Login />} />
                {/* <Route path='/itemregister' element={<ItemRegister />} /> */}
                <Route path='/profile' element={<Profile />} />
                {/* <Route path='/artistregister' element={<ArtistRegistr />} /> */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/press' element={<Press />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                <Route path='/fullitem' element={<FullItem />} />
                <Route path='/fullitem/:id' element={<FullItem />} />
                <Route path='/shop/:id' element={<FullItem />} />
                {/* <Route path='/changeitemdata' element={<ChangeItemData />} /> */}
                {/* <Route path='/changeuserdata' element={<ChangeUserData />} /> */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
