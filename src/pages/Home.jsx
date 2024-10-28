import NavBar from "../components/NavBar";
import Slider from "../components/Slide";
import SlideKota from "../components/SlideKota";
import BacaJuga from "../components/BacaJuga";

import KataMereka from "../components/KataMereka";
import TopSlide from "../components/TopSlide";
import KataMereka_2 from "../components/KataMereka_2";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";
import PrivateTrip from "../components/PrivateTrip";

export default function Home() {
  return (
    <body className="font-poppins text-[#212529]">
      <nav>
        <NavBar />
      </nav>
      <main>
        <TopSlide />

        {/* sedang populer  */}

        <div>
          <div className="h-20   flex items-center m-5">
            <h2 className="text-4xl font-bold text-[#212529]">
              Sedang<span className="text-[#CC0000]">Populer</span>
            </h2>
          </div>

          <div className="h-72  flex items-center p-5 justify-around">
            <Slider />
          </div>
        </div>

        {/* Better See  */}

        <div className="h-40  flex flex-col justify-center items-center mt-10">
          <h2 className="text-3xl font-bold">
            “Better to <span className="text-[#CC0000]">SEE</span> something
            once than hear about it{" "}
            <span className="text-[#4183D1]">A THOUSAND TIMES</span>”
          </h2>
          <h3 className="text-2xl font-bold"> - Asian Proverb.</h3>
        </div>

        {/* Privite Trip  */}

        <PrivateTrip />

        {/* Kota Populer  */}
        <div className="h-[500px] p-5">
          <div className="flex items-center mb-[-30px]">
            <h2 className="text-4xl font-bold text-[#212529]">
              Kota <span className="text-[#CC0000]">Populer</span>
            </h2>
          </div>
          <SlideKota />
        </div>

        {/* Apa Kata Mereka  */}

        <div className="h-[600px] mt-10 ">
          <div className="h-1/4 w-full flex justify-center items-center flex-col">
            <h2 className="text-4xl font-bold text-[#212529]">
              Kata <span className="text-[#CC0000]">Mereka</span>
            </h2>
            <h3 className="text-xl text-[#8791A9]">
              Cerita dari mereka yang telah menjelajahi Eropa bersama kami
            </h3>
          </div>
          <div className="h-3/4 w-full  flex pr-5 pl-5 ">
            <div className="h-full w-1/2  flex flex-col justify-between">
              <KataMereka_2 />
            </div>
            <div className="h-full w-1/2  ">
              <KataMereka />
            </div>
          </div>
        </div>

        {/* Baca juga  */}

        <div className="h-[750px]  ">
          <div className="h-32  flex justify-between p-5 items-center">
            <h2 className="text-4xl font-bold text-[#212529]">Baca juga</h2>
            <div className="tracking-[0.4em] font-semibold  text-[#CC0000] h-10 w-80 rounded-full border-[1px] hover:bg-[#4183d1] hover:text-white hover:border-white border-[#CC0000] cursor-pointer flex items-center justify-center">
              LIHAT SEMUA ARTIKEL
              <FaArrowRight
                size={14}
                color="#CC0000"
                style={{ marginLeft: "8px" }}
              />
            </div>
          </div>

          <BacaJuga />
        </div>
      </main>
      {/* footer  */}

      <footer>
        <Footer />
      </footer>
    </body>
  );
}
