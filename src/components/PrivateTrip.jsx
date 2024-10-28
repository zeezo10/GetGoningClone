import konsol from "../assets/icon/support-gradient.png";
import location from "../assets/icon/person-pin-gradient.png";
import trans from "../assets/icon/commute-gradient.png";
import start from "../assets/icon/star-gradient.png";

export default function PrivateTrip() {
  return (
    <div className="h-[500px]  flex">
    <div className="flex-1 h-full  p-5 flex flex-col ">
      <div className="w-full h-40  flex flex-col">
        <h2 className="text-4xl text-[#F92D2D] mb-3">PRIVATE TRIP</h2>
        <h3 className="text-4xl font-bold">
          Berangkat <span className="text-[#CC0000]">Kapan Saja </span>
          Semaumu
        </h3>
      </div>
      <div className="w-full h-80 flex flex-wrap">
        <div className="w-1/2 h-1/2 flex justify-center items-center p-2 gap-2">
          <div className=" bg-gradient-to-r to-[#FF9E22] from-[#CE0202] h-5 w-5 rounded-full"></div>
          <p className=" text-[#9CA2B5] w-44">
            Tentukan tanggal keberangkatan sesukamu
          </p>
        </div>
        <div className="w-1/2 h-1/2 flex justify-center items-center p-2 gap-2">
          <div className=" bg-gradient-to-r to-[#FF9E22] from-[#CE0202] h-5 w-5 rounded-full"></div>
          <p className=" text-[#9CA2B5] w-44">
            Tidak ada kuota minimum, jadi pasti berangkat
          </p>
        </div>
        <div className="w-1/2 h-1/2 flex justify-center items-center p-2 gap-2">
          <div className=" bg-gradient-to-r to-[#FF9E22] from-[#CE0202] h-5 w-5 rounded-full"></div>
          <p className=" text-[#9CA2B5] w-44">
            Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan
          </p>
        </div>
        <div className="w-1/2 h-1/2 flex justify-center items-center p-2 gap-2">
          <div className=" bg-gradient-to-r to-[#FF9E22] from-[#CE0202] h-5 w-5 rounded-full"></div>
          <p className=" text-[#9CA2B5] w-44">
            Liburan jadi lebih exclusive untuk kamu dan keluarga
          </p>
        </div>
      </div>
    </div>
    <div className="flex-1 h-full  p-5">
      <div className="h-full w-full bg-gradient-to-r to-[#FF9E22] from-[#CE0202]  rounded-bl-[50px] rounded-tl-[50px] p-10">
        <div className="h-full w-full  flex flex-wrap">
          <div className="h-1/2 w-1/2  p-2">
            <div className="bg-slate-200 h-full w-full rounded-xl flex flex-col p-4 gap-1 bg-opacity-30">
              <div className="h-16 w-16 rounded-lg bg-slate-100 flex justify-center items-center ">
                <img src={konsol} alt="" className="h-12" />
              </div>
              <div className="h-16 w-full flex flex-col justify-center gap-1">
                <h3 className="font-bold text-white">Konsultasi GRATIS</h3>
                <h3 className="text-white">Curhatin aja semuanya!</h3>
              </div>
            </div>
          </div>
          <div className="h-1/2 w-1/2  p-2">
            <div className="bg-slate-200 h-full w-full rounded-xl flex flex-col p-4 gap-1 bg-opacity-30">
              <div className="h-16 w-16 rounded-lg bg-slate-100 flex justify-center items-center">
                <img src={location} alt="" className="h-12" />
              </div>
              <div className="h-16 w-full flex flex-col justify-center gap-1">
                <h3 className="font-bold text-white">Local Guide</h3>
                <h3 className="text-white">Biar ada temen!</h3>
              </div>
            </div>
          </div>
          <div className="h-1/2 w-1/2  p-2">
            <div className="bg-slate-200 h-full w-full rounded-xl flex flex-col p-4 gap-1 bg-opacity-30">
              <div className="h-16 w-16 rounded-lg bg-slate-100 flex justify-center items-center">
                <img src={trans} alt="" className="h-12" />
              </div>
              <div className="h-16 w-full flex flex-col justify-center gap-1">
                <h3 className="font-bold text-white">Transportasi</h3>
                <h3 className="text-white">Bebas pilih transportasi apa</h3>
              </div>
            </div>
          </div>
          <div className="h-1/2 w-1/2  p-2">
            <div className="bg-slate-200 h-full w-full rounded-xl flex flex-col p-4 gap-1 bg-opacity-30">
              <div className="h-16 w-16 rounded-lg bg-slate-100 flex justify-center items-center">
                <img src={start} alt="" className="h-12" />
              </div>
              <div className="h-16 w-full flex flex-col justify-center gap-1">
                <h3 className="font-bold text-white">Lengkap Pokoknya</h3>
                <h3 className="text-white">
                  Hotel, Asuransi, Visa, Wifi dl
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
