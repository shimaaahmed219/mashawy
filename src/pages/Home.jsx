
import GreetingSection from "../components/GreetingSection";
import BestSteak from "../components/Home/BestSteak";
import Header from "../components/Home/Header";
import OuerFood from "../components/Home/OuerFood";
import Special from "../components/Home/Special";
import Bretch from "../components/Home/Bretch";
import Offer from "../components/Home/Offer";
import MySlider from "../components/Home/Slider";
import MySlide from "../components/Home/SliderMd";


export default function Home() {
  return (
    <div className="w-full h-screen ">
    <Header/>
    <GreetingSection/>
    <OuerFood/>
    <BestSteak/>
    <Special/>
    <Bretch/>
    <Offer/>
    <MySlider/>
    <MySlide/>
    </div>
  );
}
