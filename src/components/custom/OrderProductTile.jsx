import React from "react";

export default function OrderProductTile() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-between bg-neutral-800 shadow-md p-3 sm:p-4 rounded-lg w-full text-white hover:cursor-pointer">
      {/* Left: Product Image */}
      <div className="flex gap-3 sm:gap-4 items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1661501083800-571965273622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9uJTIwbWF0cmlhbHxlbnwwfHwwfHx8MA%3D%3D"
          alt="product"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Right: Product Details */}
        <div className="flex flex-col gap-1">
          <h1 className="text-base sm:text-lg font-semibold font-mono">Labour Service</h1>

          <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-3 text-sm sm:text-base">
            {/* Color */}
            <p className="flex items-center gap-2">
              <span className="font-medium">Color:</span>
              <span
                className=" h-6 rounded-md border border-gray-500 inline-block text-gray-800 px-1"
                style={{ backgroundColor: "#ffffff" }}
                title="#ffffff"
              >#ffffff</span>
            </p>

            {/* Price */}
            <p className="font-medium">
              Price: <span className="text-green-400 font-semibold">₹1000</span>
            </p>

            {/* Quantity */}
            <p className="font-medium hover:text-yellow-400 hover:scale-95 transition-transform duration-200 ease-in-out">
              Quantity: <span className="text-yellow-400 font-semibold">2</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
