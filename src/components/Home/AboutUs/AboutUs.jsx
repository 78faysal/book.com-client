import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
const AboutUs = () => {

    return (
        <div className="grid gap-10 md:grid-cols-2 items-center mx-20 my-20">
            <div>
                <img className="" src="https://i.ibb.co/Mc2dpYT/hotel.jpg" alt="" />
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">About Us</h2>
                <h1 className="text-4xl font-semibold">Rooms & Beyond: Your Gateway to Exceptional Stays</h1>
                <p>Welcome to our hospitality haven where every stay is a story, and comfort meets luxury. Immerse yourself in unparalleled experiences with our meticulously curated rooms and personalized service. Your journey to exceptional stays begins here.</p>
                <div className="flex text-3xl gap-10">
                    <FaFacebook className="hover:text-blue-700 transition-transform duration-300 transform hover:scale-110" /> <FaYoutube className="hover:text-red-700 transition-transform duration-300 transform hover:scale-110" /> <FaInstagram className="hover:text-rose-600 transition-transform duration-300 transform hover:scale-110" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;