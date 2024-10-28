import photo1 from "../../public/tripPlanner_17103046981.webp";
import photo2 from "../../public/tripPlanner_17157588731.webp";
import photo3 from "../../public/tripPlanner_17290788771.webp";
import { FaArrowRight } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

export default function BacaJuga() {
  return (
    <div className="h-[600px] flex p-5 gap-10">
      <button className="text-left h-full w-1/3 bg-slate-50 rounded-lg overflow-hidden shadow-custom-xl transform transition-transform duration-300 hover:-translate-y-3">
        <div className="w-full h-2/3 bg-slate-300 overflow-hidden">
          <img src={photo1} alt="" />
        </div>
        <div className="p-5 flex flex-col gap-3">
          <h3 className="text-[#343a40] hover:text-black font-bold text-xl hover:underline">
            Rekomendasi Destinasi Terbaik di Eropa untuk Liburan Musim Panas
          </h3>
          <div className="flex ">
            <FaRegClock size={15 } color="#b7bec5" style={{  marginTop: "3px", marginRight: "5px"}} />
            <p className="text-[#b7bec5]">13 Sep 2023</p>
          </div>
          <div className="text-[#CE0202] font-semibold hover:underline flex ">
            LANJUTAN MEMBACA
            <FaArrowRight
              size={10}
              color="#CC0000"
              style={{ marginTop: "5px", marginLeft: "5px" }}
            />
          </div>
        </div>
      </button>
      <button className="text-left h-full w-1/3 bg-slate-50 rounded-lg overflow-hidden shadow-custom-xl transform transition-transform duration-300 hover:-translate-y-3">
        <div className="w-full h-2/3 bg-slate-300 overflow-hidden">
          <img src={photo2} alt="" />
        </div>
        <div className="p-5 flex flex-col gap-3 justify-between">
          <h3 className="text-[#343a40] hover:text-black font-bold text-xl hover:underline">
            Rekomendasi Destinasi Terbaik di Eropa untuk Liburan Musim Panas
          </h3>
          <div className="flex ">
            <FaRegClock size={15 } color="#b7bec5" style={{  marginTop: "3px", marginRight: "5px"}} />
            <p className="text-[#b7bec5]">18 Sep 2023</p>
          </div>

          <div className="text-[#CE0202] font-semibold hover:underline flex ">
            LANJUTAN MEMBACA
            <FaArrowRight
              size={10}
              color="#CC0000"
              style={{ marginTop: "5px", marginLeft: "5px" }}
            />
          </div>
        </div>
      </button>
      <button className="text-left h-full w-1/3 bg-slate-50 rounded-lg overflow-hidden shadow-custom-xl transform transition-transform duration-300 hover:-translate-y-3">
        <div className="w-full h-2/3 bg-slate-300 overflow-hidden">
          <img src={photo3} alt="" />
        </div>
        <div className="p-5 flex flex-col gap-3 justify-between">
          <h3 className="text-[#343a40] hover:text-black font-bold text-xl hover:underline">
            Rekomendasi Destinasi Terbaik di Eropa untuk Liburan Musim Panas
          </h3>

          <div className="flex ">
            <FaRegClock size={15 } color="#b7bec5" style={{  marginTop: "3px", marginRight: "5px"}} />
            <p className="text-[#b7bec5]">1 Sep 2023</p>
          </div>

          <div className="text-[#CE0202] font-semibold hover:underline flex ">
            LANJUTAN MEMBACA
            <FaArrowRight
              size={10}
              color="#CC0000"
              style={{ marginTop: "5px", marginLeft: "5px" }}
            />
          </div>
        </div>
      </button>
    </div>
  );
}
