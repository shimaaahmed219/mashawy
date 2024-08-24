import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-footer text-white pb-10   w-full min-h-[400px] px-10">
      <div className="flex flex-col  h-[100px] justify-center items-center">
        <Link
          className="   font-Dancing text-[40px] uppercase hover:text-main hover:py-2 cursor-pointer"
          to="/"
        >
          mashawy
        </Link>
        <hr className="w-[100%] h-[1px] mt-4 bg-white border-none" />
      </div>
      <div className="grid lg:grid-cols-4 gap-y-11 sm:grid-cols-2 mt-5 font-Anek">
        <div>
          <ul className="grid gap-y-2">
            <h1 className="font-semibold text-[18px] ">
              Restaurant Information
            </h1>
            <li>Cheesecake Rewards®</li>
            <li>Questions?</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Corporate Social Responsibility</li>
            <li>Ways We Give</li>
            <li>Press Room</li>
          </ul>
        </div>

        <div>
          <ul className="grid gap-y-2">
            <h1 className="font-semibold text-[18px] ">Shop</h1>
            <li>At Home Retail Products</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div>
          <ul className="grid gap-y-2">
            <h1 className="font-semibold text-[18px] ">
              Additional Information
            </h1>
            <li>Investors</li>
            <li>Global Development</li>
            <li>Employment Policy</li>
            <li>CCPA Compliance</li>
            <li>Health and Safety</li>
          </ul>
        </div>

        <div>
          <ul className="grid gap-y-2 text-[25px] font-Dancing">
            <li className=" hover:text-main">
              <Link
                className="   font-Dancing text-[25px]  hover:py-2 cursor-pointer"
                to="/register"
              >
                {" "}
                Sign Up for mashawy
              </Link>
            </li>
            <li>Follow Us!</li>
            <li className="flex gap-x-4">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaTiktok />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
