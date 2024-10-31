import './AvailablePlayers.css';
import Player from "./Player/Player.jsx";
import PropTypes from "prop-types";


const AvailablePlayers = (props) => {


    /*===== RECEIVING PROPS AND DESTRUCTURING THEM  =====*/
    const {players, handleSelectedPlayers} = props;


    /*===== RETURNING FINAL COMPONENT =====*/
    return (
        <div className={'grid grid-cols-3 gap-12'}>
            {
                players.map((player, index) => {
                    return <Player key={index} player={player} handleSelectedPlayers={handleSelectedPlayers}></Player>
                })
            }
        </div>
    );
};

export default AvailablePlayers;


/*===== DOING PROPS VALIDATION =====*/
AvailablePlayers.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleSelectedPlayers: PropTypes.func.isRequired,
}
