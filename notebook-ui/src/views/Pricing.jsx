import Navbar from "../components/Navbar";

function Pricing() {
  return (
  	<div
  		className="flex flex-col h-screen w-full bg-gray-100"
  	>
  		<Navbar section="pricing" />
      <div
        id="pricing"
        className="w-9/12 max-w-[75%] m-auto mt-6 bg-white w-full mb-4 px-8 py-4 rounded drop-shadow"
      >
        <div className="grid grid-cols-12">
          <div className="col-span-4 text-center font-medium border-solid border-[1px] border-r-0 border-gray-300">
            Free Tier
          </div>
          <div className="col-span-4 text-center font-medium border-solid border-[1px] b border-r-0 border-gray-300">
            Basic
          </div>
          <div className="col-span-4 text-center font-medium border-solid border-[1px] border-gray-300">
            Premium
          </div>
        </div>
        </div>
    </div>
  );
}

export default Pricing;