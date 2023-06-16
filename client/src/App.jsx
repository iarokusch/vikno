import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Paticipation from './components/Paticipation';
import About from './components/About';
import Catalog from './components/Catalog.jsx';
import Shop from './components/Schop';
import Users from './components/Users';
import Register from './components/Registration';
import ArtistRegistr from './components/ArtistRegistr';
import ItemRegister from './components/ItemRegister';
import Profile from './components/Profile';
import ArtistPage from './components/ArtistPage';
import Orders from './components/Orders';
import Press from './components/Press';
import Contact from './components/Contact';
import { Home } from './components/Home';
import Menu from './components/Menu';
import Items from './components/Items';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import FullItem from './components/FullItem';
import ChangeItemData from './components/ChangeItemData';
function App() {
    const location = useLocation();

    const shouldRenderMenu = !location.pathname.startsWith('/artists');

    return (
        <>
            {shouldRenderMenu && <Menu />}

            <Routes>
                <Route path='/items' element={<Items />} />
                <Route path='/artists/:id' element={<ArtistPage />} />
                {/* <Route path='/items/:id' element={<Items />} /> */}
                <Route path='/' element={<Home />} />
                <Route path='/navbar' element={<NavBar />} />
                <Route path='/participation' element={<Paticipation />} />
                <Route path='/about' element={<About />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/users' element={<Users />} />
                <Route path='/users/newuser' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/itemregister' element={<ItemRegister />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/artistregister' element={<ArtistRegistr />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/press' element={<Press />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                <Route path='/fullitem' element={<FullItem />} />
                <Route path='/fullitem/:id' element={<FullItem />} />
                <Route path='/shop/:id' element={<FullItem />} />
                <Route path='/changeuserdata' element={<ChangeItemData />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
