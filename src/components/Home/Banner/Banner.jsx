
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen absolute left-0 top-0 z-0" style={{ backgroundImage: 'url(https://i.ibb.co/L9BfRKZ/hotel-Banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="min-h-screen"></div>
        </div>
    );
};

export default Banner;