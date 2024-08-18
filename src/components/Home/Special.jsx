export default function Special() {
  return (
    <div className="w-full md:flex  justify-between my-10 bg-gray-100 min-h-[400px] sm:px-20 px-5 py-10">
      <img
        className="md:w-[40%]"
        src="https://thehawksmoor.com/wp-content/uploads/2024/05/hawksmoor-private-dining-819x1024.jpg"
      />
      <div className="md:w-[50%] flex flex-col justify-between">
        <hr className="w-full h-[2px] bg-main" />
        <div>
          <img
            className="w-[150px] flex m-auto"
            src="https://thehawksmoor.com/wp-content/uploads/2024/06/Cocktails-illustration.png"
          />
          <div className="mt-10">
            <h1 className=" lg:text-[1.75rem] text-center text-[1.2rem] font-domine text-main ">Book something (really) special</h1>
            <p className="font-Georgian lg:text-[1.1rem] text-[15px] my-2 text-center">
              Every meal at Hawksmoor’s worth writing home about, but our
              private dining’s something else entirely. Just you, your favourite
              people, and the best steak this side of anywhere. Come as you are,
              and leave the rest to us.
            </p>
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
