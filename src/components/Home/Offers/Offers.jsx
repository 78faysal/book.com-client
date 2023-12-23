import { MdFamilyRestroom, MdOutlineLocalOffer, MdOutlineApproval } from "react-icons/md";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { PiShareNetwork } from "react-icons/pi";
import { BiSolidDiscount } from "react-icons/bi";
import { Link } from "react-router-dom";


const Offers = () => {
    return (
        <div className="md:mx-20 my-20">
            <h2 className="text-3xl font-semibold text-center mb-5">Best Offers</h2>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="card bg-base-200 shadow-xl text-primary-content">
                    <div className="card-body text-center space-y-2">
                        <MdFamilyRestroom className="text-6xl mx-auto text-gray-700" />
                        <h2 className="font-semibold text-2xl text-center">Family Fun Package</h2>
                        <p>Create unforgettable family moments with our Family Fun Package. Plan your family escape today.</p>
                        <p className="flex items-center justify-center gap-3"><MdOutlineLocalOffer className="text-xl" />Kids Eat Free</p>
                        <p className="flex items-center justify-center gap-3"><MdOutlineApproval className="text-xl" />Explore nearby attractions</p>
                        <p className="flex items-center justify-center gap-3"><AiOutlineMedicineBox className="text-xl" />Free treatment support</p>
                        <Link to='/rooms' className="underline">Buy Now</Link>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl text-primary-content">
                    <div className="card-body text-center space-y-2">
                    <PiShareNetwork className="text-6xl mx-auto text-gray-700" />
                        <h2 className="font-semibold text-2xl text-center">Weekend Getaway</h2>
                        <p>Make your weekends extraordinary with our Weekend Getaway package.</p>
                        <p className="flex items-center justify-center gap-3"><MdOutlineLocalOffer className="text-xl" />Kids Eat Free</p>
                        <p className="flex items-center justify-center gap-3"><MdOutlineApproval className="text-xl" />Explore nearby attractions</p>
                        <p className="flex items-center justify-center gap-3"><AiOutlineMedicineBox className="text-xl" />Free treatment support</p>
                        <Link to='/rooms' className="underline">Buy Now</Link>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl text-primary-content">
                    <div className="card-body text-center space-y-2">
                        <BiSolidDiscount className="text-6xl mx-auto  text-gray-700" />
                        <h2 className="font-semibold text-2xl text-center">Advance Booking Discount</h2>
                        <p>Plan ahead and unlock exclusive savings with our Advance Booking Discount.</p>
                        <p className="flex items-center justify-center gap-3"><MdOutlineLocalOffer className="text-xl" />Kids Eat Free</p>
                        <p className="flex items-center justify-center gap-3"><MdOutlineApproval className="text-xl" />Explore nearby attractions</p>
                        <p className="flex items-center justify-center gap-3"><AiOutlineMedicineBox className="text-xl" />Free treatment support</p>
                        <Link to='/rooms' className="underline">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;