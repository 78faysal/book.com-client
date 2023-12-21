import { useLoaderData } from "react-router-dom";
import moment from 'moment';

const Bookings = () => {
    const bookings = useLoaderData();
    return (
        <div className="my-10 mx-20">
            <h2 className="text-2xl font-semibold text-center mb-5">Bookings</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {bookings.map(booking => <tr key={booking._id}>
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
                                {moment().format("dddd, MMMM Do, YYYY")}
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
        </div>
    );
};

export default Bookings;