export default function Bretch() {
  return (
    <div className="w-full md:flex  justify-between my-10 min-h-[300px] sm:px-20 px-5 ">
      <div className="md:w-[45%] md:my-0 my-10 flex flex-col justify-between items-center">
        <hr className="w-full h-[2px] bg-main" />
        <h1 className=" md:mt-0 mt-5 lg:text-[1.75rem] text-center text-[1.2rem] font-domine text-main ">
          {" "}
          British bred beef
        </h1>
        <p className="font-Georgian lg:text-[1.1rem] text-[15px] my-2 text-center">
          When we first opened our doors at Spitalfields in 2006, we made a
          commitment to serve only the very best beef that this country has to
          offer. Animal welfare and quality have been our focus and are things
          that we won’t compromise on.
        </p>
        <div className="flex justify-center items-center mt-10 ">
          <button className="btn-book bg-main absolute w-[130px] h-[33px]"></button>
          <button className="btn-book bg-white absolute hover:w-[130px] hover:h-[33px] hover:bg-main flex uppercase font-medium items-center justify-center hover:text-white w-[128px] h-[31px]">
            Learn more
          </button>
        </div>
        <hr className="w-full h-[2px] bg-main" />
      </div>
      <img className="md:w-[50%]" src="https://thehawksmoor.com/wp-content/uploads/2024/07/Hawksmoor_CastIron-1200-x-800.jpg"/>
    </div>
  );
}
