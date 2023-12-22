import { Link, useLoaderData } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const Bookings = () => {
    const bookings = useLoaderData();

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
                                    <FaEdit/>
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
                                    <button className="btn btn-ghost btn-sm">Cancel</button>
                                    <button className="btn btn-sm">Delete</button>
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