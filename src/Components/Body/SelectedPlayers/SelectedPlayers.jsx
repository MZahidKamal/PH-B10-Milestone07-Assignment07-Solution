import './SelectedPlayers.css';
import Selection from "./Selection/Selection.jsx";
import PropTypes from "prop-types";


const SelectedPlayers = (props) => {


    /*===== RECEIVING PROPS AND DESTRUCTURING THEM  =====*/
    const {handleActiveTabToggling, selectedPlayers, removeSelectedPlayer} = props;


    /*===== RETURNING FINAL COMPONENT =====*/
    return (
        <div className={'flex flex-col gap-y-3'}>
            {
                selectedPlayers.map((selectedPlayer, index) => {
                    return <Selection key={index}
                                      selectedPlayer={selectedPlayer}
                                      removeSelectedPlayer={removeSelectedPlayer}></Selection>
                })
            }
            <div className={'flex mt-10'}>
                <div
                    className={'add-more-button-container'}>
                    <button onClick={() => handleActiveTabToggling('Available')}
                            className={'add-more-button'}>Add More Player
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayers;


/*===== DOING PROPS VALIDATION =====*/
SelectedPlayers.propTypes = {
    handleActiveTabToggling: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeSelectedPlayer: PropTypes.func.isRequired,
}
