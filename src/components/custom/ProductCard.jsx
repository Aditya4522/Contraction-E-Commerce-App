import { Star } from "lucide-react";
import React from "react";

import RatingGenerator from "@/constants/RatiingGenrater";
import { Link } from "react-router-dom";
import LInkBuuton from "./LInkBuuton";

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
    <div className="relative border w-fit overflow-hidden group hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-md">
      <Link to="/product">
      <img
        src={image.url}
        alt={name}
        className="rounded-md group-hover:opacity-75 group-hover:scale-105 cursor-pointer transition-all ease-in-out duration-300 h-80 w-96 object-cover"
      />
      </Link>
     

      <div className="absolute bottom-0 w-full bg-white dark:bg-zinc-900 px-3 py-2 transition-all duration-300 transform translate-y-[3rem] group-hover:translate-y-0">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex justify-between items-center">
          <div className="flex">
            <RatingGenerator rating={rating} size={24} />
          </div>
          <span className="flex items-center font-bold">₹{price}</span>
        </div>

        <div className="mt-4 ">
          <Link
            to="/product"
            text="View Product"
            className="px-4 py-2 bg-blue-600 w-full mt-2 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}
