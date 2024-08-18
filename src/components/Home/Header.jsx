import Vedio from "../../elements/Vedio";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <div className="w-full xl:h-full md:h-[500px] h-[400px]">
      <Vedio />
      <Navbar />
      <h1 className=" z-40 absolute flex justify-center font-domine uppercase tracking-[15px] items-center w-full xl:h-full md:h-[500px] h-[400px] md:text-[70px] sm:text-[40px] text-[20px] phon:text-[30px] text-white ">
        mashawy
      </h1>
    </div>
  );
}
