import Footer from "../components/Footer";
import Category from "../components/Menu/Category";
import Navbar from "../components/Menu/Navbar";
import StartOurder from "../components/Menu/StartOurder";


export default function Menue() {
  return (
    <div>
      <Navbar/>
      <StartOurder/>
      <Category/>
      <Footer/>
    </div>
  )
}
