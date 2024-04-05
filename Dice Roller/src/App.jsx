import React, { useEffect, useState } from "react";
import dice1 from "./assets/dice1.svg";
import dice2 from "./assets/dice2.svg";
import dice3 from "./assets/dice3.svg";
import dice4 from "./assets/dice4.svg";
import dice5 from "./assets/dice5.svg";
import dice6 from "./assets/dice6.svg";
function App() {
  const [count, setCount] = useState(1);
  const [totalRoll, setTotalRoll] = useState([{}]);
  const allDice = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [diceImage, setDiceImage] = useState(allDice[0]);
  let dice;
  const handleClick = () => {
    diceSelecting();
    setCount((count) => count + 1);
  };
  const diceSelecting = () => {
    let interval = setInterval(() => {
      setDiceImage(allDice[Math.floor(Math.random() * allDice.length)]);
    }, 170);
    dice = allDice[Math.floor(Math.random() * allDice.length)];
    setTimeout(() => {
      clearInterval(interval);
      setTotalRoll((prevRoll) => [
        ...prevRoll,
        { roll: dice, rollCount: count },
      ]);
      setDiceImage(dice);
    }, 3000);
  };
  return (
    <div className="w-[24rem] max-h-[28rem] flex gap-8 flex-col justify-center items-center bg-stone-700/30 rounded-md shadow-md shadow-white/10 p-5">
      <div className="w-16 h-16">
        <img src={diceImage} className="w-full h-full object-cover" alt="" />
      </div>
      <button
        className="uppercase font-bold bg-rose-600 px-4 py-2 rounded-md cursor-pointer active:scale-95 shadow-lg hover:shadow-red-700/70"
        onClick={handleClick}
      >
        Roll dice
      </button>
      <div className="flex flex-col gap-3 items-center overflow-y-auto w-full max-h-56">
        {totalRoll.map((item, index) => {
          if (index === 0) return null;
          return (
            <div
              key={index}
              className="flex w-[80%] justify-between items-center bg-stone-600 px-2 py-1 rounded-md"
            >
              <p className="font-semibold">Roll {item.rollCount}: </p>
              <div className="w-9 h-9">
                <img
                  src={item.roll}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
