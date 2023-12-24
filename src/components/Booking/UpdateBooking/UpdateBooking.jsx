import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooking = () => {

    const booking = useLoaderData();
    // console.log(booking);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const time = e.target.date.value;

        const updatedData = {
            time: time
        }

        fetch(`https://book-com-server.vercel.app/bookings/${booking._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire("Updated Successfully!");
            }
        })
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col">
                    <h2 className="text-3xl font-semibold">Update Date</h2>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body p-3" onSubmit={handleFormSubmit}>
                            <img src={booking?.image} alt="" />
                            <h2 className="text-xl text-center font-semibold">{booking?.type}</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="text" name="date" placeholder="Date" defaultValue={booking?.time} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary mb-4">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBooking;