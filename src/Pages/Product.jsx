import Reviews from "@/components/custom/Reviews";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Colors from "@/constants/Color";
import RatingGenerator from "@/constants/RatiingGenrater";
import { Circle, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const productStokes = 15;
const ImagesArray = [
  {
    url: "https://images.pexels.com/photos/3752575/pexels-photo-3752575.jpeg?auto=compress&cs=tinysrgb&w=600",
    id: 1,
  },
  {
    url: "https://images.pexels.com/photos/11373968/pexels-photo-11373968.jpeg?auto=compress&cs=tinysrgb&w=600",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/6095810/pexels-photo-6095810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: 3,
  },
  {
    url: "https://images.pexels.com/photos/7894966/pexels-photo-7894966.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    id: 4,
  },
];
export default function Products() {
  
  const [quantity, setQuantity] = useState(2);
  const [availabilityMessage, setAvailabilityMessage] = useState()
  const [pincode, setPincode] = useState();
  const [productPurchuse, setProductPurchuse] = useState(false)
  const [address, setAddress] = useState()
  
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-5 sm:py-16  dark:from-gray-900 dark:to-black">
      <main className="max-w-8xl sm:max-w-7xl mx-auto px-3 sm:px-5 ">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-5 shadow-2xl dark:bg-gray-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side */}
            <div className="space-y-5">
              {/* Main image */}
              <div className=" h-[360px] sm:h-[70vh] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img
                  src={ImagesArray[0].url}
                  alt="Main Product"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Thumbnail images */}
              <div className="grid grid-cols-4 gap-4">
                {ImagesArray.map((arr) => (
                  <div
                    key={arr.id}
                    className="relative group rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5"
                  >
                    <img
                      src={arr.url}
                      alt={`Thumbnail ${arr.id}`}
                      className="w-full h-20 sm:h-24 object-cover group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col justify-center space-y-3 sm:space-y-8">
              <div className=" md:space-y-2">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Premium Collection
                </span>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-200">
                  Luxurious Lifestyle
                </h1>
              </div>

              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span className="flex ">
                {
                  <RatingGenerator
                    stroke="0"
                    rating={4.5}
                    fill={Colors.customYellow}
                  />
                }
              </span>
              <div className="flex flex-col gap-3 sm:gap-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Rs. 119.99
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    &#8377; 129.99
                  </span>
                </div>
                <div className="gap-1">
                  <span>
                    EMI: Rs. 22<span className="text-yellow-600">/month</span>
                  </span>{" "}
                  {""}
                  <span>suggested payment with 6 month special finance</span>
                </div>
                <div className="flex">
                  <Circle
                    stroke="0"
                    fill={Colors.customIsabelline}
                    size={40}
                    className="hover:opacity-75 cursor-pointer "
                  />
                  <Circle
                    stroke="0"
                    fill={Colors.customblack}
                    size={40}
                    className="hover:opacity-75 cursor-pointer "
                  />
                  <Circle
                    stroke="0"
                    fill={Colors.customGray}
                    size={40}
                    className="hover:opacity-75 cursor-pointer "
                  />
                </div>
                <div className="flex  items-center gap-2">
                  {/* Quantity Selector */}
                  <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 w-fit text-black rounded-full">
                    <Minus
                      className="cursor-pointer"
                      onClick={() =>
                        setQuantity((prevQty) =>
                          prevQty > 1 ? prevQty - 1 : 1
                        )
                      }
                    />
                    <span className="font-medium text-lg">{quantity}</span>
                    <Plus
                      className="cursor-pointer"
                      onClick={() =>
                        setQuantity((prevQty) =>
                          prevQty < productStokes ? prevQty + 1 : prevQty
                        )
                      }
                    />
                  </div>

                  {/* Stock Warning Message */}
                  {productStokes - quantity <= 5 && (
                    <div className="flex items-center gap-1 text-gray-500 font-semibold text-base">
                      <span>Only:</span>
                      <span className="text-customYellow font-bold">
                        {productStokes - quantity} items
                      </span>
                      <span>left</span>
                    </div>
                  )}
                </div>
                {/* pincode input with button */}
                  <div className="grid gap-3 ">
                      <div className="flex gap-3">
                        <Input placeholder="Enter Pincode" className="border-black dark:border-white" onChange={(e)=>setPincode(e.target.value)}/>
                        <Button className="text-sm font-serif hover:scale-105 transition-all ease-in-out duration-300"> Check Availability</Button>
                      </div>
                      <p className="px-2 text-sm">{availabilityMessage}</p>
                  </div>
                  <div className="flex gap-3   items-start">
                  <button className=" group relative px-8  py-1 sm:py-4 w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white hover:opacity-75 shadow-lg ">
                  <div className="absolute inset-0 w-1/3 skew-x-[-20deg] group-hover:animate-[shine_1s_ease-in-out]" />
                  <span className="relative font-semibold text-md sm:text-lg">
                    Add ot card
                  </span>
                </button>
                <button className=" group relative px-8 py-4 w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white hover:opacity-75 shadow-lg " onClick={()=>setProductPurchuse(true)}>
                  <div className="absolute inset-0 w-1/3 skew-x-[-20deg] group-hover:animate-[shine_1s_ease-in-out]" />
                  <span className="relative font-semibold text-lg">
                    Buy now
                  </span>
                </button>
                </div>
                {/* buy single order address */}
                <div>
                {productPurchuse &&(
                  <div className="grid space-y-3 transition-all ease-in-out duration-300">
                    <Input placeholder="Enter Your Address Here.." className="border-black dark:border-white" onChange={(e)=>setAddress(e.target.value)} />
                    <Button className="w-fit px-3 ">Conform Order</Button>
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* review section */}
      <Reviews/>
    </div>
  );
}
