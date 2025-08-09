// pages/index.tsx
import { NextPage } from "next";
import Logo from "@/icons/logo";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen  w-full flex items-center justify-center bg-gradient-to-br from-white  to-blue-100">
      <div className="text-center w-[40rem] text-black  rounded-2xl ">
        <div className="flex justify-center">
          <div className=" pb-4">
            <Logo width={"123"} height={"108"} />
          </div>
        </div>
        <div className="flex justify-center ">
          <h1 className="md:text-6xl font-bold mb-4 tracking-tighter">Trexo Technologies</h1>
        </div>
        <p className="text-xl italic  mb-2">
          Building software that solves, not just sells
        </p>
        <div className=" font-medium text-red-500">
          🚧 Building Something Exciting, Please check back soon. 🚧
        </div>
      </div>
    </div>
  );
};

export default Home;
