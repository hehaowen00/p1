import Navbar from "../components/Navbar";
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";

function Split() {
  return (
    <div className="min-w-[0.75rem]">
    </div>
  );
}

function Components() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Navbar />
      <div className="flex flex-row flex-1 m-3">
        <Sidebar />
        <div className="flex-1 flex flex-row ml-[0.75rem] py-0">
          <Page />
          <Split />
          <Page />
        </div>

        <input
          type="text"
          placeholder="New Item"
          className="flex text-sm items-centers gap-2 rounded-sm px-2 py-1
           text-black"
          href=""
        />
      </div>
    </div>
  );
}

export default Components;
