import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="absolute transition-all duration-300 z-50 hover:bg-white capitalize text-[15px] text-white hover:text-main items-center font-domine w-full  py-5  flex ">
        <div className="w-3/6 lg:block hidden">
          <ul className=" mx-3 flex justify-between w-3/6 ">
            <li>
              <Link className="hover:text-main">Home</Link>
            </li>
            <li>
              <Link className="hover:text-main">about</Link>
            </li>
            <li>
              <Link className="hover:text-main">service</Link>
            </li>
            <li>
              <Link className="hover:text-main">menue</Link>
            </li>
          </ul>
        </div>
        <div className=" lg:w-3/6 md:w-2/6  phon:w-3/6 w-4/6">
          <ul className="flex justify-between xl:w-[40%] w-[50%] lg:ms-auto items-center mx-5">
            <li>uk</li>
            <li>shop</li>
            <li>
              <button className="  py-1 w-[150px] border-main text-[20px] border-[2px] rounded-[10px]   lg:flex hidden justify-center items-center">
                book table
              </button>
            </li>
          </ul>
        </div>
        <div className="ms-auto mx-5 lg:hidden block ">
          <button onClick={toggleMenu}>
            <FaList className="text-[20px]" />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 lg:hidden block  text-main w-full h-full bg-white shadow-lg z-50  transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full flex justify-between px-5 py-5 items-center">
          <ul className="flex justify-between md:w-1/6  w-2/6">
            <li>uk</li>
            <li>shop</li>
          </ul>
          <button onClick={toggleMenu}>
            <IoMdClose className="text-[20px]" />
          </button>
        </div>
        <hr className="w-ful h-[2px] bg-main mx-0" />
        <ul className="space-y-6 text-[30px] text-main mt-[70px] w-full h-full text-center">
          <li>
            <Link className="hover:border-b-2 hover:border-main">Home</Link>
          </li>
          <li>
            <Link className="hover:border-b-2 hover:border-main">About</Link>
          </li>
          <li>
            <Link className="hover:border-b-2 hover:border-main">Service</Link>
          </li>
          <li>
            <Link className="hover:border-b-2 hover:border-main">Menu</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
