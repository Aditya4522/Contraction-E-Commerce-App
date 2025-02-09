import React from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RatingGenerator from "@/constants/RatiingGenrater";
import Colors from "@/constants/Color";

export default function Reviews() {
  return (
    <>
      <div className="max-w-8xl lg:max-w-7xl mx-auto px-5">
        <h1 className="items-center text-2xl font-extrabold text-center mt-20 sm:my-10">
          Reviews
        </h1>
        {/* Write Review Section */}
        <div className="space-y-3 ">
          <h3 className="font-bold text-xl">Write a review</h3>
          <Textarea
            placeholder="Your Review "
            className="border-2 border-gray-700"
          />
        </div>
        <div className="flex  gap-3 mt-5">
          <Input
            className="w-40"
            placeholder="Rating 1-5"
            type="number"
            min="1"
            max="5"
            step="1"
          />
          <Button>Summit review</Button>
        </div>
        {/* Review List */}
        <div className="space-y-5 my-10">
          <div className="bg-white border-2 border-gray-500 p-6 rounded-xl shadow-lg dark:bg-zinc-900 dark:border-none ">
            {/* Reviwer info */}
            <div className="flex items-center mb-4 gap-2">
              <Avatar className="w-12 h-12 border-2 border-gray-600 p-[2px] mr-2 ">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="object-cover rounded-full hover:scale-110 transition-all ease-out cursor-pointer"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="mt-3 font-semibold font-serif"> Aditya</h1>
                <div className="flex items-start mt-1">
                  <RatingGenerator
                    stroke="0"
                    rating={4.5}
                    fill={Colors.customYellow}
                  />
                </div>
              </div>
            </div>
            {/* Review content */}
            <p className="text-black text-sm dark:text-customGray  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              provident.
            </p>
            {/* Review reply */}
            <div className="py-4 bg-gray-100 dark:bg-zinc-800 rounded-lg px-4 mt-4">
              <h5 className=" font-semibold text-yellow-600 dark:text-customGray">
                Repiles (2){" "}
              </h5>
              <div className="flex">
                <Avatar className="w-10 h-10 border-2 border-gray-600 p-[2px] mr-2 ">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="object-cover rounded-full hover:scale-110 transition-all ease-out cursor-pointer"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid">
                  <h2 className="capitalize text-md mt-1 font-semibold dark:text-customGray font-serif ">
                    {" "}
                    coder20
                  </h2>
                  <p className="text-sm ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed, voluptatum.
                  </p>
                </div>
              </div>
            </div>
            {/* reply from */}
            <div className="my-3">
              <Textarea
                placeholder=" Write your reply... "
                className="border-2 border-gray-700"
              />
              <button className="my-3 border-2 border-black  dark:border-white px-5 py-2 rounded-lg dark:hover:bg-white hover:bg-black hover:text-white hover:border-white dark:hover:text-black dark:hover:border-black transition-all ease-in-out duration-300">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
