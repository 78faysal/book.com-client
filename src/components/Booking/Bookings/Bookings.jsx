import { Link, useLoaderData } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import moment from "moment";

const Bookings = () => {
    const allBookings = useLoaderData();
    const [bookings, setBookings] = useState(allBookings);

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
                    fetch(`http://localhost:5000/bookings/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted Successfully!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                const result = bookings.filter(booking => booking._id !== id);
                                setBookings(result);
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
                        fetch(`http://localhost:5000/bookings/${booking._id}`, {
                            method: "DELETE"
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount > 0) {
                                    Swal.fire({
                                        title: "Item Canceled",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });
                                    const result = bookings.filter(book => book._id !== booking._id);
                                    setBookings(result);
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

    if (bookings.length < 1) {
        return <div className="min-h-screen flex items-center justify-center text-3xl font-semibold"><h2>No Data avaiable</h2></div>
    }

    return (
        <div className="my-10 md:mx-20">
            <h2 className="text-2xl font-semibold text-center mb-5">Bookings</h2>
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
                        </tr>
                    </thead>
                    <tbody>

                        {bookings.map(booking => <tr key={booking._id}>
                            <th>
                                <Link to={`/updateBooking/${booking._id}`} className="text-2xl">
                                    <FaEdit />
                                </Link>
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
                            <td>
                                {booking.time}
                            </td>
                            <td>
                                <div className="flex gap-5 items-center">
                                    <button onClick={() => handleCancel(booking)} className="btn btn-ghost btn-sm">Cancel</button>
                                    <button onClick={() => handleDelete(booking._id)} className="btn btn-sm">Delete</button>
                                </div>
                            </td>
                            <th>
                            </th>
                        </tr>)}
                    </tbody>

                </table>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <img  alt="" />
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog> */}


        </div>
    );
};

export default Bookings;