import "./Banner.scss";
import bannerImg from '../../../assets/banner-img.png'

const Banner = () => {
    return (
        <section className="banner_section">
            <div className="container">
                <div className="cont_left">
                    <h1>SALES</h1>
                    <p>
                    Discover a world of pure sound with our premium headphones, designed to take your music to new heights.
                    </p>
                    <div className="cont_button">
                        <button className="btn btn-1">Read More</button>
                        <button className="btn">Shop Now</button>
                    </div>
                </div>
                <div className="cont_right">
                    {/* <img src={bannerImg} alt="" /> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;
