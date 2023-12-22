
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen absolute left-0 top-0 z-0" style={{ backgroundImage: 'url(https://i.ibb.co/L9BfRKZ/hotel-Banner.jpg)', backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="font-semibold text-xl">RELAX & REJUVENATE</h2>
                        <h1 className="text-5xl md:text-7xl font-semibol">WHERE DREAMS <br />COME TRUE</h1>
                        <p className="font-semibold text-xl">Luxury space that you can afford</p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen"></div>
        </div>
    );
};

export default Banner;