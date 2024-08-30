import { useParams } from "react-router-dom";
import { items } from "../components/Menu/Cat";
import Navbar from "../components/Menu/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import StartOrder from "../components/StartOrder/StartOrder";
import Swal from "sweetalert2";

export default function ProductDetails() {
  const { id } = useParams();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showOrdedr, setShowOrder] = useState(false);
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  const startOrder = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      Swal.fire({
        title: "This product is already in the cart",
        text: "Do you want to increase the quantity?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, increase it!",
        cancelButtonText: "No, keep it as is",
      }).then((result) => {
        if (result.isConfirmed) {
          let newCart = [...cart];
          newCart[existingProductIndex].quantity += 1;
          setCart(newCart);
          localStorage.setItem("cart", JSON.stringify(newCart));
        }
      });
    } else {
      let newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setShowOrder(true);
    }
    setShowOrder(true);
    
  };
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
          <button
            onClick={() => startOrder(product)}
            className="bg-main text-white w-[90%] py-3 mt-10 capitalize text-[20px]"
          >
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
      {showOrdedr ? (
        <div className="absolute top-0 w-full right-0 z-50">
          <StartOrder cart={cart} setShowOrder={setShowOrder}  setCart={setCart} />
        </div>
      ) : (
        ""
      )}
      <div className={`mt-[90px] ${showOrdedr ? "hidden" : "block"}`}>
        <Footer />
      </div>
    </div>
  );
}
