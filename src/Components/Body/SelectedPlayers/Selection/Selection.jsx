import './Selection.css';
import PropTypes from "prop-types";


const Selection = (props) => {


    /*===== RECEIVING PROPS AND DESTRUCTURING THEM  =====*/
    const {selectedPlayer, removeSelectedPlayer} = props;
    const {
        //id,
        name,
        image,
        //country,
        //allRounder,
        gameFormat,
        handedness,
        rating,
        valuation
    } = selectedPlayer;


    /*===== RETURNING FINAL COMPONENT =====*/
    return (
        <div className={'selection-card'}>
            <div className={'flex justify-start items-center gap-x-5'}>
                <img src={image} alt="player_picture" className={'w-20 h-20 rounded-lg'}/>
                <div>
                    <h3 className={'text-2xl font-semibold mb-1'}>{name}</h3>
                    <p className={'text-md text-gray-500'}>{handedness}-Hand-Bat, perfect for {gameFormat}, with rating
                        ⭐{rating} and bidding price is {valuation} BDT.</p>
                </div>
            </div>
            <div>
                <img src="/images/bin.png" alt="bin_icon"
                     onClick={() => removeSelectedPlayer(selectedPlayer)}
                     className={'cursor-pointer active:scale-105 transition transform duration-100'}/>
            </div>
        </div>
    );
};

export default Selection;


/*===== DOING PROPS VALIDATION =====*/
Selection.propTypes = {
    selectedPlayer: PropTypes.shape({
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
    removeSelectedPlayer: PropTypes.func.isRequired,
}
