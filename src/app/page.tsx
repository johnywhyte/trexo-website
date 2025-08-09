// pages/index.tsx
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white  to-blue-100">
      <div className="text-center text-black p-6 rounded-2xl ">
        <h1 className="md:text-6xl font-bold mb-4">Trexo Technologies</h1>
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
