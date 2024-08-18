export default function GreetingSection() {
  return (
    <div className="  w-full min-h-[400px]  font-domine text-main mt-20 px-5 ">
      <div className="sm:flex justify-between items-center">
        <hr className="lg:w-[38%] sm:block hidden w-[30%] h-[2px] bg-main" />
        <h1 className="xl:text-[1.3rem] text-center text-black">
          WELCOME TO MASHAWY
        </h1>
        <hr className="lg:w-[38%] sm:block hidden w-[30%] h-[2px] bg-main" />
      </div>
      <p className="flex flex-col justify-center items-center mt-10 xl:text-[2rem] lg:text-[1.5rem] md:text-[1.25rem] text-[16px] text-center sm:leading-[60px] leading-8">
        <span>AWARD-WINNING RESTAURANTS</span>
        <span>in London, Manchester, Liverpool & Edinburgh serving</span>
        <span>
          British steak & sustainable seafood with great cocktail bars.
        </span>
      </p>
      <div className="flex justify-center items-center mt-10 ">
        <button className="btn-book bg-black absolute w-[150px] h-[33px]"></button>
        <button className="btn-book bg-white absolute hover:w-[150px] hover:h-[33px] hover:bg-main flex uppercase font-medium items-center justify-center hover:text-white w-[148px] h-[31px]">
          book table
        </button>
      </div>
    </div>
  );
}
