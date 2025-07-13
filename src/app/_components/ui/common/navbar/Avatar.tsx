import React from "react";

export default function Avatar({ avatar }:{avatar:string}) {
  return (
    <div className="h-10 aspect-square rounded-full bg-white/50 flex justify-center items-center border-t-2 border-t-white/50">
      <p className="font-bold">{avatar[0].toUpperCase()}</p>
    </div>
  );
}
