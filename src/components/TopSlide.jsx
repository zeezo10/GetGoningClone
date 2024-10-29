import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import photo1 from "../assets/mainSlide/download.png";
import photo2 from "../assets/mainSlide/download1.png";
import { GiIsland } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { FaMap } from "react-icons/fa";

export default function TopSlide() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation , Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide
        className={`w-full h-56 gap-10 flex text-3xl font-bold text-white`}
      >
        <div className="h-96 w-1/2 p-5">
          <div className="h-full w-full rounded-2xl bg-slate-300 overflow-hidden">
            <img src={photo2} alt="" />
          </div>
        </div>

        <div className=" h-full w-1/2 p-5 flex flex-col items-center gap-10 ">
          <h2 className="tracking-[0.4em] text-base text-[#959ca3] font-thin">
            APA YANG GETGOING PUNYA ?
          </h2>
          <div className="flex flex-col gap-10 w-full ">
            <div className="flex flex-col gap-10 w-full px-20">
              <button className="flex gap-5 transform transition-transform duration-300 hover:-translate-y-3">
                <div className="h-16 w-16 rounded-full bg-[#f8f9fa] overflow-hidden flex justify-center items-center">
                  <GiIsland size={40} color="#b7bec5" style={{}} />
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="text-xl text-[#343a40]">Trip Planner</h2>
                  <p className="text-sm text-[#343a40] bg-[#f8f9fa] p-1 rounded-md">
                    Susun Rute Perjalanan Senderi
                  </p>
                </div>
              </button>
              <button className="flex gap-5 transform transition-transform duration-300 hover:-translate-y-3">
                <div className="h-16 w-16 rounded-full bg-[#f8f9fa] flex justify-center items-center">
                  <IoPerson size={40} color="#b7bec5" style={{}} />
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="text-xl text-[#343a40]">Guide</h2>
                  <p className="text-sm text-[#343a40] bg-[#f8f9fa] p-1 rounded-md">
                    Tour Guide berbahasa Indonesia
                  </p>
                </div>
              </button>
              <button className="flex gap-5 transform transition-transform duration-300 hover:-translate-y-3">
                <div className="h-16 w-16 rounded-full bg-[#f8f9fa] flex justify-center items-center">
                  <FaMap size={30} color="#b7bec5" style={{}} />
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="text-xl text-[#343a40]">Info</h2>
                  <p className="text-sm text-[#343a40] bg-[#f8f9fa] p-1 rounded-md">
                    Info penting di luar negeri
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        className={`w-full h-56 gap-10 flex text-3xl font-bold text-white`}
      >
        <div className="h-96 w-1/2 p-5">
          <div className="h-full w-full rounded-2xl bg-slate-300 overflow-hidden">
            <img src={photo1} alt="" />
          </div>
        </div>

        <div className=" h-full w-1/2 p-5 flex flex-col items-center gap-10 ">
          <h2 className="tracking-[0.4em] text-base text-[#959ca3] font-thin">
            EXPLORE DAN NIKMATI MUDAH LIBURAN KE LUAR NEGERI DEGAN
          </h2>
          <div className="flex flex-col gap-10 w-full ">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col text-center">
                <h2 className="text-4xl text-[#343a40]">Aplikasi GetGoing</h2>
                <p className="text-lg text-[#959ca3] font-thin mt-5">
                  DAPAT DIDOWNLOAD DI :
                </p>
              </div>
              <div className="flex items-center justify-center h-24 w-full">
                <img
                  src="https://getgoing.co.id/content/svg/AppStore.svg"
                  alt=""
                  className="w-40"
                />
                <img
                  src="https://getgoing.co.id/content/svg/GooglePlay.svg"
                  alt=""
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
