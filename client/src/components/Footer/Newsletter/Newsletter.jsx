import "./Newsletter.scss";
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'
const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <h3 className="small_text">NewsLetter</h3>
                <h3 className="big_text">Sign up for updates and offers</h3>
                <div className="form">
                    <input type="text" placeholder="Email address" />
                    <button>Subscribe</button>
                </div>
                <div className="desc">Will be used in accordance in our privacy and policy</div>
                <div className="social_icons">
                    <div className="social_icon">
                        <FaFacebookF size={20}  />
                    </div>
                    <div className="social_icon">
                        <FaTwitter size={20}  />
                    </div>
                    <div className="social_icon">
                        <FaInstagram size={20}  />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
