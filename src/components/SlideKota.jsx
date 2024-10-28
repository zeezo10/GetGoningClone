import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import photo1 from "../assets/Kota/paris.webp";
import photo2 from "../assets/Kota/Bern.webp";
import photo3 from "../assets/Kota/amesterdam.webp";
import photo4 from "../assets/Kota/london.webp";
import photo5 from "../assets/Kota/roma.webp";
import photo6 from "../assets/Kota/Zurich.webp";
import photo7 from "../assets/Kota/Parha.webp";
import photo8 from "../assets/Kota/Berlin.webp";
import photo9 from "../assets/Kota/Liverpool.webp";
import photo10 from "../assets/Kota/turki.webp";

export default function SlideKota() {
  const imgUrl = [
    { id: 1, name: "France", country: "Prancis", Url: photo1 },
    { id: 2, name: "Bern", country: "Swiss", Url: photo2 },
    { id: 3, name: "Amsterdam", country: "Belanda", Url: photo3 },
    { id: 4, name: "London", country: "Inggris", Url: photo4 },
    { id: 5, name: "Roma", country: "Italia", Url: photo5 },
    { id: 6, name: "Zurich", country: "Swiss", Url: photo6 },
    { id: 7, name: "Praha", country: "Ceko", Url: photo7 },
    { id: 8, name: "Berlin", country: "Jerman", Url: photo8 },
    { id: 9, name: "Liverpool", country: "Inggris", Url: photo9 },
    { id: 10, name: "Istanbul", country: "Turki", Url: photo10 },
  ];

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imgUrl.map((el) => (
        <SwiperSlide key={el.id}>
          <button className="h-[360px] w-56">
            <div
              className="relative h-[350px] w-56 rounded-2xl p-5 gap-3 flex flex-col-reverse transition-transform duration-300 transform hover:-translate-y-2 bg-cover bg-center text-left"
              style={{ backgroundImage: `url(${el.Url})` }}
            >
              <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>
              <h2 className="relative z-10 text-xl text-white">{el.country}</h2>
              <h2 className="relative z-10 text-3xl font-bold text-white">
                {el.name}
              </h2>
            </div>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
