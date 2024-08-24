import { useParams } from "react-router-dom";
import { items } from "../components/Menu/Cat";
import Navbar from "../components/Menu/Navbar";

export default function ProductDetails() {
  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-categores w-full min-h-screen">
      <Navbar />
     
      <div className="pt-[160px] md:px-20 px-5 md:flex  justify-between">
      <h1 className=" bg-categores leading-[60px] block phon:hidden font-bold  text-[25px] font-domine  ">
            {product.name}
          </h1>
      <img
          className=" block md:hidden"
          src={product.imageUrl}
          alt={product.name}
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        <div className="lg:w-3/6 flex flex-col  ">

          <h1 className=" leading-[60px] phon:block hidden font-bold phon:mb-10 phon:text-[40px] text-[25px] font-domine my-2 phon:mt-20 ">
            {product.name}
          </h1>

          <p className="mt-4 phon:text-[20px]  ">{product.description}</p>
          <p className="mt-2 font-semibold ">
            {product.price}
            <span className="uppercase font-bold mx-1">egp</span>
          </p>
          <button className="bg-main  text-white w-[90%] py-3 mt-10 capitalize text-[20px]">
            start an order
          </button>
        </div>
        <img
          className="lg:w-3/6 md:w-[45%] md:block hidden"
          src={product.imageUrl}
          alt={product.name}
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}
