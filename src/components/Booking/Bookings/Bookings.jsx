import { Link, useLoaderData } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";

const Bookings = () => {
    // const allBookings = useLoaderData();
    const { user } = useContext(AuthContext);
    // const [bookings, setBookings] = useState(allBookings);
    const [booking, setBooking] = useState([]);
    const [currentBooking, setCurrentBooking] = useState(null);
    const [rooms, setRooms] = useState([]);

    // const {user} = useContext(AuthContext);

    useEffect(() => {
        axios.get(`https://book-com-server.vercel.app/bookings?email=${user.email}`, { withCredentials: true })
            .then(res => {
                setBooking(res.data)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://book-com-server.vercel.app/rooms`)
            .then(res => {
                setRooms(res.data);
            })
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://book-com-server.vercel.app/bookings/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted Successfully!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                const result = booking.filter(booking => booking._id !== id);
                                setBooking(result);
                            }
                        })
                }
            });
    }

    const handleCancel = booking => {
        const currentTime = moment();
        const bookingTime = moment(booking.time, "MMMM Do, YYYY")
        const daysDifference = bookingTime.diff(currentTime, 'days');
        if (daysDifference >= 1) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Cancel it!"
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        axios.put(`https://book-com-server.vercel.app/rooms/${booking._id}`, {booked: false})
                            .then(res => {
                                if (res.data.modifiedCount > 0) {
                                    Swal.fire({
                                        title: "Item Canceled",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });
                                    const result = booking.filter(book => book._id !== booking._id);
                                    setBooking(result);
                                }
                            })
                    }
                });

        }
        else {
            Swal.fire({
                title: "Can't Cancel",
                text: "Item can be cancel minimum 1 day ago",
                icon: "warning"
            });
        }
    }

    const handleAddReview = (booking) => {
        document.getElementById('my_modal_1').showModal();
        setCurrentBooking(booking)
    }


    const handleReviewSubmit = e => {
        e.preventDefault();

        const rating = parseFloat(e.target.rating.value);
        const reviewMessage = e.target.review.value;
        const name = e.target.name.value;

        const review = {
            username: name,
            email: user?.email,
            rating,
            reviewMessage,
            timestamp: currentBooking.time
        }
        // room._id === currentBooking?._id
        const targetedRoom = rooms.find(room => room._id == currentBooking._id);
        console.log(review);


        axios.put(`https://book-com-server.vercel.app/rooms/${targetedRoom?._id}`, {review: review})
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Review Added",
                        text: "Thanks for the review, hope you will always with us",
                        icon: "success",
                        appendTo: '.modal'
                    });
                }
            })
            .catch(err => console.log(err))
    }

    // if (bookings.length < 1) {
    //     return <div className="min-h-screen flex items-center justify-center text-3xl font-semibold"><h2>No Data avaiable</h2></div>
    // }

    return (
        <div className="my-10 md:mx-20">
            <h2 className="text-2xl font-semibold text-center mb-5">Your Bookings</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Action</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>

                        {booking.map(booking => <tr key={booking._id}>
                            <th>

                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask  w-20 h-20">
                                            <img src={booking.image} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{booking.type}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="flex items-center gap-5 mt-7">
                                {booking.time} <Link to={`/updateBooking/${booking._id}`} className="text-2xl">
                                    <FaEdit />
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handleAddReview(booking)} className="btn btn-sm">Add Review</button>

                            </td>
                            <td>
                                <div className="flex gap-5 items-center">
                                    <button onClick={() => handleCancel(booking)} className="btn btn-ghost btn-sm">Cancel</button>
                                    <button onClick={() => handleDelete(booking._id)} className="btn btn-sm">Delete</button>
                                </div>
                            </td>
                            {/* <th>
                                <button className="btn">Add Review</button> onClick={()=>
                            </th> */}
                        </tr>)}
                    </tbody>

                </table>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
                <div className="modal-box">
                    <h2 className="text-2xl font-semibold text-center mt-3">{currentBooking?.type}</h2>
                    <form className="card-body" onSubmit={handleReviewSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" min="0" name="rating" max="5" step="any" placeholder="ratings out of 5?" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea name="review" className="textarea textarea-bordered" placeholder="Write your review" required></textarea>
                        </div>
                        <div className="flex flex-row-reverse items-center gap-5 justify-center">
                            <div>
                                <button className="btn btn-primary">Submit Review</button>
                            </div>
                            <div className="modal-action">
                                <div method="dialog">
                                    <button  onClick={() => document.getElementById('my_modal_1').close()} className="btn mb-6">Close</button>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* <div className="form-control mt-6">
                        </div> */}
                </div>
            </dialog>


        </div>
    );
};

export default Bookings;