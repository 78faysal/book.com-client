import { useLoaderData } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import moment from 'moment';
import DatePicker from "react-date-picker";
import { TiStarFullOutline } from "react-icons/ti";


// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const RoomDetail = () => {
    const roomData = useLoaderData();
    const { user } = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = useState('');
    const { _id, type, description, image, price, reviews, size, offer, booked } = roomData;
    // console.log(moment().format("dddd, MMMM Do, YYYY"));
    const [value, onChange] = useState(new Date());

    const handleDate = e => {
        const dateValue = e.target.value;
    }
    useEffect(() => {

    }, [])

    const bookingData = {
        _id,
        type,
        description,
        image,
        price,
        reviews,
        size,
        offer,
        time: moment().format("YYYY-MMMM-D"),
        email: user?.email,
        booked: true
    };

    const handleBooking = () => {
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire("Congrats! You have booked the room");
                }
            })
    }
    return (
        <div className="md:py-20 py-10 md:px-20">
            <div className="card lg:card-side gap-10 mb-10">
                <figure><img src={image} alt="Album" /></figure>
                <div className=" flex items-center">
                    <div className="space-y-3">
                        <h2 className="card-title text-3xl">{type}</h2>
                        <p><span className="text-lg font-semibold">Description:</span>{description}</p>
                        <p><span className="text-lg font-semibold">Size:</span> {size}</p>
                        <p className=" flex items-center gap-2"><span className="text-lg font-semibold text-gray-800"><MdOutlineLocalOffer /> </span>{offer ? 'Available' : 'Not Available'}</p>
                        <p><span className="text-lg font-semibold">Reviews:</span> {reviews?.length}</p>
                        {/* <input aria-label="Date" onChange={handleDate} value={selectedDate} type="date" /> */}
                        <div>
                            <DatePicker onChange={onChange} value={value} />
                        </div>
                        <h2 className="text-2xl font-semibold">${price} <span className="text-lg">p/N</span></h2>
                        {
                            booked === true ? <button disabled className="btn btn-primary ">Booked</button> : <button onClick={handleBooking} className="btn btn-primary">Book Now</button>
                        }
                    </div>
                </div>
            </div>
            <div>
                {
                    roomData.reviews ? <h2 className="text-3xl font-semibold mb-3">Reviews {roomData?.reviews?.length}</h2> : <h2 className="text-3xl font-semibold mb-3">No Reviews Available</h2>
                }
                <div>
                    {
                        roomData?.reviews.map((review, idx) => <div key={idx} className="bg-white shadow-2xl rounded-xl">
                            <div className="p-5 mb-5">
                                <div className="flex items-center gap-10">
                                    <h2 className="text-xl font-semibold">{review?.username} </h2>
                                    <p className="flex items-center"><TiStarFullOutline className="text-2xl text-yellow-400" /> {review?.rating}</p>
                                </div>
                                <p>{review?.timestamp}</p>
                                <p className="mb-4">Mail: {review?.email}</p>
                                <p className="text-lg">{review?.reviewMessage}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;