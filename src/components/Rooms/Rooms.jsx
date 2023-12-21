import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                setFilteredRooms(data);
                setRooms(data)
            })
    }, [])

    const handleFilter = e => {
        e.preventDefault();
        const filterValue = e.target.value;

        if (filterValue === 'all') {
            setFilteredRooms(rooms)
        }
        else if (filterValue === "regular") {
            const result = rooms.filter(room => room.price < 500);
            setFilteredRooms(result);
        }
        else if (filterValue === "silver") {
            const result = rooms.filter(room => room.price > 500 && room.price < 900);
            setFilteredRooms(result);
        }
        else if (filterValue === "premium") {
            const result = rooms.filter(room => room.price > 900);
            setFilteredRooms(result);
        }
    }

    return (
        <div className="md:px-20 my-10">
            <div className="my-5 flex items-center justify-between">
                <h2 className="text-3xl font-semibold">Our Rooms</h2>
                <div>
                    <select name={filteredRooms} onChange={handleFilter} id="" className="dropdown md:text-lg">
                        <option value="all">All</option>
                        <option value="regular">Regular</option>
                        <option value="silver">Silver</option>
                        <option value="premium">Premium</option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-10 ">
                {
                    filteredRooms.map((room, idx) => <Link key={idx} to={`/roomDetail/${room._id}`}>
                        <div className="relative group">
                            <img className="hover:brightness-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300" key={idx} src={room.image} alt="" />
                            <h2 className="text-2xl bg-gray-500 font-semibold  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity delay-150 ease-in-out hover:scale-100 duration-300 w-full text-center text-white">{room.type}</h2>
                            <p className="text-center">Reviews: {room?.reviews?.length}</p>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Rooms;