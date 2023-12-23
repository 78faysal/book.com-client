import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
    const reviews = [
        {
            image: 'https://i.ibb.co/41YMp8X/member-2.jpg',
            name: 'Manus',
            rating: 4.5,
            message: 'Just a awesome environment',
            mail: 'ami@manus.com'
        },
        {
            image: 'https://i.ibb.co/41YMp8X/member-2.jpg',
            name: 'Manus',
            rating: 4.5,
            message: 'Just a awesome environment',
            mail: 'ami@manus.com'
        },
        {
            image: 'https://i.ibb.co/41YMp8X/member-2.jpg',
            name: 'Manus',
            rating: 4.5,
            message: 'Just a awesome environment',
            mail: 'ami@manus.com'
        },
        {
            image: 'https://i.ibb.co/41YMp8X/member-2.jpg',
            name: 'Manus',
            rating: 4.5,
            message: 'Just a awesome environment',
            mail: 'ami@manus.com'
        },
        {
            image: 'https://i.ibb.co/41YMp8X/member-2.jpg',
            name: 'Manus',
            rating: 4.5,
            message: 'Just a awesome environment',
            mail: 'ami@manus.com'
        },
        {
            image: 'https://i.ibb.co/41YMp8X/member-2.jpg',
            name: 'Manus',
            rating: 4.5,
            message: 'Just a awesome environment',
            mail: 'ami@manus.com'
        },
    ]
    return (
        <div>
            <div className="w-full absolute my-10 bg-base-200 py-10 min-h-screen md:px-20 pt-28">
                <div>
                    <div className='mb-10'>
                        <div>
                            <h2 className="text-4xl font-semibold text-center mb-2">See What people says</h2>
                            <p className='text-center'>Just a small sample of testimonials received from people who visited Evolution</p>
                        </div>
                    </div>

                    <div>
                        <Swiper
                            // slidesPerView={1}
                            spaceBetween={30}
                            centeredSlides={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                    slidesPerView: 2,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper md:slides-per-view-2 lg:slides-per-view-3"
                        >
                            {/* <OurTeamCard key={member.id} member={member} /> */}
                            {
                                reviews.map((review, idx) => <SwiperSlide className='text-center bg-white py-10 p-5 rounded-xl shadow-xl' key={idx}>
                                    <img className='w-40 h-40 mb-3 rounded-full mx-auto' src={review.image} alt="" />
                                    <h2 className='text-xl font-semibold'>{review.name}</h2>
                                    <p>{review.mail}</p>
                                    <h1 className=''>{review.message}</h1>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='min-h-screen mb-28'></div>
        </div>
    );
};

export default Testimonials;