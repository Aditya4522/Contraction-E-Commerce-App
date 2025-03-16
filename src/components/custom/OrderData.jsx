import React from "react";
import { Card } from "../ui/card";
import { ArrowDownToLine, IndianRupee } from "lucide-react";

export default function OrderData({
  amount = 100,
  address = "Sehal, Uttar Pradesh 244001",
  status = "Pending",
  createdAt = "15-05-2025",
  updatedAt = "21-12-2025",
}) {
  return (
    <Card className="grid gap-3 p-2">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center border p-3 rounded-lg bg-gray-100 dark:bg-zinc-900">
        {/* Image & Details */}
        <div className="flex gap-2">
          <img
            src="https://images.pexels.com/photos/31137184/pexels-photo-31137184/free-photo-of-rustic-old-hammer-on-weathered-rocks.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product Image"
            className="w-24 h-24 object-cover rounded-lg hover:scale-105 transition ease-out duration-200"
          />
          <div>
            <h1 className="font-semibold text-sm sm:text-2xl">Title</h1>
            <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
              <span className="flex items-center gap-2 font-medium">
                Color:
                <span
                  className="w-5 h-5 rounded-full border shadow-sm"
                  style={{ backgroundColor: "red" }}
                ></span>
              </span>
              <span className="hidden sm:block">|</span>
              <span className="font-semibold">
                Status:{" "}
                <span className="font-semibold text-green-500">{status}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Price & Quantity */}
        <div className="flex items-end justify-end sm:flex-col gap-3 sm:gap-0 mt-2 sm:mt-0 sm:items-center">
          <h2 className="flex items-center font-bold dark:text-customYellow sm:text-xl">
            <IndianRupee size={18} /> {amount}
          </h2>
          <p className=" dark:text-customYellow text-end">
            Qty: 1
          </p>
        </div>
      </div>

      {/* Order Date & Invoice Download */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <span>
          Ordered on: <span>{createdAt}</span>
        </span>
        <span className="flex items-center gap-1 hover:underline dark:text-customYellow cursor-pointer">
          <ArrowDownToLine size={14} /> Download Invoice
        </span>
      </div>
      <hr />
      <span >Delivery At : <span className="capitalize text-green-500 font-semibold" >5 jan 2025</span></span>
    </Card>
  );
}
