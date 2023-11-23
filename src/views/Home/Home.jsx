import React, { useState } from "react";

function Home() {
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });

  const play = (boxNO) => {
    if (board[boxNO] !== "") {
      return;
    }

    if (player === 1) {
      setBoard({ ...board, [boxNO]: "🐒" });
    } else {
      setBoard({ ...board, [boxNO]: "🐸" });
    }
    setPlayer(player === 1 ? 2 : 1);
  };
  return (
    <>
      <figure class="bg-slate-100 rounded-xl py-6  dark:bg-red-300 w-96 mx-auto mt-7 shadow-xl">
        <h1 className="text-3xl font-bold text-center text-dark-50 ">
          {" "}
          <span className="p-2 bg-slate-50 rounded-full me-2"> 🐒</span> Tic
          Tack Toe <span className="p-2 bg-slate-50 rounded-full ms-2">🐸</span>{" "}
        </h1>
      </figure>
      <div className="mx-auto mt-10 w-96 ring-2 py-5 rounded-md ring-red-400 ring-inset">
        <div className="player-container flex justify-evenly ">
          <div>
            <span className="text-xl px-7 py-2 bg-slate-50 rounded-full shadow-md">
              Player 1 🐒{" "}
            </span>
          </div>
          <div>
            <span className="text-xl  px-7 py-2 bg-slate-50 rounded-full shadow-md">
              Player 2 🐸
            </span>
          </div>
        </div>
        <div className="text-center mt-5">
          <span className="px-7 py-2 bg-slate-50 rounded-full shadow-md   ">
            Current Player : {player === 1 ? "🐒" : "🐸"}
          </span>
        </div>
      </div>

      {/* game box  */}
      <div className="mt-10 bord w-fit block mx-auto p-5 rounded-md shadow-3xl bg-red-300 ">
        <div className="row flex justify-center">
          <div
            className="box   w-28 h-28 bg-slate-100 border  border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab flex justify-center items-center text-5xl	"
            onClick={() => {
              play(1);
            }}
          >
            {board[1]}
          </div>
          <div
            className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	flex justify-center items-center text-5xl"
            onClick={() => {
              play(2);
            }}
          >
            {board[2]}
          </div>
          <div
            className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	flex justify-center items-center text-5xl"
            onClick={() => {
              play(3);
            }}
          >
            {board[3]}
          </div>
        </div>
        <div className="row flex justify-center">
          <div
            className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	flex justify-center items-center text-5xl"
            onClick={() => {
              play(4);
            }}
          >
            {board[4]}
          </div>
          <div
            className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	flex justify-center items-center text-5xl"
            onClick={() => {
              play(5);
            }}
          >
            {board[5]}
          </div>
          <div
            className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	flex justify-center items-center text-5xl"
            onClick={() => {
              play(6);
            }}
          >
            {board[6]}
          </div>
        </div>
        <div className="row flex justify-center">
          <div
            className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out hover:bg-white cursor-grab	flex align justify-center items-center text-5xl "
            onClick={() => {
              play(7);
            }}
          >
            {board[7]}
          </div>
          <div
            className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	flex align justify-center items-center text-5xl"
            onClick={() => {
              play(8);
            }}
          >
            {board[8]}
          </div>
          <div
            className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	flex align justify-center items-center text-5xl"
            onClick={() => {
              play(9);
            }}
          >
            {board[9]}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
