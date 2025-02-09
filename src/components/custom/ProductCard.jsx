import { Star } from "lucide-react";
import React from "react";
import LInkBuuton from "./LInkBuuton";
import RatiingGenrater from "@/constants/RatiingGenrater";

export default function ProductCard({
  name = "Product Name",
  image = {
    url: "https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg?auto=compress&cs=tinysrgb&w=600",
    id: "3riauioau3",
  },
  rating = 5,
  price = 2000,
}) {
  return (
    <div className="relative border w-fit overflow-hidden grid z-1 hover:shadow-md transition-shadow duration-300 ease-in-out">
      <img
        src={image.url}
        alt={name}
        className="rounded-md hover:opacity-75 cursor-pointer transition-all ease-out h-80 w-96 object-cover"
      />
      <div className="rounded-md px-3 grid gap-1 py-2 absolute bg-white dark:bg-zinc-900 w-full bottom-0 translate-y-[3rem] hover:translate-y-0 transform transition-all ease-in-out duration-300">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex justify-between items-center">
          <div className="flex">
            <RatiingGenrater rating={rating} size={24} />
          </div>
          <span className="flex items-center">
            <h1 className="font-bold">₹</h1>
            {price}
          </span>
        </div>
        <LInkBuuton to='/product' text="View Product" />
      </div>
    </div>
  );
}