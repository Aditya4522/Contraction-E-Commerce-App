import React from "react";

export default function OrderProductTile() {
  return (
    <div className="flex justify-between bg-zinc-600 shadow-lg p-4 rounded-md w-full">
      <div className="flex gap-4">
        <img
          src="https://plus.unsplash.com/premium_photo-1661501083800-571965273622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9uJTIwbWF0cmlhbHxlbnwwfHwwfHx8MA%3D%3D"
          alt="product"
          className="w-24 h-24 rounded-md object-cover"
        />

        <div className="flex flex-col ">
          <h1 className="text-xl font-semibold font-mono">Lawour</h1>
          <p
            style={{ backgroundColor: "#ffffff" }}
            className="text-black rounded-md px-1 items-center"
          >
            ffffff
          </p>

          <p>Price: 1000</p>
          <p>
            Quantity: <span className="text-yellow-600"> 2</span>
          </p>
        </div>
      </div>
    </div>
  );
}
