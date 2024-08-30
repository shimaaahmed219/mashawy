/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

export default function StartOrder({ cart, setShowOrder, setCart }) {
  const [address, setAddress] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("pickup");

  const closedOrder = () => {
    setShowOrder(false);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const confirmOrder = () => {
    if (!address) {
      Swal.fire({
        title: "Error!",
        text: "Please enter your address",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      title: "Confirm Order",
      text: "Are you sure you want to place the order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, confirm it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Order Confirmed",
          text: "Your order has been confirmed. Please wait for a confirmation email.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setCart([]);
        localStorage.removeItem("cart");
        setAddress("");
      }
    });
  };

  return (
    <div className="w-full bg-tr transation duration-150 ease-in min-h-screen justify-between flex">
      <div></div>
      <div className="xl:w-[26%] h-screen bg-white ">
        <div className="w-full justify-end flex p-4">
          <button
            onClick={closedOrder}
            className="p-1 text-white bg-main rounded-full"
          >
            <IoMdClose />
          </button>
        </div>
        <h1 className="text-main text-[30px] px-5 font-domine font-bold">
          Find a Restaurant Near You
        </h1>
        <div className="flex justify-around px-5 my-2">
          <button
            className={`w-[50%] h-[50px] ${
              deliveryOption === "pickup"
                ? "bg-main text-white"
                : "border-main text-main border-2"
            } hover:text-[20px] capitalize font-semibold`}
            onClick={() => setDeliveryOption("pickup")}
          >
            Pickup
          </button>
          <button
            className={`w-[50%] h-[50px] ${
              deliveryOption === "delivered"
                ? "bg-main text-white"
                : "border-main text-main border-2"
            } hover:text-[20px] capitalize font-semibold`}
            onClick={() => setDeliveryOption("delivered")}
          >
            Delivered
          </button>
        </div>
        <div className="px-5">
          <label htmlFor="address" className="text-main font-Anek">
            Enter city and state
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="focus:outline-none w-full px-5 py-2 rounded-[5px] border-[1px] border-main"
          />
        </div>
        <div className="start-order p-5">
          {cart.length > 0 ? (
            <>
              <div className="">
                <ul className="h-[250px] overflow-y-auto">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="cart-item my-4 flex w-full items-center"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "10px",
                        }}
                      />
                      <div className="w-full">
                        <p className="font-semibold">{item.name}</p>
                        <div className="flex justify-between w-full">
                          <p className="text-gray-500">
                            {parseFloat(item.price)} EGP
                          </p>
                          <div className="flex gap-x-4">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="px-2 bg-gray-100"
                            >
                              -
                            </button>
                            <button>{item.quantity}</button>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="px-2 bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-main"
                          >
                            <MdDelete size={24} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                  <div className="mt-5">
                    <p className="text-main text-[20px] font-bold">
                      Total: {totalPrice.toFixed(2)} EGP
                    </p>
                  </div>
                </ul>
              </div>
              <div className="xl:w-[24%] w-[200px] flex justify-center  absolute bottom-5">
                <button
                  onClick={confirmOrder}
                  className="w-[94%] h-[50px] hover:border-main text-[20px] hover:bg-white hover:border-2 hover:text-main text-white mt-[50px] flex justify-center items-center bg-main font-semibold"
                >
                  Confirm Order
                </button>
              </div>
            </>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}
