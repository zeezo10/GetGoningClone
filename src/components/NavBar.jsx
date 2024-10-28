import  { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/Kota/logo2.png"
import { FaArrowRight } from 'react-icons/fa';


export default function NavBar() {
  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        fixed ? "bg-slate-200 bg-opacity-50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50" : " "
      } w-full ${fixed ? "h-[85px]" :"h-[150px]" }  rounded-full flex flex-row items-center p-2 justify-center transition-colors duration-300`}
    >
      <div>
        <div className={`${fixed ?"h-16 w-16" : "h-auto w-52"  } rounded-full flex justify-center items-center`}  >
          <img src={fixed ? logo : logo2} alt="" className={`${ fixed ? "h-12 w-12" : "h-auto w-52" }`} />
        </div>
      </div>
      <div className="flex-1">
        <div className="h-10 w-[450px] bg-white rounded-full ml-5 flex p-1 items-center shadow-custom-searchBar">
        <input className="h-6 mx-3 flex-1 focus:outline-none focus:ring-0" placeholder="Cari negara, Kota atau guide" />

          <div className="bg-[#cc0000] rounded-full h-8 w-8 flex items-center justify-center pr-2 cursor-pointer">
          <FaArrowRight size={15} color="white" style={{ marginLeft: '8px' }} />

          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row-reverse pr-10">
        <div className="h-11 w-96 flex justify-around items-center ">
          <button className="text-base font-bold text-[#CC0000]">Beranda</button>
          <button className="text-md text-[#CC0000]">Servis Kami</button>
          <button className="text-md text-[#CC0000]">Blog</button>
          <button className="font-bold tracking-[0.3em]">LOGIN</button>
        </div>
      </div>
    </div>
  );
}
