export default function StartOurder() {
  return (
    <div className="lg:flex grid gap-y-3 justify-between mt-[87px]  px-5 items-center min-h-[100px]">
      <h1 className="font-tinos text-[35px] text-main">Our Menu</h1>
      <p className="font-Anek font-semibold text-main text-[20ppx] tracking-widest">
        Ready to Order? Click “Start an Order” to place an order for
        <span>pickup or delivery!</span>
      </p>
      <button className="p-2 lg:my-0 mb-4 bg-main text-white capitalize font-tinos border-none  w-[200px] text-[20px] px-5 font-bold">
        start an order
      </button>
    </div>
  );
}
