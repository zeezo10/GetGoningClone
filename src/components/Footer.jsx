import phone from "../../public/MockupApp.png";
import { GrLocation } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";   
import { FaFacebookSquare } from "react-icons/fa";      
import { FaRegClock } from "react-icons/fa";      


export default function Footer() {
  return (
    <div className="h-[400px]  bg-[#CC0000]">
    <div className="h-3/4 flex ">
      <div className="h-full w-1/4 p-5 flex flex-col justify-center gap-5">
        <h2 className="text-lg font-bold text-white">Informasi Kontak</h2>
        <div className="text-sm text-white flex items-center gap-3">
          <GrLocation   size={50} color="white" style={{}}/>
            
          BSD Green Office Park 1, 6th Floor, BSD City, Tangerang, Banten
          
        </div>
          <div className="text-white cursor-pointer text-sm flex items-center gap-3">
          <FaRegClock   size={25} color="white" style={{}}/>
          1534524/7 - Online
          </div>
        <div className="flex flex-col">
          <div className="text-white cursor-pointer text-sm flex gap-1 items-center">
          <TfiEmail   size={30} color="white" style={{}}/>

            lets@getgoing.co.id
          </div>
          <div className="text-white cursor-pointer text-sm flex gap-1 items-center">
          <FaInstagram   size={30} color="white" style={{}}/>

            @getgoing.co.id
          </div>
          <div className="text-white cursor-pointer text-sm flex gap-1 items-center">
          <FaFacebookSquare   size={30} color="white" style={{}}/>

            @getgoing.co.id
          </div>
        </div>
      </div>
      <div className="h-full w-1/4 flex justify-center items-center">
        <img src={phone} alt="" className="h-72 mt-5" />
      </div>
      <div className="h-full w-1/4 flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold text-white mb-5">DOWNLOAD DI</h2>
        <img
          src="https://getgoing.co.id/content/svg/AppStore.svg"
          alt=""
          className="w-48 cursor-pointer"
        />
        <img
          src="https://getgoing.co.id/content/svg/GooglePlay.svg"
          alt=""
          className="w-48 cursor-pointer"
        />
      </div>

      <div className="h-full w-1/4 p-5 flex flex-col justify-center gap-5 items-center">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-white mb-5">Lainnya</h2>

          <a className="text-white hover:underline cursor-pointer">
            Syarat dan Ketentuan
          </a>
          <a className="text-white hover:underline cursor-pointer">
            Kebijakan Privasi
          </a>
          <a className="text-white hover:underline cursor-pointer">
            Dokumentasi
          </a>
          <a className="text-white hover:underline cursor-pointer">
            Penghargaan
          </a>
          <a className="text-white hover:underline cursor-pointer">Login</a>
          <a className="text-white hover:underline cursor-pointer">Press</a>
          <a className="text-white hover:underline cursor-pointer">F.A.Q</a>
        </div>
      </div>
    </div>

    <div className="h-1/4 bg-black flex items-center p-5">
      <h2 className="text-white">
        © 2024 - PT. Gue Eksplorasi Terus. All rights reserved.
      </h2>
    </div>
  </div>
  )
}
