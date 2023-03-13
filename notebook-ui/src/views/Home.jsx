import { useRef } from "react";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import Register from "./Register";

function Split() {
  return (
    <div className="min-w-[0.75rem]">
    </div>
  );
}

function Home() {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">
      <Navbar />
      <div className="flex flex-col flex-1 w-9/12 m-auto mt-6">
        <div
          id="overview"
          className="bg-white w-full mb-4 px-8 py-4 rounded drop-shadow"
        >
          <h1>Hero</h1>
        </div>
        <div
          id="overview"
          className="bg-white w-full mb-4 px-8 py-4 rounded drop-shadow"
        >
          <h1>Overview</h1>
        </div>
        <div
          id="features"
          className="bg-white w-full mb-4 px-8 py-4 rounded drop-shadow"
        >
          <h1>Features</h1>
        </div>
{/*        <div
          id="pricing"
          className="bg-white w-full mb-4 px-8 py-4 rounded drop-shadow"
        >
          <p className="text-2xl text-center font-medium text-gray-700">Pricing</p>
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
*/}      </div>
    </div>
  );
}

export default Home;
