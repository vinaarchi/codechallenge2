"use client";

import React from "react";

const Team = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
        <h1 className="font-rafeny text-center text-5xl pt-10 pb-5">
          Meet The Team
        </h1>
        <img
          src="https://plus.unsplash.com/premium_photo-1714229505550-3518d761d549?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbSUyMGdyb3VwfGVufDB8fDB8fHww"
          className="rounded-md w-1/2 mx-auto"
        />
        <h2 className="font-helvetica pt-3 pb-12 italic text-center mx-auto w-[50%]">
          Setiap anggota memiliki peran unik, bekerja bersama-sama untuk
          menciptakan pengalaman yang luar biasa.
        </h2>
      </div>
    </div>
  );
};

export default Team;
