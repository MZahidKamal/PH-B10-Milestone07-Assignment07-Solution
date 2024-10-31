import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import Body from "./Components/Body/Body.jsx";
import Newsletter from "./Components/Newsletter/Newsletter.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {useEffect, useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


    /*===== NECESSARY USER-STATE HOOKS FOR STATE UPDATES  =====*/
    const [wallet, setWallet] = useState(0);
    const [players, setPlayers] = useState([]);


    /*===== GENERAL FUNCTION FOR LOGIC IMPLEMENTATION  =====*/
    const handleCoinWallet = () => {
        setWallet(wallet + 10000000);
        toast.success(`Successfully added 10000000 coins in your wallet, against your claim.`);
    }


    /*===== NECESSARY USE-EFFECT HOOK FOR DATA FETCHING FROM API  =====*/
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MZahidKamal/BD-Cricket-Players/refs/heads/main/BD-Cricket-Players.json')
            .then(response => response.json())
            .then(dataArray => setPlayers(dataArray))
    }, []);


    /*===== RETURNING FINAL COMPONENT =====*/
    return (
        <>
            <Navbar wallet={wallet}></Navbar>
            <Banner handleCoinWallet={handleCoinWallet}></Banner>
            <Body wallet={wallet} setWallet={setWallet} players={players}></Body>
            <Newsletter></Newsletter>
            <Footer></Footer>

            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false}
                            closeOnClick rtl={false} pauseOnFocusLoss draggable={false} pauseOnHover/>
        </>
    )
}

export default App
