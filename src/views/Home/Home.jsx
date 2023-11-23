import React from "react";

function Home() {
  return (
    <>
      <figure class="bg-slate-100 rounded-xl py-6  dark:bg-red-300 w-96 mx-auto mt-7 shadow-xl">
        <h1 className="text-3xl font-bold text-center text-dark-50 ">
          {" "}
          <span className="p-2 bg-slate-50 rounded-full me-2"> 🐒</span> Tic Tack Toe{" "}
          <span className="p-2 bg-slate-50 rounded-full ms-2">🐸</span>{" "}
        </h1>
      </figure>
    </>
  );
}

export default Home;
