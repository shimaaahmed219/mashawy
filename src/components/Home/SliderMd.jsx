import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
export default function MySlide() {

    const images = [
        "https://thehawksmoor.com/wp-content/uploads/2024/06/hawksmoorprepc-26-2-X3-2-819x1024.jpg",
        "https://thehawksmoor.com/wp-content/uploads/2024/06/DSC05640-2-X4-1.jpg",
        "https://thehawksmoor.com/wp-content/uploads/2024/06/DSC02032-X4-1-1024x683.jpg",
        "https://thehawksmoor.com/wp-content/uploads/2024/05/DSC02013-3-copy-1-1024x683.jpg",
        "https://thehawksmoor.com/wp-content/uploads/2024/06/DSC08251-2-X4-1.jpg",
        "https://thehawksmoor.com/wp-content/uploads/2024/05/DSC01771-1-1024x682.jpg",
         "https://thehawksmoor.com/wp-content/uploads/2024/06/DSC07025-3-X4-1.jpg", 
         "https://thehawksmoor.com/wp-content/uploads/2024/06/HAWKSROAST2-v2-X4-1.jpg", 
         "https://thehawksmoor.com/wp-content/uploads/2024/05/HAWKSMOOR_CKT-03-1-1024x683.jpg", 
         "https://thehawksmoor.com/wp-content/uploads/2024/05/HAWKSMOOR_DINNER_SETTING-18-1-683x1024.jpg",
          "https://thehawksmoor.com/wp-content/uploads/2024/06/DSC06477-X3-1-819x1024.jpg",
      ];
      
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10 bg-trasnsparent py-2 hover:bg-black"
        onClick={onClick}
      >
       <GrFormPrevious/>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10 bg-trasnsparent py-2 hover:bg-black"
        onClick={onClick}
      >
        <MdNavigateNext/>
      </div>
    );
  };


    const settings = {
        dots: false, 
        infinite: true,
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 3000, 
        prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />
      };
    
      return (
        <div className="h-[150px] md:hidden block px-10">
            
              <Slider {...settings}>
        {images.map((image, index) => (
        <div key={index}>
          <img className="h-[280px] w-full" src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      </Slider>
        </div>
      
     )
    }
    