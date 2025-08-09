// pages/index.tsx
import { NextPage } from "next";
import Logo from "@/icons/logo";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen  w-full flex items-center justify-center bg-gradient-to-br from-white  to-blue-100">
      <div className="text-center w-[40rem] text-black  rounded-2xl ">
        <div className="flex justify-center">
          <div className="w-[10rem]">
            <Logo />
          </div>
        </div>
        <div className="flex justify-center ">
          <h1 className="md:text-6xl font-bold mb-4">Trexo Technologies</h1>
        </div>
        <p className="text-lg italic  mb-2">
          Building software that solves, not just sells
        </p>
        <div className=" font-medium text-red-500 text-xl">
          🚧 Website Under Construction 🚧
        </div>
      </div>
    </div>
  );
};

export default Home;
