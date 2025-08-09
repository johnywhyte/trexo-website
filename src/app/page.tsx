// pages/index.tsx
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-100 to-purple-300">
      <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg max-w-lg">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">
          Trexo Technologies
        </h1>
        <p className="text-lg text-purple-700 italic mb-6">
          Building software that solves, not just sells
        </p>
        <div className="text-purple-900 font-medium text-xl">
          🚧 Website Under Construction 🚧
        </div>
      </div>
    </div>
  );
};

export default Home;
