import Footer from "../components/Footer";
import OuerFood from "../components/Home/OuerFood";
import Special from "../components/Home/Special";
import Navbar from "../components/Menu/Navbar";

export default function About() {
  return (
    <div className="w-full min-h-screen   ">
      <Navbar />
      <div className="mt-[100px]">
        <OuerFood />

        <Special />
      </div>
      <Footer />
    </div>
  );
}
