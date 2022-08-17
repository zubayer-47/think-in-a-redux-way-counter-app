import React from "react";

export default function TotalItem({ title, totalItemAmount }) {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-xl font-semibold">
        <p>{title}</p>
        <p className="text-5xl">{totalItemAmount}</p>
      </div>
    </div>
  );
}
