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
      <div className="pt-[160px] px-20 flex  justify-between">
        <div className="w-3/6">
          <h1 className="text-2xl leading-[60px] font-bold mb-10 text-[40px] font-domine mt-20 ">
            {product.name}
          </h1>

          <p className="mt-4 text-[20px] ">{product.description}</p>
          <p className="mt-2 font-semibold ">
            {product.price}
            <span className="uppercase font-bold mx-1">egp</span>
          </p>
          <button className="bg-main text-white w-[90%] py-3 mt-10 capitalize text-[20px]">
            start an order
          </button>
        </div>
        <img
          className="w-3/6"
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
