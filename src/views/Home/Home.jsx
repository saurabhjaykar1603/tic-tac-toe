import React from "react";

function Home() {
  return (
    <>
      <figure class="bg-slate-100 rounded-xl py-6  dark:bg-red-300 w-96 mx-auto mt-7 shadow-xl">
        <h1 className="text-3xl font-bold text-center text-dark-50 ">
          {" "}
          <span className="p-2 bg-slate-50 rounded-full me-2"> 🐒</span> Tic
          Tack Toe <span className="p-2 bg-slate-50 rounded-full ms-2">🐸</span>{" "}
        </h1>
      </figure>
      {/* game box  */}
      <div className="mt-20 bord w-fit block mx-auto p-5 rounded-md shadow-3xl bg-red-300 ">
        <div className="row flex justify-center">
          <div className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	"></div>
          <div className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	"></div>
          <div className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	"></div>
        </div>
        <div className="row flex justify-center">
          <div className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	"></div>
          <div className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	"></div>
          <div className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	"></div>
        </div>
        <div className="row flex justify-center">
          <div className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out hover:bg-white cursor-grab	 "></div>
          <div className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	"></div>
          <div className="box w-28 h-28 bg-slate-100 border border-red-400 hover:shadow-sau hover:z-50 transition delay-150 duration-100 ease-in-out  hover:bg-white cursor-grab	"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
