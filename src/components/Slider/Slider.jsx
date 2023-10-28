import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';






const Slider = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src="https://i.ibb.co/DkkW4dC/pexels-kaique-rocha-48013.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/Qf0W4wT/kouji-tsuru-Jf-Dnkd-Jh-Kd-M-unsplash.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/GphhwVp/athlete-ready-run-with-are-you-ready-message.jpg" alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default Slider;