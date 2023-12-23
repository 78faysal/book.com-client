import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ImageGallery from "../ImageGallery/ImageGallery";
import Offers from "../Offers/Offers";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <ImageGallery />
            <Testimonials />
            <Offers />
        </div>
    );
};

export default Home;