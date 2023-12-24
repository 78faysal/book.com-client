import axios from "axios";
import { useEffect, useState } from "react";
import { MdZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get('https://book-com-server.vercel.app/rooms')
            .then(res => {
                const mapedImages = res.data.map(data => data.image)
                setImages(mapedImages)
            })
    }, [])
    return (
        <div className="md:mx-20 my-10 mb-20">
            <h2 className="text-4xl font-semibold text-center mb-5">Image Gallery</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    images.slice(0, 6).map((image, idx) => <Link key={idx} to={'/rooms'}>
                        <div className="relative group">
                            <img className="w-full hover:brightness-50 transition-transform duration-300 transform group-hover:scale-110" src={image}></img>
                            <MdZoomOutMap className="hidden group-hover:block absolute transition-transform duration-300 transform group-hover:scale-110 top-1/2 left-1/2 text-white text-2xl" />
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default ImageGallery;