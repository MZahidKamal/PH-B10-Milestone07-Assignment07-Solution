import './Navbar.css'
import PropTypes from "prop-types";


const Navbar = (props) => {


    /*===== RECEIVING PROPS AND DESTRUCTURING THEM  =====*/
    const {wallet} = props;


    /*===== RETURNING FINAL COMPONENT =====*/
    return (
        <nav className={'backdrop-blur-3xl sticky top-0 z-20'}>
            <div
                className={'container m-auto my-5 mt-8 flex justify-between items-center'}>
                <div>
                    <img src="/images/logo.png" alt=""/>
                </div>
                <div className={'flex items-center gap-x-8'}>
                    <div>
                        <ul className={'flex items-center gap-x-6'}>
                            <li className={'nav-menu-button'}>Home</li>
                            <li className={'nav-menu-button'}>Fixture</li>
                            <li className={'nav-menu-button'}>Teams</li>
                            <li className={'nav-menu-button'}>Schedules</li>
                        </ul>
                    </div>
                    <div
                        className={'nav-coin-container'}>
                        <h6 className={'text-lg font-bold'}>{wallet} Coin</h6>
                        <img src="/images/coin.png" alt="coin_image" className={'w-10'}/>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;


/*===== DOING PROPS VALIDATION =====*/
Navbar.propTypes = {
    wallet: PropTypes.number.isRequired,
}
