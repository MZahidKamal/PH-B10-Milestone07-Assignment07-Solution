import './Newsletter.css';


const Newsletter = () => {


    /*===== RETURNING FINAL COMPONENT =====*/
    return (
        <div className={'newsletter-container-1'}>
            <div className={'newsletter-container-2'}>
                <h1 className={'newsletter-title'}>Subscribe to our Newsletter</h1>
                <p className={'newsletter-description'}>Get the latest updates and news right in your inbox!</p>
                <div className={'flex gap-4'}>
                    <input type="email" className={'newsletter-email-input'} placeholder={'Enter your email'}/>
                    <button className={'newsletter-subscribe-button'}>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
