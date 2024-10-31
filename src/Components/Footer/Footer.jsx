import './Footer.css';

const Footer = () => {


    /*===== RETURNING FINAL COMPONENT =====*/
    return (
        <footer className={'bg-black relative'}>
            <div className={'container m-auto'}>
                <div className={'footer-upper'}>
                    <img src="/images/logo-footer.png" alt="logo_footer" className={' mb-16'}/>
                    <div className={'grid grid-cols-3 gap-36'}>
                        <div className={'pr-10'}>
                            <h5 className={'footer-l-title'}>About Us</h5>
                            <p className={'footer-l-description'}>We are a passionate team dedicated to providing the
                                best services to our customers.</p>
                        </div>
                        <div className={'pl-14'}>
                            <h5 className={'footer-m-title'}>Quick Links</h5>
                            <ul className={'footer-m-ul'}>
                                <li className={'footer-m-li'}>Home</li>
                                <li className={'footer-m-li'}>Services</li>
                                <li className={'footer-m-li'}>About</li>
                                <li className={'footer-m-li'}>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className={'footer-r-title'}>Subscribe</h5>
                            <p className={'footer-r-description'}>Subscribe to our newsletter for latest updates.</p>
                            <div className={'flex mt-5'}>
                                <input type="email" className={'footer-r-input'} placeholder={'Enter your email'}/>
                                <button className={'footer-r-button'}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={'footer-divider'}/>
            <p className={'footer-lower-text'}>@2024 Your Company All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
