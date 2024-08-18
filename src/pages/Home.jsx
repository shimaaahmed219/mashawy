import GreetingSection from "../components/GreetingSection";
import BestSteak from "../components/Home/BestSteak";
import Header from "../components/Home/Header";
import OuerFood from "../components/Home/OuerFood";


export default function Home() {
  return (
    <div className="w-full h-screen ">
    <Header/>
    <GreetingSection/>
    <OuerFood/>
    <BestSteak/>
    </div>
  );
}
