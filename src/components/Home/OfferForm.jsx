

export default function OfferForm() {
  return (
    <div className="w-full h-[500px] py-10 mt-[170px] bg-gray-100">
        
  <div className="sm:flex  justify-between items-center">
        <hr className="lg:w-[38%] sm:block hidden w-[30%] h-[2px] bg-main" />
        <h1 className="xl:text-[1.3rem] capitalize text-center text-main font-bold">
       enter your data
        </h1>
        <hr className="lg:w-[38%] sm:block hidden w-[30%] h-[2px] bg-main" />
      </div>
      <form className="bg-gray-200 sm:w-[50%] w-[70%] gap-y-4 mt-10 m-auto grid grid-row py-5">
        
      <div className="w-[80%] m-auto  font-domine font-bold capitalize">
      <label>name</label>
      </div>
        <input type="text" className="w-[80%] m-auto h-[40px] px-5" />
        
      <div className="w-[80%] m-auto  font-domine font-bold capitalize">
      <label>email</label>
      </div>
        <input type="text"   className="w-[80%] m-auto h-[40px] px-5" />
        
      <div className="w-[80%] m-auto  font-domine font-bold capitalize">
      <label>phone</label>
      </div>
        <input type="text"  className="w-[80%] m-auto h-[40px] px-5" />
        <button className="w-[100px] rounded-[5px] h-[40px] m-auto flex justify-center items-center bg-main text-white">submit</button>
      </form>
     
    </div>
  )
}
