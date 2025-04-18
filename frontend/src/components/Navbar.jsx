import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div >
      {/* Navbar */}
      <div className="flex justify-between items-center box-border bg-white/10 border border-white/20 rounded-[40px] m-4 sm:h-14 px-4 h-[3.8rem] lg:h-[4rem] xl:h-[6.2rem] xl:mx-36 md:mx-14 lg:mx-24 2xl:mx-48">
        <div className="flex p-2 mx-4 md:mx-0 2xl:mx-2">
          <img src={logo} alt="Logo" className="sm:w-[120px] md:w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[160px] " />
        </div>


        <div className="z-[100] md:hidden lg:hidden xl:hidden 2xl:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" size={28} />
        </div>

        {/* laptop */}
        <ul className="flex md:space-x-4  sm:hidden lg:space-x-8  space-x-12 font-medium ">
            <li className="text-white cursor-pointer"><a href="#">Home</a></li>
            <li className="text-white cursor-pointer"><a href="#">Hackathons</a></li>
            <li className="text-white cursor-pointer"><a href="#">Find Team</a></li>
            <li className="text-white cursor-pointer"><a href="#">About Us</a></li>
        </ul>
        <button className="relative left-2 md:mx-0 flex justify-center items-center  box-border bg-white/10 border border-white/20 rounded-[40px] h-10  xl:h-[4.2rem] 2xl:h-[2.8rem]  px-4 sm:hidden">
            <h1 className="text-white text-center font-extrabold ">Get Started</h1>
        </button>
      </div>

      
      
      {/* Backdrop */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        >
            
        </div>
      )} */}

      {/* Slide-in Menu */}
      <ul
        onClick={() => setOpen(false)}
        className={`md:hidden lg:hidden xl:hidden 2xl:hidden items-center text-center h-screen flex flex-col gap-14 py-[5.5rem] px-14 fixed top-0 bottom-0 w-full border border-white/20  bg-black transition-all rounded-l-lg duration-500 ease-in-out z-50 ${
          isOpen ?  "top-0":"-top-[39rem]"
        }`}
      >
        <li className="text-white cursor-pointer"><a href="#">Home</a></li>
        <li className="text-white cursor-pointer"><a href="#">Hackathons</a></li>
        <li className="text-white cursor-pointer"><a href="#">Find Team</a></li>
        <li className="text-white cursor-pointer"><a href="#">About Us</a></li>
        <div className="flex justify-center items-center  box-border bg-white/10 border border-white/20 rounded-[40px] h-10  px-4 w-[50%] ">
            <h1 className="text-white text-center">Get Started</h1>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
