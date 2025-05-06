import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.floor(Math.random() * 10);
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]">
      <div className="w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-4">Loading Portfolio</h2>
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-400">{progress}%</p>
        <div className="mt-8">
          <div className="canvas-loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;