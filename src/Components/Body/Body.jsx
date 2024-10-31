import './Body.css';
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers.jsx";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers.jsx";
import PropTypes from "prop-types";
import {useState} from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Body = (props) => {


    /*===== RECEIVING PROPS AND DESTRUCTURING THEM  =====*/
    const {wallet, setWallet, players} = props;


    /*===== NECESSARY USER-STATE HOOKS FOR STATE UPDATES  =====*/
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [activeTab, setActiveTab] = useState({
        availablePlayers: true,
        selectedPlayers: false,
    })


    /*===== GENERAL FUNCTION FOR LOGIC IMPLEMENTATION  =====*/
    const handleActiveTabToggling = (buttonText) => {
        if (buttonText === 'Available') {
            setActiveTab({...activeTab, availablePlayers: true, selectedPlayers: false,})
        } else if (buttonText === 'Selected') {
            setActiveTab({...activeTab, availablePlayers: false, selectedPlayers: true,})
        }
    }


    /*===== GENERAL FUNCTION FOR LOGIC IMPLEMENTATION  =====*/
    const handleSelectedPlayers = (playerObj) => {
        if (selectedPlayers.length >= 6) {
            return toast.warning('Player squad if full. Remove someone to add new player.');
        }
        if (playerObj.valuation > wallet) {
            return toast.error('You do not have enough coin to get this player. Claim free coins and try again.');
        }
        if (selectedPlayers.includes(playerObj)) {
            return toast.warning('You already have this player in your squad. Choose another player.');
        }
        setSelectedPlayers([...selectedPlayers, playerObj]);
        setWallet(wallet - playerObj.valuation);
        return toast.success(`You have successfully added ${playerObj.name} in your squad.`);
    }


    /*===== GENERAL FUNCTION FOR LOGIC IMPLEMENTATION  =====*/
    const removeSelectedPlayer = (playerObj) => {
        let updatedArray = selectedPlayers.filter(player => player.id !== playerObj.id);
        setSelectedPlayers([...updatedArray]);
        setWallet(wallet + playerObj.valuation);
        return toast.success(`You have successfully removed ${playerObj.name} from your squad.`);
    }


    /*===== RETURNING FINAL COMPONENT =====*/
    return (
        <div className={'body-container-1'}>
            <div className={'body-container-2'}>

                <h1 className={'body-title'}>
                    {activeTab.availablePlayers ?
                        `Available Players  ${players.length - selectedPlayers.length}`
                        : `Selected Players ${selectedPlayers.length}/6`}
                </h1>
                <div>
                    <button onClick={() => handleActiveTabToggling('Available')}
                            className={activeTab.availablePlayers ?
                                'available-tab-active' : 'available-tab-default'}>Available
                    </button>
                    <button onClick={() => handleActiveTabToggling('Selected')}
                            className={activeTab.selectedPlayers ?
                                'selected-tab-active' : 'selected-tab-default'}>Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
            {activeTab.availablePlayers ?
                <AvailablePlayers players={players}
                                  handleSelectedPlayers={handleSelectedPlayers}></AvailablePlayers> : ''}
            {activeTab.selectedPlayers ?
                <SelectedPlayers handleActiveTabToggling={handleActiveTabToggling}
                                 selectedPlayers={selectedPlayers}
                                 removeSelectedPlayer={removeSelectedPlayer}></SelectedPlayers> : ''}
        </div>
    );
};

export default Body;


/*===== DOING PROPS VALIDATION =====*/
Body.propTypes = {
    wallet: PropTypes.number.isRequired,
    setWallet: PropTypes.func.isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
}
