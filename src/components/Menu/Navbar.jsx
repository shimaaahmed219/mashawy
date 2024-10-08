import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
// import { FaUserCircle } from "react-icons/fa";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const  location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full h-[70px]   transition-all duration-300`}
    >
      <div className="absolute transition-all duration-300  z-50 bg-white capitalize text-[15px] border-main border-b-2 text-main items-center font-domine w-full  py-5  flex ">
        <div className="w-3/6 lg:block hidden">
          <ul className=" mx-3 flex justify-between xl:w-3/6 w-4/6 ">
            <li>
              <Link to="/" className={`${location.pathname ==="/" ? "border-2  border-main":""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${location.pathname ==="/about" ?"border-b-2 border-main":""}`}>about</Link>
            </li>
            <li>
              <Link to="/service" className={`${location.pathname ==="/service" ?"border-b-2 border-main":""}`}>service</Link>
            </li>
            <li>
              <Link to="/menu" className={`${location.pathname ==="/menu" ?"border-b-2 border-main":""}`}>
                menue
              </Link>
            </li>
          </ul>
        </div>

        {showText && (
          <div>
            <h1 className=" lg:flex hidden justify-center font-domine uppercase tracking-[15px] items-center w-full xl:h-full   md:text-[30px] sm:text-[20px] text-[20px] phon:text-[30px] text-main ">
              mashawy
            </h1>
          </div>
        )}

        <div className=" lg:w-3/6 md:w-2/6  phon:w-3/6 w-4/6">
          <ul className="flex justify-between xl:w-[40%] w-[60%] lg:ms-auto items-center mx-5">
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
            <Link to="/" className="hover:border-b-2 hover:border-main">Home</Link>
          </li>
          <li>
            <Link to="about" className="hover:border-b-2 hover:border-main">About</Link>
          </li>
          <li>
            <Link to="service"  className="hover:border-b-2 hover:border-main">Service</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:border-b-2 hover:border-main">Menu</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
