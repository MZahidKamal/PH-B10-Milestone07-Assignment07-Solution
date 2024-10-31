import './Player.css';
import PropTypes from "prop-types";


const Player = (props) => {


    /*===== RECEIVING PROPS AND DESTRUCTURING THEM  =====*/
    const {player, handleSelectedPlayers} = props
    const {
        //id,
        name,
        image,
        country,
        allRounder,
        gameFormat,
        handedness,
        rating,
        valuation
    } = player;


    /*===== RETURNING FINAL COMPONENT =====*/
    return (
        <div
            className={'player-card'}>
            <img src={image} alt="player_image" className={'rounded-xl h-72'}/>
            <div className={'flex items-center gap-4'}>
                <img src="/images/user.png" alt="user_icon"/>
                <h3 className={'text-2xl font-semibold'}>{name}</h3>
            </div>
            <div className={'flex justify-between items-center'}>
                <div className={'flex items-center gap-4'}>
                    <img src="/images/flag.png" alt="flag_icon"/>
                    <p>{country}</p>
                </div>
                <div className={'player-all-rounder'}>{allRounder ? 'All-Rounder' : 'not All-Rounder'}</div>
            </div>
            <hr className={'border'}/>
            <h5 className={'text-lg font-bold'}>Rating ⭐ {rating}</h5>
            <div className={'flex justify-between items-center'}>
                <h5 className={'text-lg font-bold'}>{handedness}-Hand-Bat</h5>
                <h5>{gameFormat}</h5>
            </div>
            <div className={'flex justify-between items-center'}>
                <h5 className={'text-lg font-bold'}>Valuation: {valuation} BDT</h5>
                <button className={'player-choose-button'}>
                    <p onClick={() => handleSelectedPlayers(player)}
                       className={'player-choose-button-text'}>Choose Player</p>
                </button>
            </div>
        </div>
    );
};

export default Player;


/*===== DOING PROPS VALIDATION =====*/
Player.propTypes = {
    player: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        allRounder: PropTypes.bool.isRequired,
        gameFormat: PropTypes.string.isRequired,
        handedness: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        valuation: PropTypes.number.isRequired,
    }).isRequired,
    handleSelectedPlayers: PropTypes.func.isRequired,
}
