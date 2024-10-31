import './Banner.css'
import PropTypes from "prop-types";


const Banner = (props) => {


    /*===== RECEIVING PROPS AND DESTRUCTURING THEM  =====*/
    const {handleCoinWallet} = props;


    /*===== RETURNING FINAL COMPONENT =====*/
    return (
        <div className={'banner-container'}>
            <img src="/images/banner-main.png" alt="banner-main-image"/>
            <h1 className={'banner-title'}>Build Your Dream BPL Cricket Team</h1>
            <h6 className={'banner-description'}>Select your top players, manage your budget, and lead your fantasy
                cricket team to victory. Start creating your perfect lineup now and experience the thrill of team
                building!</h6>
            <div className={'banner-button-container'}>
                <button onClick={() => handleCoinWallet()} className={'banner-button'}>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;


/*===== DOING PROPS VALIDATION =====*/
Banner.propTypes = {
    handleCoinWallet: PropTypes.func.isRequired,
}
