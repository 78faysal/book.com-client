import { useLoaderData } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import moment from 'moment';
import DatePicker from "react-date-picker";


// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const RoomDetail = () => {
    const roomData = useLoaderData();
    const { user } = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = useState('');
    const { type, description, image, price, reviews, size, offer, booked } = roomData;
    // console.log(moment().format("dddd, MMMM Do, YYYY"));
    const [value, onChange] = useState(new Date());

    const handleDate = e => {
        const dateValue = e.target.value;
    }
    useEffect(() => {

    }, [])

    const bookingData = {
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
        <div>
            <div className="card lg:card-side gap-10 my-20 mx-20">
                <figure><img src={image} alt="Album" /></figure>
                <div className=" flex items-center">
                    <div className="space-y-3">
                        <h2 className="card-title text-3xl">{type}</h2>
                        <p><span className="text-lg font-semibold">Description:</span>{description}</p>
                        <p><span className="text-lg font-semibold">Size:</span> {size}</p>
                        <p className=" flex items-center gap-2"><span className="text-lg font-semibold text-gray-800"><MdOutlineLocalOffer /> </span>{offer ? 'Available' : 'Not Available'}</p>
                        <p><span className="text-lg font-semibold">Reviews:</span> {reviews.length}</p>
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
        </div>
    );
};

export default RoomDetail;