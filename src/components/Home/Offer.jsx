export default function Offer() {
  return (
    <div className="w-full md:flex  justify-between my-10 bg-gray-100 min-h-[300px] sm:px-20 px-5 py-10">
      <img
        className="md:w-[50%]"
        src="https://thehawksmoor.com/wp-content/uploads/2024/07/steak-and-a-side.jpg"
      />
      <div className="md:w-[45%] flex flex-col justify-between">
        <hr className="w-full h-[2px] bg-main" />
        <div>
          <div className="mt-10">
            <h1 className=" lg:text-[1.75rem] text-center text-[1.2rem] font-domine text-main ">
              Steak and Side offer
            </h1>
            <div className="font-Georgian lg:text-[1rem] text-[15px] my-2 text-center">
              <div>
                <p>Our feel-good menu of the summer.</p>
                Loose linen. White wine. Best friends. And a delicious plate of
                food. Who doesn’t love a summer lunch in the city?
              </div>
              <p className="mt-5">
                We’re channelling all of the above this summer with a deal on
                ‘till September: choose your main, then choose your side.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 ">
          <button className="btn-book bg-main absolute w-[200px] h-[33px]"></button>
          <button className="btn-book bg-white absolute hover:w-[200px] hover:h-[33px] hover:bg-main flex uppercase font-medium items-center justify-center hover:text-white w-[198px] h-[31px]">
            BOOK private dining
          </button>
        </div>
        <hr className="w-full h-[2px] bg-main" />
      </div>
    </div>
  );
}
