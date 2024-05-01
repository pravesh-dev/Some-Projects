import { motion } from "framer-motion";
import React, { useRef } from "react";
import girl1 from "./assets/girl.jpg";
import girl2 from "./assets/girl2.jpg";
import girl3 from "./assets/girl3.jpg";
import girl4 from "./assets/girl4.jpg";
import girl5 from "./assets/girl5.jpg";
function App() {
  const Constraints = useRef(null);
  const users = [
    {
      image: girl1,
      name: "Scarlet Johanson",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iure! Deleniti corrupti magnam quo veniam.",
    },
    {
      image: girl2,
      name: "Ema watson",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iure! Deleniti corrupti magnam quo veniam.",
    },
    {
      image: girl3,
      name: "Lara croft",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iure! Deleniti corrupti magnam quo veniam.",
    },
    {
      image: girl4,
      name: "Emily",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iure! Deleniti corrupti magnam quo veniam.",
    },
    {
      image: girl5,
      name: "Elizabeth",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iure! Deleniti corrupti magnam quo veniam.",
    },
  ];
  return (
    <div
      ref={Constraints}
      className="w-[80%] h-[80vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
    >
      {users.map((user, index) => {
        return (
          <motion.div drag dragConstraints={Constraints} whileDrag={{scale: '1.04'}} key={index} className="card w-60 h-80 bg-zinc-900 rounded-md cursor-grab p-2 absolute">
            <div className="w-full h-40 overflow-hidden rounded-md">
              <img className="w-full h-full object-cover" src={user.image} alt="" />
            </div>
            <h1 className="text-white uppercase mt-2 pl-1">{user.name}</h1>
            <p className="text-xs text-white/50 pl-1 mt-2">{user.para}</p>
            <div className="w-full flex mt-5 justify-between">
              <button className="px-7 py-1 rounded-md border border-yellow-700 text-yellow-700 scale-[0.9] duration-150 hover:bg-yellow-700 hover:text-white">
                Close
              </button>
              <button className="bg-red-700 px-7 py-1 rounded-md scale-[0.9] hover:bg-[#dc143c] duration-100 active:scale-[0.8]">
                Like
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default App;
