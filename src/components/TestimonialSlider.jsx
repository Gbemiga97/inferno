import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { data } from '../utils'


const TestimonialSlider = () => {
  return (
    <Swiper 
    pagination={{
        clickable: true,
        dynamicBullets: true
    }}
    autoplay={{
        disableOnInteraction: false,
        delay: 3000,
    }}
    loop
    modules={[Pagination, Autoplay]}
    slidesPerView={3}
    spaceBetween={20}
    breakpoints={{
        320: {
            slidesPerView: 1
        },
        760: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }}
    className='min-h-[400px]'
    >
        {
            data.testimonials.map(({name, location, img}, i) => (
                <SwiperSlide key={i}>
                    <div className='w-full max-w-[370px] h-[370px]  bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto'>
                        <div className='flex gap-4 mb-6'>
                            <img src={img} alt={name} />
                            <div>
                                <h3>{name}</h3>
                                <p>{location}</p>
                            </div>
                        </div>
                        <p>
                        Lorem Ipsum is simply dummy 
                        text of the typesetting industry. 
                        Ipsum has been.
                        </p>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default TestimonialSlider