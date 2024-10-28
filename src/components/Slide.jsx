import { Swiper, SwiperSlide } from "swiper/react";
import people from "../data/people.json"

import "swiper/css";

export default function Slider() {

 

  return (
  <Swiper
  spaceBetween={30}
  slidesPerView={5}
  onSlideChange={() => console.log("slide change")}
  onSwiper={(swiper) => console.log(swiper)}
  
>
  {people.map((el) => (
    <SwiperSlide key={el.name}>
      <div className="h-72 w-56 flex flex-col items-center p-5 text-left mt-3">
        <button className="h-48 w-48 bg-slate-300 rounded-2xl transition-transform duration-300 transform hover:-translate-y-2 bg-cover bg-center"
         style={{ backgroundImage: `url(${el.photo})` }}
        ></button>
        <div className="w-44">
          <p className="font-bold">{el.name}</p>
          <p className="text-sm">{el.country}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

  );
}
