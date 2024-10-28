import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { changeSlide } from "../redux/counter";
import cards from "../data/kataMereka.json";

export default function KataMereka() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(value);
    }
  }, [value]);

  return (
    <div className="py-10">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={270}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={value}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => dispatch(changeSlide(swiper.activeIndex))}
        className="w-[400px]"
      >
        {cards.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center h-full cursor-pointer "
          >
            <div
              className={`card w-72 h-64 m-10 rounded-sm flex flex-col items-center bg-white justify-between p-5 transition-transform duration-500 ${
                index === value
                  ? "scale-105 -translate-y-5 shadow-2xl"
                  : "scale-95 shadow-md"
              } hover:-translate-y-2`}
            >
              <div className="bg-slate-500 h-40 w-64 ">
                <img src={slide.photo} alt="" />
              </div>
              <h3 className="font-bold">{slide.name}</h3>
              <p className="text-gray-700 font-thin text-xs">{slide.job}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
