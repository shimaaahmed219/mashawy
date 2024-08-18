export default function OuerFood() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 min-h-[290px] bg-gray-100">
      <div className="md:px-10 px-5 min-h-[290px] py-10 flex flex-col  items-center justify-center">
        <h1 className=" sm:text-[1.75rem] text-[1.2rem] font-domine text-main">
          What makes our food so good?
        </h1>
        <p className="  bg-#fbe5e5-100 font-Georgian text-[1.1rem] my-2 text-center">
          Our food’s good because the ingredients are good. Expect beef from
          grass-fed, traditionally reared cattle; sustainable British seafood;
          local cheeses; seasonal fruits and vegetables — the sort of stuff
          that’s phenomenal as it is, before it even makes it to our kitchens.
        </p>
        <div className="flex justify-center items-center mt-10 ">
          <button className="btn-book bg-black absolute w-[200px] h-[33px]"></button>
          <button className="btn-book bg-white absolute hover:w-[200px] hover:h-[33px] hover:bg-main flex uppercase font-medium items-center justify-center hover:text-white w-[198px] h-[31px]">
            DIVE INTO OUR FOOD
          </button>
        </div>
      </div>
      <div className="">
        <img
          className="h-[290px] w-full"
          src="https://thehawksmoor.com/wp-content/uploads/2024/06/SHARING_STEAK-115-CROP-X4-1.jpg"
        />
      </div>
    </div>
  );
}
