import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { changeSlide, decrement, increment } from "../redux/counter";
import cards from "../data/kataMereka.json";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function KataMereka_2() {
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
        slidesPerView={1}
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
            className="flex justify-center items-center h-full"
          >
            <div className="h-3/4 flex flex-col justify-center text-left gap-5">
              <h2 className="text-2xl font-bold">{slide.head}</h2>
              <p className="text-sm text-[#959eb3]">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-14 flex gap-5">
        <button
          className="h-10 w-10 rounded-full bg-[#f4f4f7] hover:bg-[#ef4444] flex justify-center items-center pr-2"
          onClick={() => value > 0 && dispatch(decrement())}
        >
          <FaArrowLeft
            size={14}
            color="#212529"
            style={{ marginLeft: "8px" }}
          />
        </button>
        <button
          className="h-10 w-10 rounded-full bg-[#f4f4f7] hover:bg-[#ef4444] flex justify-center items-center pr-2"
          onClick={() => value < cards.length - 1 && dispatch(increment())}
        >
          <FaArrowRight
            size={14}
            color="#212529"
            style={{ marginLeft: "8px" }}
          />
        </button>
      </div>
    </div>
  );
}
